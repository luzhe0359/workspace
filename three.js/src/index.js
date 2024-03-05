/*
 * @Author: luzhe0359
 * @Date: 2024-02-06 17:44:10
 * @LastEditors: luzhe0359
 * @LastEditTime: 2024-03-05 15:47:56
 * @Description: // ? 切换引入的js，查看对应效果  PS：修改序号即可显示对应效果，若不设置序号，则显示最后一个效果 EG: Index='01' 展示'01_创建3D场景'效果
 */

const modules = import.meta.glob('./01_threejs快速入门/*.js') // 导入多个模块
const Index = '' // 路径序号
const allPath = Object.keys(modules) // 所有路径
const lastPath = allPath[allPath.length - 1] // 最后一个路径
const showPath = (Index && allPath.find(p => p.includes(Index))) || lastPath // 要显示的路径
modules[showPath]() // 引入对应js模块
