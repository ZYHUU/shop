<template>
  <div id="app">
    <mt-header fixed title="商城.vue项目"></mt-header> 
    <!-- appear默认动画执行一次 mode规定动画顺序 -->
    <transition name="tabanim" appear>
      <router-view/>
    </transition>
    
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-email"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="shoppingCar">
          <span class="mui-icon fa fa-shopping-cart"><span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
		</nav>    
  </div>
</template>

<script>



export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 40px;
  overflow-x: hidden;
}
.tabanim-enter {
  opacity: 0;
  transform:  translateX(100%)
}
.tabanim-enter-active,.tabanim-leave-active{
  transition: all .5s ease;
}
.tabanim-enter-to,.tabanim-laeve {
  transform:  translateX(0)  
}
.tabanim-leave-to {
  opacity: 0;
  transform:  translateX(-100%);
  position: absolute;
}
</style>
