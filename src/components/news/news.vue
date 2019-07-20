<template>
    <div class="list">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item) in dataList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="../../images/boy.jpg">
                    <div class="mui-media-body"><h3>{{item.name}}</h3>
                        <p class="title">{{item.title}}</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.date | dateFormat('YYYY-MM-DD hh:mm:ss')}}</span>
                            <span>点击次数:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    import {Toast} from "mint-ui";

    export default {
        data: function () {
            return {
                dataList: []
            }
        },
        created() {
            this.getMes();
        },
        methods: {
            getMes() {
                this.$http.get('http://localhost:8080/src/components/newsData/newsData.json')
                    .then(result => {
                        //console.log(result.body.user);
                        if (result.body) {
                            this.dataList = result.body.user;
                        } else {
                            Toast("获取新闻列表失败！")
                        }
                    })
            }
        }
    }

</script>


<style>
    .list {
        overflow: auto;
        height: 660px;
    }

    .mui-table-view .mui-media-object {
        line-height: 62px;
        max-width: 62px;
        height: 62px;
    }

    .mui-media-body > h3 {
        font-size: 14px;
        color: #313131;
    }

    .mui-media-body > .title {
        font-size: 14px;
    }

    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>