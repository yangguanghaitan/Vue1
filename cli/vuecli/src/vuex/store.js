import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:2,
    num:2
}
const mutations={
    add(state){
        state.count++,
        state.num++;
    },
    reduce(state){
        state.count--;
        state.num--;
    }
}

export default new Vuex.Store({
    state,
    mutations

})