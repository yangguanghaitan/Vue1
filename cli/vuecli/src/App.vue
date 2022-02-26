<template>
  <div id="app">
    <p>
      <!--添加导航条  -->
    <router-link to="/">首页</router-link>
    <router-link to="/hi">HI页面</router-link>
    <router-link to="/hi/hi1">HI1页面</router-link>
    <router-link :to="{name:'2222',params:{username:'彭于晏',age:44}}">HI2页面</router-link>
    <!-- <p>我是传过来的参数{{ $route.name}}</p> -->
  </p>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
