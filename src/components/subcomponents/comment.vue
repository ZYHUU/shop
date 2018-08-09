<template>
  <div class='cmt-container'>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder='请输入内容(最多输入120字)'></textarea>
    <mt-button type="primary" size='large'>发表评论</mt-button>
   
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
            <div class="cmt-title">
                第{{i + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | fmTime}}
            </div>
            <div class="cmt-body">
                {{item.content === 'undefined' ? '此用户很懒，什么都没留下' : item.content}}
            </div>
        </div>
    </div>
     <mt-button type='danger' size='large' plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return { 
        pageIndex: 1, // 默认值那是第一页数据
        comments: [] // 所有评论数据
    }
  },
  methods: {
      getComments () {
          this.axios.get("api/getcomments/"+ this.id+"?pageindex=" + this.pageIndex)
          .then(res => {
              if (res.data.status === 0) {
                  // 评论数据应该拼接
                  this.comments = this.comments.concat(res.data.message)
              } else {
                  Toast('获取评论失败')
              }
          })
      },
      getMore () {
          this.pageIndex++
          this.getComments()
      }
  },
  props: ["id"],  
  created () {
    this.getComments()
  }
}
</script>

<style lang='scss'>
.cmt-container {
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            line-height: 35px;
            .cmt-title{
                line-height: 35px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
