<template>
  <div class='cmt-container'>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder='请输入内容(最多输入120字)'></textarea>
    <mt-button type="primary" size='large'>发表评论</mt-button>
   
    <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第一楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间：2018:08:08
            </div>
            <div class="cmt-body">
                锄禾日当午，福芳草珊瑚
            </div>
        </div>
    </div>
     <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第一楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间：2018:08:08
            </div>
            <div class="cmt-body">
                锄禾日当午，福芳草珊瑚
            </div>
        </div>
    </div>
     <mt-button type='danger' size='large' plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {

  data () {
    return { 
    }
  },

  methods: {},

  created () {
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
