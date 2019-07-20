<template>
    <div class="app-content">
        <!--header头部-->
        <mt-header title="我的淘宝"></mt-header>


        <!--中间路由router-->
        <transition>
            <router-view></router-view>
        </transition>




        <!--底部footer-->
        <nav class="mui-bar mui-bar-tab footer">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/vip">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>

</script>

<style>
    /*设置切换动画*/
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }


    .v-enter-active,
    .v-leave-active{
     transition: all 0.5s ease;
    }


    /*顶部*/
    .mint-header{
        /*position: fixed!important;*/
        height: 70px!important;
        font-size: 25px!important;
        background-color: #313131!important;
    }
    /*整个手机*/
    .app-content{
        width: 500px;
        height: 800px;
        background-color: #F8F8F8;
        border: 1px solid #BBBBBB;
        position: relative;
        margin: 20px auto;
        overflow: hidden;
    }

    /*底部*/
    .footer{
        height: 70px!important;
        width: 499px !important;
        margin: 0 auto !important;
        position: absolute!important;
        background-color: #313131!important;
        box-shadow:none!important;
        border-top:1px solid #BBBBBB!important;
    }

    /*轮播图*/
    .mui-tab-item{
        color: #fff!important;
        font-size: 30px!important;
    }
    .mui-active{
        color: #FF4248!important;
    }
    .mui-tab-label{
        font-size: 14px!important;
    }
</style>