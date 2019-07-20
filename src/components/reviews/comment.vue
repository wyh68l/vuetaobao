<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="message" @keyup.enter="addComments"></textarea>

    <mt-button type="primary" size="large" @click="addComments">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item"  v-for="(item,index) in comments">
        <div class="cmt-title">
          <span>第{{ index+1 }}楼</span><span>用户：{{ item.name }}</span>
          <span>发表时间：{{ item.date | dateFormat }}</span>
        </div>
        <div class="cmt-body">
          {{ item === 'undefined' ? '此用户很懒，嘛都没说': item.mes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import $  from 'jquery';
import fs from 'fs'



export default {
  data() {
    return {
      message:'',
      name:'匿名用户',
      id:this.$route.params.id,
      date:new Date(),
      comments: [] // 所有的评论数据
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      //获取评论
      if(sessionStorage.getItem('data')) {
        var data = JSON.parse(sessionStorage.getItem('data'));
        this.comments = data;
      }else{
        this.$http
                .get("http://localhost:8080/src/components/reviews/review.json")
                .then(result => {
                  if (result.body) {

                    this.comments = result.body.reviews;
                    var id = this.id;

                    var getid = this.comments.find(function (item) {
                      return item.id === id
                    });

                    this.comments = getid.data;

                  } else {
                    Toast("获取评论失败！");
                  }
                });
      }
    },
    addComments(){
      if(this.message.trim()!==''){
        var temp = {};
        temp.name = this.name;
        temp.date = this.date;
        temp.mes = this.message;
        this.comments.push(temp);
        var data = JSON.stringify(this.comments);
        //console.log(data);
        sessionStorage.setItem("data", data);
        this.message = '';

        /*
        * 只能实现暂时读取，
        * 如要实现永久功能，可以使用php*/

      }


    }
  }
};
</script>

<style>
.cmt-container {

}
h3 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}

.cmt-list {
  margin: 5px 0;

}
.cmt-item {
  font-size: 13px;
}
.cmt-title {
  line-height: 30px;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
}
.cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>
