<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>

<script>
    export default {
        name: 'qqq',
        data() {
            return {
                msg: 'params page'
            }
        },
        computed: {

        },
        methods: {

        },
        components: {

        },
        beforeRouteEnter: (to, from, next) => {
            console.log("准备进入路由模板");
            next();
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("准备离开路由模板");
            next();
        }
    }
</script>

<style scoped>

</style>