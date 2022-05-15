import {useEffect, useState} from "react";

let globalState = {}
let listeners = []
let actions = {}

//have state in my custom hook, and that will be global state => it's not re-created when we call useStore
//it will be created only once when this file is first import
//any other file that imports from the same file will also use that same state
//!!!!share logic and data by managing the data outside the hook
export const useStore = (shouldListen = true) => {
    //只对更新数据的方法感兴趣
    const setState = useState(globalState)[1]

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = {...globalState, ...newState}
    }

    for (const listener of listeners) {
        listener(globalState) //listeners里push的setState都是function
    }

    //this effect will now only run for the component that uses custom hook to amount
    useEffect(() => {
        if (shouldListen){
            listeners.push(setState)
        }

        //remove listener when component unmount
        return ()=>{
            if (shouldListen){
                listeners = listeners.filter(
                    item => item !== setState)
            }
        }
    }, [setState, shouldListen])
    return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = {...globalState, ...initialState}
    }
    actions = {...actions, ...userActions}
}