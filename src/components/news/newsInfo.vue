<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{dataList.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ dataList.date | dateFormat }}</span>
            <span>点击：{{dataList.click}}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content">
            <img :src='imgUrl' alt="">
            <p>{{dataList.data}}</p>
        </div>


        <!--评论区-->
        <comment-box>

        </comment-box>
        </div>
</template>


<script>
    import review from '../reviews/comment.vue'

    export default {
        data: function () {
            return {
                dataList: [],
                /*获取留言列表的id*/
                id:this.$route.params.id,
                imgUrl:''
            }
        },
        created() {
            this.getMes();
        },
        methods: {
            getMes() {
                var url = 'http://localhost:8080/src/images/'+this.id%4+'.jpg';
                this.imgUrl = url;
                console.log(this.imgUrl);
                this.$http.get('http://localhost:8080/src/components/newsData/newsData.json')
                    .then(result => {
                        if (result.body) {
                            //新建临时数组，将获取到的数据传入数组
                            var temp = [];
                            temp = result.body.user;
                            
                            //取到网页id值
                            var id = this.id;
                            
                            //找到与对象id相等的那条
                            var data = temp.find(function (item) {
                                return item.id === id
                            });
                            //将对象添加到临时数组
                            this.dataList.push(data);
                            //将对象中得元素重新赋值
                            this.dataList = this.dataList[0];

                        } else {
                            Toast("获取新闻列表失败！")
                        }
                    })
            }
        },
        components:{
            "comment-box":review
        }
    }

</script>


<style>
    .newsinfo-container {
        padding: 0 4px;
        overflow: auto;
        height: 650px;
    }
    .newsinfo-container .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content img {
        width: 100%;
    }
    .content>p{
        font-size: 16px;
    }
</style>