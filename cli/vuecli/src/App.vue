<template>
  <div id="app">
    <p>
      <!--添加导航条  -->
    <router-link to="/">首页</router-link>
    <router-link to="/hi">HI页面</router-link>
    <router-link to="/hi/hi1">HI1页面</router-link>
    <router-link :to="{name:'2222',params:{username:'彭于晏',age:44}}">HI2页面</router-link>
    <router-link :to="{name:'wwww'}">单页面多路由区域操作</router-link>
    <!-- <p>我是传过来的参数{{ $route.name}}</p> -->
    <router-link to="/params/198/jspang website is very good">params</router-link>
    <router-link to="/bwed/000000/333333">重定向到params</router-link>
    <router-link to="/uuu/11111/5555">alias实现重定向到</router-link>
    <router-link to="/hjk">找不到路径</router-link>
    <router-link to="/vuex">Vuex小Demo</router-link>
    <button @click="goback">后退</button>
    <button @click="goHome">回到首页</button>
  </p>
    <img src="./assets/logo.png">
    <router-view/>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"/>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  },
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
