<template>
  <div class="newsinfo">
      <vue-preview :slides='slidesList'></vue-preview>
    xxxxx
  </div>
</template>

<script>
export default {

  data () {
    return {
        slidesList: []
    }
  },

  methods: {},

  created () {
      console.log(this.$route.params)
  }
}
</script>

<style lang='scss'>
  .newsinfo{
      margin-top: 40px;
  }   
</style>
