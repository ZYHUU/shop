<template>
  <div class="newsinfo-container">
      
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间: {{newsinfo.add_time}}</span>
      <span>点击: {{newsinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
  </div>
</template>

<script>
export default {

  data () {
    return {
        id: this.$route.params.id, // URL中id
        newsinfo: {}
    }
  },

  methods: {
    // 获取新闻详情
    getNewsInfo () { 
      this.axios.get('api/getnew/' + this.id).then(res => {
        if (res.data.status === 0) {
          this.newsinfo = res.data.message[0]
        } else {

        }
      })
    }
  },

  created () {
    this.getNewsInfo()
  }
}
</script>

<style lang='scss'> // ??? 去掉scoped才可以给图篇设置大小
 .newsinfo-container{
   padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}   
</style>
