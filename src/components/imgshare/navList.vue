<template>
    <div class="contentImg">
        <!--顶部滑动-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item item1" @click="flagChange">
                        推荐
                    </a>
                    <a class="mui-control-item item2" @click="flagChange">
                        动漫
                    </a>
                    <a class="mui-control-item item3" @click="flagChange">
                        二次元
                    </a>
                    <a class="mui-control-item item4" @click="flagChange">
                        更多
                    </a>
                </div>
            </div>
        </div>

        <!--图片区-->
        <transition-group>
            <list1 v-show="flag1" :key="1"></list1>
            <list2 v-show="flag2" :key="2"></list2>
            <list3 v-show="flag3" :key="3"></list3>
            <list4 v-show="flag4" :key="4"></list4>
        </transition-group>

    </div>
</template>


<script>
    import list1 from './imgList.vue'
    import list2 from './imgList2.vue'
    import list3 from './imgList3.vue'
    import list4 from './imgList4.vue'
    import $ from 'jquery'

    export default {
        data:function () {
            /*初始化flag来判断显示哪个组件*/
            return {
                flag1:true,
                flag2:false,
                flag3:false,
                flag4:false
            }
        },
        components:{
            "list1":list1,
            "list2":list2,
            "list3":list3,
            "list4":list4
        },
        mounted(){
            /*设置点击的效果*/
            $('.mui-control-item').click(function () {
                $(this).css('color','#FD4000').siblings().css('color','#fff');
            })
        },
        methods:{
            flagChange(){
                //先将左右组件都隐藏
                this.flag1 = this.flag2 = this.flag3 = this.flag4 = false;
                var that = this;

                $('.mui-control-item').click(function () {
                    /*判断是哪个组件该显示出来*/
                    var index = parseInt($(this).index());
                    if(index === 0){
                        that.flag1 = true
                    }else if(index === 1){
                        that.flag2 = true
                    }else if(index === 2){
                        that.flag3 = true
                    }else if(index === 3){
                        that.flag4 = true
                    }

                })
            }
        }
    }



</script>


<style>
    *{
        margin: 0;
        padding: 0;
    }

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

    /*设置页面高度*/
    list1{
        height: 660px;
    }
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item:first-child{
        color: #FD4000;
    }
    /*设置图片大小*/
    .contentImg{
        height: 660px;
        overflow: auto;
        cursor: pointer;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-scroll{
        width: 100%;
        background-color: #444444;
        color: #fff;
    }

    /*设置图片里的简介居中及样式*/
    .box>ul>li{
        position: relative;
        list-style: none!important;
    }
    .box>ul>li>span{
        display: block;
        background-color: rgba(0,0,0,0.1);
        color: #fff;
        width: 300px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }

    .contentImg img{
        width: 480px;
        height: 200px;
    }

</style>