<template>
  <div class="door">
    <zg-header></zg-header>
    <div class="door-body">
      <router-view></router-view>
    </div>
    <zg-footer></zg-footer>
  </div>
</template>
<script>
  import zgHeader from './components/zg-header'
  import zgFooter from './components/zg-footer'

  export default {
    components: {
      zgHeader,
      zgFooter
    }
  }
</script>
<style lang="stylus" scoped>
  .door {
    position: absolute;
    height: 100%;
    width: 100%;
    padding-top: 80px;
    top: 0;
    left 0;
  }

  .door-body {
    min-height: calc(100% - 80px);
  }
</style>
