import {INCREMENT, DECREMENT} from "./constant";

const initState = 0 //设置初始化状态
const countReducer = (preState=initState, action) => {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}

export default countReducer