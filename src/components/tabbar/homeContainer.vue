<template>
    <div>
        <!--轮播图区-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <a href="#"><img src="../../images/xiaomi_1.jpg" alt="" ></a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#"><img src="../../images/xiaomi_2.jpg" alt="" ></a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#"><img src="../../images/xiaomi_3.jpg" alt="" ></a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#"><img src="../../images/xiaomi_4.jpg" alt="" ></a>
            </mt-swipe-item>
        </mt-swipe>



        <!--六宫格展示区-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">留言专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">我的钱包</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">更多服务</div></a></li>

        </ul>

    </div>
</template>

<script>
    export default {
        data:function () {
            return {}
        },
        created(){

        },
        methods:{

        }
    }
</script>

<style>
    .mint-swipe{
        height: 200px!important;
    }
    .mint-swipe:hover{
        cursor: pointer!important;
    }
    .mint-swipe img{
        width: 500px!important;
        height: 200px!important;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 1px solid #fff;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell img{
        width: 60px;
        height: 60px;
    }
    .mui-col-sm-3{
        width: 33%;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 14px;
    }

</style>