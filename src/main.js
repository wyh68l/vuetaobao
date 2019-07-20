// 这是 main.js 是我们项目的JS入口文件
import Vue from 'vue'
import app from './app.vue'
import VueResource from 'vue-resource'
import $ from 'jquery'
import vuex from 'vuex'
Vue.use(VueResource)
Vue.use(vuex)

//导入时间格式化插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern = "YYYY-MM-DD hh:mm:ss") {
    return moment(dataStr).format(pattern);
})

//定义vuex公共仓库
//vuex可以让所有组件访问公共数据
var store = new vuex.Store({
    state:{
        //专门用来存储数据，和data很象
        //使用this.$store.state.属性名来取值
        count:0
    },
    mutations:{
        //如果要修改store里的值，不推荐直接调用值后修改，应该通过调用mutations提供的方法来操作数据
        //通过this.$store.commit('方法名')来调用
        increment(state){
            state.count++
        },

    },
    getters:{
        //只负责提供数据，不负责修改数据,每当count数据改变都会触发getters里的数据
        optCount:function (state) {
            return '当亲最新的值'+state.count
        }
    }
});


//导入jsonp
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp)

//导入样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './css/index.css'
// import 'bootstrap'


//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'



//引入mintui
import MintUI from 'mint-ui'
import   '../node_modules/mint-ui/lib/style.css'
Vue.use(MintUI)



var vm = new Vue({
  el: '#app',
  data: {
  },
    render:function (create) {
        return create(app);
    },
    router,
    //挂载vuex
    store
});



