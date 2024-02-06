/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-21 10:22:34
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 14:57:38
 */
//  shallowReactive (浅的劫持，浅的监视，浅的响应式) 与 reactive(深的)

// 定义一个reactiveHandler处理对象
const reactiveHandler = {
    // 获取属性值
    get (target, prop) {
        if (prop === "_is_reactive") return true;
        const result = Reflect.get(target, prop);
        console.log('拦截了读取数据', prop, result);
        return result;
    },
    // 修改属性值
    set (target, prop, value) {
        const result = Reflect.set(target, prop, value);
        console.log('拦截了修改或者添加属性', prop, result);
        return result;
    },
    // 删除属性值
    deleteProperty (target, prop) {
        const result = Reflect.deleteProperty(target, prop);
        console.log("拦截了删除数据", prop);
        return result;
    },
}


// 定义一个shallowReactive函数，传入一个目标对象
function shallowReactive (target) {
    // 判断当前目标对象是不是object类型（对象/数组）
    if (target && typeof target === 'object') {
        return new Proxy(target, reactiveHandler);
    }
    // 传入基本类型，直接返回
    return target
}


// 定义一个reactive函数，传入一个目标对象
function reactive (target) {
    // 判断当前目标对象是不是object类型（对象/数组）
    if (target && typeof target === 'object') {
        // 对数组/对象 中所有的数据进行reactive递归处理
        // 判断是不是数组
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = reactive(item)
            })
        } else {
            // 判断是不是对象
            Object.keys(target).forEach((key) => {
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target, reactiveHandler);
    }

    // 传入基本类型，直接返回
    return target
}

// =================================================================
// 定义一个readonlyHandler处理对象
const readonlyHandler = {
    // 获取属性值
    get (target, prop) {
        if (prop === "_is_readonly") return true
        const result = Reflect.get(target, prop);
        console.log('拦截了读取数据', prop, result);
        return result;
    },
    // 修改属性值
    set (target, prop, value) {
        console.warn('只能读取数据，不能修改数据');
        return true;
    },
    // 删除属性值
    deleteProperty (target, prop) {
        console.warn('只能读取数据，不能删除数据');
        return true;
    },
}

// 自定义shallowReadonly
function shallowReadonly (target) {
    // 判断当前目标对象是不是object类型（对象/数组）
    if (target && typeof target === 'object') {
        return new Proxy(target, readonlyHandler);
    }
    // 传入基本类型，直接返回
    return target
}

// 自定义readonly
function readonly (target) {
    // 判断当前目标对象是不是object类型（对象/数组）
    if (target && typeof target === 'object') {
        // 对数组/对象 中所有的数据进行readonly递归处理
        // 判断是不是数组
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = readonly(item)
            })
        } else {
            // 判断是不是对象
            Object.keys(target).forEach((key) => {
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target, readonlyHandler);
    }

    // 传入基本类型，直接返回
    return target
}

//  =================================================================
// 自定义shallowRef
function shallowRef (target) {
    return {
        _value: target,// 用来保存数据的内部属性
        get value () {
            console.log("劫持到了读取数据");
            return this._value
        },
        set value (val) {
            console.log("劫持到了修改数据");
            this._value = val
        }
    }
}

// 自定义ref
function ref (target) {
    target = reactive(target);
    return {
        _is_ref: true,
        _value: target,// 用来保存数据的内部属性
        get value () {
            console.log("劫持到了读取数据");
            return this._value
        },
        set value (val) {
            console.log("劫持到了修改数据");
            this._value = val
        }
    }
}

// ===============================

// 判断是否是ref对象
function isRef (obj) {
    return obj && obj._is_ref
}
// 判断是否是reactive对象
function isReactive (obj) {
    return obj && obj._is_reactive
}
// 判断是否是readonly对象
function isReadonly (obj) {
    return obj && obj._is_readonly
}
// 判断是否是reactive或readonly产生的代理对象
function isProxy (obj) {
    return isReactive(obj) || isReadonly(obj)
}