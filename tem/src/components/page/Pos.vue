<template>
  <div class="pos">
    <!-- {{message}}
    <i class="icon iconfont  icon-canting1"></i> -->

    <el-row>
      <!-- 左侧框架 -->
      <el-col v-bind:span="7" class="pos-order" id="order-list">
        <!--Tabs标签页  -->
        <el-tabs v-model="activeName" @tab-click="handleClick">

          <el-tab-pane label="点餐" name="first">
            <!-- Table表单 -->
            <el-table :data="tableData" border show-summary style="width: 100%">
              <el-table-column prop="goodsName" label="商品" width="100">
              </el-table-column>
              <el-table-column prop="count" label="量" width="50">
              </el-table-column>
              <el-table-column prop="price" label="金额" width="70">
              </el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="del">删除</el-button>
                  <el-button type="text" size="small" @click="add">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="buttonInfo">
              <el-button type="success">结账</el-button>
              <el-button type="info">挂单</el-button>
              <el-button type="danger">删除</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane label="挂单" name="second">
            2.挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">
            3.外卖</el-tab-pane>
        </el-tabs>
      </el-col>

      <!-- 右侧框架布局 -->
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="good in oftenGoods" >
                <!-- <p> -->
                <span>{{good.goodsName}}</span>
                <span class="o-price">￥{{good.price}}元</span>
                <!-- </p> -->
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs type="border-card" v-model="activeGoodsType" @tab-click="showHanBao">
            <el-tab-pane label="汉堡" name="hanbao">
              <ul class='cookList'>
                <li>
                  <span class="foodImg"><img src="../../assets/logo.png" width="100%"></span>
                  <span class="foodName">香辣鸡翅</span>
                  <span class="foodPrice">￥22222222元</span>
                </li>
                <li v-for="good in type0Goods">
                  <span class="foodImg"><img :src="good.goodsImg" width="100%"></span>
                  <span class="foodName">{{good.goodsName}}</span>
                  <span class="foodPrice">￥{{good.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食" name="xiaoshi" >配置管理</el-tab-pane>
            <el-tab-pane label="饮料" name="yinliao">角色管理</el-tab-pane>
            <el-tab-pane label="套餐" name="taocan">套餐</el-tab-pane>
          </el-tabs>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  // const axios = require('axios').default;
  import axios from 'axios';
  const instance = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 1000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
    }
  });
  export default {
    name: 'Pos',
    data() {
      return {
        message: " Hello Pos Demo!",
        activeName: 'third',
        activeGoodsType: 'xiaoshi',
        errored: false,
        loading: true,
        // aa: null,
        oftenGoods: [],
        type0Goods: [],

        tableData: [{
          goodsName: '可口可乐',
          price: 8,
          count: 1
        }, {

          goodsName: '香辣鸡腿堡',
          price: "15",
          count: 1
        }, {

          goodsName: '爱心薯条',
          price: 8,
          count: 1
        }, {

          goodsName: '甜筒',
          price: 8,
          count: 1
        }],
      }
    },
    computed: {

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      del() {
        /*   axios
            .get('http://localhost:8088/article/12/')
            .then(response => {
              this.aa = response.data
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => this.loading = false);
          console.log("this.aa=" + this.aa); */
        alert(111);
      },
      add() {
        alert(222)
      },
      showHanBao() {
        //获取汉堡分类小商品
        axios.get('http://localhost:8088/vue/type0Goods/')
          .then(response => {
            this.type0Goods = response.data.type0Goods;
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false);
      },
      // //添加商品
      // addOrderList:function(){
      //   alert()88
      // }

    },
    components: {

    },
    mounted: function () {
      var orderHeight = document.body.clientHeight;
      // console.log("orderHeight:" + orderHeight);
      document.getElementById("order-list").style.height = orderHeight + 'px';
    },

    created: function () {
      //获取常用食品
      axios.get('http://localhost:8088/vue/oftenGoods/')
        .then(response => {
          //console.log()显示为对象，看不到数据
          this.oftenGoods = response.data.oftenGoods;
          //console.log()显示为json字符串，可以看到数据 JSON.parse(jsonString);
          this.oftenGoods1 = JSON.stringify(response.data.oftenGoods);
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false);
    },
  }
</script>

<style scoped>
  .pos-order {
    background-color: #c4c7c9;
    border-right: 1px double #080808;
    text-align: center;
    height: 100%;
  }

  .title {
    height: 20px;
    border-bottom: 5px solid #D3DCE6;
    background-color: #D3DCE6;
    padding: 10px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    cursor: pointer;
  }

  .o-price {
    color: #58B7FF;
  }

  .buttonInfo {
    margin-top: 10px;
  }

  .goods-type {
    /* 清除浮动 */
    clear: both;
  }

  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;

  }

  .cookList li span {

    display: block;
    float: left;
  }

  .foodImg {
    width: 40%;
  }

  .foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;

  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
</style>