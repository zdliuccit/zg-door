<template>
  <div class="business container">
    <div class="news-title"><i class="iconfont icon-yewu fl"></i>业务介绍</div>
    <ul class="business-ul">
      <li class="bu-li">
        <img class="bu-li-img fl" src="http://47.99.66.195/zg/01.jpg">
        <div class="bu-li-words fr">
          <h2>业务介绍1</h2>
          <p>
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
          </p>
        </div>
      </li>
      <li class="bu-li">
        <div class="bu-li-words fl">
          <h2>业务介绍2</h2>
          <p>
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
          </p>
        </div>
        <img class="bu-li-img fr" src="http://47.99.66.195/zg/03.jpg">
      </li>
      <li class="bu-li">
        <img class="bu-li-img fl" src="http://47.99.66.195/zg/02.jpg">
        <div class="bu-li-words fr">
          <h2>业务介绍3</h2>
          <p>
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
          </p>
        </div>
      </li>
      <li class="bu-li">
        <div class="bu-li-words fl">
          <h2>业务介绍4</h2>
          <p>
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
            安全稳定，全网互通 大数据分析，共建物联网生态安全稳定，全网互通 大数据分析，共建物联网生态全稳定，
          </p>
        </div>
        <img class="bu-li-img fr" src="http://47.99.66.195/zg/04.jpg">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    title: '业务介绍'
  }
</script>
<style lang="stylus" scoped>
  .business {
    overflow hidden;
    padding-top 20px;

    .bu-li {
      padding: 10px 0;
      margin-bottom 30px;

      .bu-li-words {
        h2 {
          font-size 24px;
          color #444;
          height 40px;
          line-height 1;
          margin-bottom 10px;
          border-bottom 1px solid #ccc;
        }

        p {
          font-size 16px;
          color #333;
          text-indent 32px;
          line-height: 25px;
        }
      }

      .bu-li-words {
        width: calc(100% - 640px);
        height 300px;
        overflow hidden;
      }

      .bu-li-img {
        width: 600px;
        height 300px;
      }
    }

    .bu-li:after {
      clear both;
      content: '';
      display block
    }
  }

</style>
