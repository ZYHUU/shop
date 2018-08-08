<template>
  <div class='newsList'>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key='item.id'>
            <router-link :to="'/home/newsinfo/'+ item.id" >
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    {{item.title}}
                    <p class="mui-ellipsis">
                        <span>发表时间{{item.add_time | fmTime('YYYY-MM-DD hh:mm:ss')}}</span>
                        <span>{{item.click}}</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        newsList: []
    }
  },

  methods: {
      initList() {
          this.axios.get('/api/getnewslist').then(res => {
              this.newsList = res.data.message
          })
      }
  },

  created () {
      this.initList()
  }
}
</script>

<style lang='scss'>
    .mui-media-body{
        font-weight: 700;
        color: #000;
        font-size: 14px;
    }
    .mui-ellipsis {
        font-size: 14px;
        font-weight: 200;
        color: #26a2ff;
        display: flex;
        justify-content: space-between
    }
</style>
