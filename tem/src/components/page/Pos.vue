<template>
  <div class="pos">
    <!-- {{message}}
    <i class="icon iconfont  icon-canting1"></i> -->

    <el-row>
      <el-col v-bind:span="7" class="pos-order" id="order-list">
        商品分类栏
      </el-col>
      <el-col :span="17">
        商品展示栏
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Pos',
    data() {
      return {
        message: " Hello Pos Demo!"
      }
    },
    computed: {

    },
    methods: {

    },
    components: {

    },
    mounted: function () {
      var orderHeight=document.body.clientHeight;
      console.log("orderHeight:"+orderHeight);
      document.getElementById("order-list").style.height=orderHeight+'px';
    },
  }
</script>

<style scoped>
 .pos-order{
  background-color: #c4c7c9;
  border-right: 1px double #080808;
  text-align: center;
  height: 100%;
}
</style>