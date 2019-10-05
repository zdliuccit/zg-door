<template>
  <div class="info-consult container">
    <ul class="ic-ul">
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/01.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/02.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/03.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/04.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/03.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/04.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/01.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/02.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/04.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/03.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>
      <li class="ic-ul-li">
        <div class="info-warp">
          <img class="info-img" src="http://47.99.66.195/zg/04.jpg">
          <div class="info-words">安全稳定，全网互通 大数据分析，共建物联网生态</div>
        </div>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    title: '信息咨询'
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

      .info-words {
        font-size 12px;
        color #333;
        word-break break-all;
        padding: 10px;
        height 74px;
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
