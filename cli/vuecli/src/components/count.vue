<template>
    <div>
        <h2>{{msg}}</h2>
        <hr />
        <h3>第1种访问值的方式:{{$store.state.count}}=={{$store.state.num}}</h3>
        <h3>第2种访问值的方式:{{count}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import { mapState } from 'vuex';
    export default {
        name: '',
        data() {
            return {
                msg: 'Hello Vuex',
            }
        },
        store,
        //第2.1种
        // computed: {
        //     count() {
        //         return this.$store.state.count+this.$store.state.num;
        //     }
        // },
        //第2.2种
        // computed:mapState(["count"]),
        //第2.3种
        computed: mapState({
            count: state => state.count
        }),
        methods: {

        },
        components: {

        },
    }
</script>

<style scoped>

</style>