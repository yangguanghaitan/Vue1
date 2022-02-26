<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}=={{$store.state.num}}=={{$store.state.count11}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    export default {
        name: '',
        data() {
            return {
                msg:'Hello Vuex',
            }
        },
        store,
        computed: {

        },
        methods: {

        },
        components: {

        },
    }
</script>

<style scoped>

</style>