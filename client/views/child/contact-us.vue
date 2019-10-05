<template>
  <div class="cu-body">
    <div class="concat-us-bg"></div>
    <div class="container concat-us">
      <img class="cus-img fl" src="./../../assets/images/concat-us.png">
      <div class="c-info">
        <h1>HYJC***有限公司</h1>
        <div class="cii">
          <i class="iconfont icon-phone fl"></i>
          <strong>电话：</strong>
          <span>+86 10 8586**22/858**543</span>
        </div>
        <div class="cii">
          <i class="iconfont icon-mail fl"></i>
          <strong>邮箱：</strong>
          <span>+in***fo@hyscm.com</span>
        </div>
        <div class="cii">
          <i class="iconfont icon-location fl"></i>
          <strong>地址：</strong>
          <span>北京市朝阳区东四环中路41号 嘉泰国际大厦B座****室</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    title: '联系我们'
  }
</script>
<style lang="stylus" scoped>
  .concat-us-bg {
    height 360px;
    background url("./../../assets/images/concat-us-bg.jpg") no-repeat
    background-size cover;
  }

  .concat-us {
    padding: 50px 100px;
  }

  .cus-img {
    width 200px;
    height 94px;
    margin-top 35px;
  }

  .c-info {
    margin-left 300px;

    h1 {
      font-size 36px;
      padding-bottom 20px;
    }

    .iconfont {
      margin-right 6px;
    }

    .cii {
      height 34px;
      line-height 22px;
      color #666;
      font-size 14px;
      padding-bottom 10px;
    }
  }
</style>
