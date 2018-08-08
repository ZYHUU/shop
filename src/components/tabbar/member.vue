<template>
    <div class="home">
     
     <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu1.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">Home</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu2.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">Email</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu3.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">Chat</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu4.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../assets/images/menu5.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../../assets/images/menu6.png" class="mui-icon mui-icon-home">
                <div class="mui-media-body">Phone</div></a></li>
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
        this.axios.get('http://www.liulongbin.top:3005/api/getlunbo').then(res =>{
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