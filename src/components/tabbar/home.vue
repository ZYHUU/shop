<template>
    <div class="home">
      <mt-swipe class="mt-swipe">
        <mt-swipe-item v-for="item in swipeList" :key='item.id'>
            <img :src="item.img" alt="">
        </mt-swipe-item>
     </mt-swipe>
     <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newsList">
                <img src="../../assets/images/menu1.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu2.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu3.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu4.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu5.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../../assets/images/menu6.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">联系我们</div></a></li>
	</ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swipeList: []
        }
    },
    created () {
        this.axios.get('/api/getlunbo').then(res =>{
            if(res.status === 200) {
                this.swipeList = res.data.message
            }
        })
    }
}
</script>
<style lang='scss' scoped>
.mt-swipe {
    height: 41vw;
    img{
        width: 100%;
    }
}
.mui-table-view.mui-grid-9 {
    background: #FFF;
    .mui-table-view-cell {
        border: 0;
        img{
          width: 60px;  
        }
    }
}
</style>