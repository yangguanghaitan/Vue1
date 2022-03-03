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
              <li v-for="good in oftenGoods">
                <!-- <p> -->
                <span>{{good.goodsName}}</span>
                <span class="o-price">￥{{good.price}}元</span>
                <!-- </p> -->
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs type="border-card">
            <el-tab-pane label="汉堡">
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
            <el-tab-pane label="小食">配置管理</el-tab-pane>
            <el-tab-pane label="饮料">角色管理</el-tab-pane>
            <el-tab-pane label="套餐">套餐</el-tab-pane>
          </el-tabs>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Pos',
    data() {
      return {
        message: " Hello Pos Demo!",
        activeName: 'third',

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

        oftenGoods: [
          {
            goodsId: 1,
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsName: '可乐大杯',
            price: 10
          }, {
            goodsId: 8,
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsName: '香脆鸡柳',
            price: 17
          }
        ],

        type0Goods: [
          {
            goodsId: 1,
            goodsImg: "http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg",
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsImg: "http://b.hiphotos.baidu.com/image/pic/item/e824b899a9014c08878b2c4c0e7b02087af4f4a3.jpg",
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsImg: "http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsImg: "http://e.hiphotos.baidu.com/image/pic/item/4bed2e738bd4b31c1badd5a685d6277f9e2ff81e.jpg",
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsImg: "http://g.hiphotos.baidu.com/image/pic/item/0d338744ebf81a4c87a3add4d52a6059252da61e.jpg",
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsImg: "http://a.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494ee5080c8142ff5e0fe99257e19.jpg",
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsImg: "http://f.hiphotos.baidu.com/image/pic/item/4034970a304e251f503521f5a586c9177e3e53f9.jpg",
            goodsName: '可乐大杯',
            price: 10
          }, {
            goodsId: 8,
            goodsImg: "http://a.hiphotos.baidu.com/image/pic/item/e824b899a9014c087eb617650e7b02087af4f464.jpg",
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsImg: "http://d.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01f119945cbe2fe9925bc317d2a.jpg",
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsImg: "http://a.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a292d2472199d25bc315d607c7c.jpg",
            goodsName: '香脆鸡柳',
            price: 17
          }

        ],
      }
    },
    computed: {

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      del() {
        alert(111)
      },
      add() {
        alert(222)
      }
    },
    components: {

    },
    mounted: function () {
      var orderHeight = document.body.clientHeight;
      // console.log("orderHeight:" + orderHeight);
      document.getElementById("order-list").style.height = orderHeight + 'px';
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