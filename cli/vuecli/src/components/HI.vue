<template>
 <div>
 <h1>hi,大家好,我是{{name}}</h1>
 <!--路由里的name，通过$route.name传参  -->
 <p>我是传过来的参数{{ $route.name}}</p>

<!-- 给子模板提供插入位置 -->
 <router-view class="qq"></router-view>
 </div>
</template>

<script>
 export default {
   name:'aa',
   data () {
     return {
        name:"刘德华,周杰伦"
     }
   },
   computed:{
 
   },
   methods:{
 
   },
   components: {
 
   },
 }
</script>

<style scoped>
  .qq{
    color: red;
  }
 
</style>

