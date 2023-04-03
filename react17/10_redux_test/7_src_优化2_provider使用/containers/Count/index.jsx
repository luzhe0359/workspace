import CountUI from '../../components/Count'
// 引入connect用于连接redux
import { connect } from 'react-redux'
// 
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";

export default connect(
    state => ({ count: state }),
    // mapDispatchToProps 一般写法
    // dispatch => ({
    //     jia: number => dispatch(createIncrementAction(number)),
    //     jian: number => dispatch(createDecrementAction(number)),
    //     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    // })
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(CountUI)