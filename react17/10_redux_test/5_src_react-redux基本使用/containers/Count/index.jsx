import CountUI from '../../components/Count'
// 引入connect用于连接redux
import { connect } from 'react-redux'
// 
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";

/*
    1.mapStateToProps 函数返回一个对象
    2.返回的对象的key作为传递给UI组件props的key,value作为传递给UI组件props的value
    3.mapStateToProps 用于传递状态
 */
function mapStateToProps (state) {
    return { count: state }
}

/* 
    1.mapDispatchToProps 函数返回一个对象
    2.返回的对象的key作为传递给UI组件props的key,value作为传递给UI组件props的value
    3.mapDispatchToProps 用于传递操作状态的方法
 */
function mapDispatchToProps (dispatch) {
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)