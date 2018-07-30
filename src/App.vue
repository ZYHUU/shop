<template>
  <div class='app-container'>
      <!-- header -->
    <header class="mui-bar mui-bar-nav header">

			<h1 class="mui-title">Vue商城</h1>
		</header>
      <!-- 中间zrouter-view -->
<h1 >111</h1>
      <!-- 底部table -->
      <nav class="mui-bar mui-bar-tab ">
        <a class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
		</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app-container{
  padding-top: 40px;
}
.app-container .header{
  background-color:skyblue;
}
.app-container .header h1 {
  color: #fff;
}
</style>
