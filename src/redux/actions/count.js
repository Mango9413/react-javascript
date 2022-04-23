import {INCREMENT, DECREMENT} from "../constant";

export const createIncrement = data => ({type: INCREMENT, data})
export const createDecrement = data => ({type: DECREMENT, data})

export const createIncrementAsync = (data, time) => {
    return (dispatch)=>{
        setTimeout (()=>{
            dispatch(createIncrement(data))
        }, time)
    }
}