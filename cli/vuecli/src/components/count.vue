<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h3>第1种访问值的方式:{{$store.state.count}}=={{$store.state.num}}</h3>
    <h3>第2种访问值的方式:{{count}}</h3>
    <div>
      <button @click="$store.commit('add',5)">+</button>
      <button @click="$store.commit('reduce')">-</button>

      <button @click="reduce">--</button>
      <button @click="add(8)">++</button>

      <p>
        <button @click="addAction">addAction</button>
        <button @click="reduceAction">reduceAction</button>
      </p>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      msg: "Hello Vuex"
    };
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
  // computed: mapState({
  //     count: state => state.count
  // }),
  //2.3的改造版,使用ES6中的展开运算符”…”
  computed: {
    ...mapState(["count"]),
    //使用getters
    // count() {
    //   return this.$store.getters.count;
    // },
    //通过map的引用使用getters
    ...mapGetters(["count"])
  },
  //方法改造下面...的形式
  // methods: mapMutations(["add", "reduce"]),
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"])
  },
  components: {}
};
</script>

<style scoped>
</style>