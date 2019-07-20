import VueRouter from 'vue-router'

/*引入内容组件*/
import home from './components/tabbar/homeContainer.vue'
import search from './components/tabbar/searchContainer.vue'
import shopCar from './components/tabbar/shopCarcontainer.vue'
import vip from './components/tabbar/vipContainer.vue'
import newlist from './components/news/news.vue'
import newsInfo from './components/news/newsInfo.vue'
import photo from './components/imgshare/navList.vue'
// import photo2 from './components/imgshare/imgList2.vue'
// import photo3 from './components/imgshare/imgList3.vue'
// import photo4 from './components/imgshare/imgList4.vue'


/*创建路由器*/
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home/news',component:newlist},
        {path:'/home/photo',component:photo},
        // {path:'/home/photo2',component:photo2},
        // {path:'/home/photo3',component:photo3},
        // {path:'/home/photo4',component:photo4},
        {path:'/home/newsinfo/:id',component:newsInfo,},
        {path:'/home',component:home},
        {path:'/vip',component:vip},
        {path:'/search',component:search},
        {path:'/shopCar',component:shopCar}
    ],
    /*linkActiveClass:mui-active设置图标高亮*/
    linkActiveClass:'mui-active'
});

//将对象暴露出去
export default router;

