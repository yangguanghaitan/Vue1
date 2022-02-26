<template>
    <div>
       <h1>hi,大家好,我是{{name}}</h1>
       <P>{{$route.params.username}}={{$route.params.age}}</P>
    </div>
   </template>
   
   <script>
    export default {
      name:'hi2',
      data () {
        return {
           name:"hi22222222"
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
    
   </style>
   