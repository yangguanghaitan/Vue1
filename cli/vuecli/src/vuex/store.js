import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:2,
    num:2
}
const mutations={
    add(state,n){
        state.count+=n,
        state.num+=n;
    },
    reduce(state){
        state.count--;
        state.num--;
    }
}
const getters={
    count:function(state){
          state.count+=100;
    }
}
const actions ={
    addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions

})