/*
 * @Author: your name
 * @Date: 2021-02-23 14:55:03
 * @LastEditTime: 2021-02-23 14:59:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/src/store/index.ts
 */
import { createStore } from 'vuex'
export default createStore ({
    state: {
        listData: {1: 10},
        num: 10
    },
    mutations:{
        setData(state, value){
            state.listData = value
        },
        addNum(state){
            state.num = state.num+1
        }
    },
    actions: {
        setData(context, value){
            context.commit('setData', value)
        }
    },
    modules: {}
})