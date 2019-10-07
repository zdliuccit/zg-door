<template>
  <div class="info-consult container">
    <div class="news-title"><i class="iconfont icon-link fl"></i>系统链接</div>
    <ul class="ic-ul">
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/01.jpg">
          <div class="info-link">***系统i23123</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/02.jpg">
          <div class="info-link">***系统0123123</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/04.jpg">
          <div class="info-link">***系统i23123</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/03.jpg">
          <div class="info-link">***系统0123123</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    title: '系统链接'
  }
</script>
<style lang="stylus" scoped>
  .info-consult {
    overflow hidden;
    padding-top 20px;
    padding-bottom 30px;

    .ic-ul {
      margin-left: -20px;
      margin-right -20px;
      word-break break-all;

      .info-link {
        font-size 14px;
        color #333;
        padding: 10px;
        white-space nowrap;
        text-overflow ellipsis;
        height 74px;
        line-height 54px;
        overflow hidden;
      }

      li {
        float left;
        width 25%;
        padding: 20px;
        overflow hidden;
        box-sizing border-box;
        height 210px;

        .info-warp {
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
          transition: box-shadow .3s;

          .info-img {
            width 100%;
          }
        }

        .info-warp:hover {
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }
      }
    }

    .ic-ul:after {
      clear both;
      content: '';
      display block
    }
  }
</style>
