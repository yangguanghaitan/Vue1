### 学习Vue大本营
> 1. tem:项目名字，template的全称，模板的意思，表示以后可以多增加功能。
> 2. 疑惑点: padding,margin
> 3. 使用axios可以在main.js全局引入，单独写一个api.js文件用来发送请求
> 4. 9.10.11没实践
1. npm install:安装package.json里项目的依赖包
2. npm -n install element-ui --save:使用npm的方式安装element-ui，它能更好地和webpack打包工具配合使用
3. npm -n install axios --save:axios是需要打包到生产环境中的，所以我们使用–save来进行安装。

---
>偏前端
1. **src**:\<a href="www.xxx.com"><\img src="1.jpg"></a> src是替换,会自动发送请求;引入js(如 \<script th:src="@{/js/jquery.min.js}"></script>)
2. **href**:href是连接 ;引入css(如\<link th:href="@{/css/bootstrap.min.css}" rel="stylesheet"/>")
3. ajax: 主要操作XmlHttpRequest,发送异步请求,jquery可以让HTML文档遍历和操作、事件处理、动画等等Javascript的内容和Ajax操作更加简单
4. alt与title: alt可以发挥title，但主要是用来在值显示不出来时作为替代的，title是提示用的







---
# tem

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
