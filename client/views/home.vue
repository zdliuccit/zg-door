<template>
  <div class="home">
    <zg-banner></zg-banner>
    <div class="home-body">
      <div class="news container">
        <div class="news-title"><i class="iconfont icon-news fl"></i>新闻动态</div>
        <ul class="news-ul">
          <li class="news-li">
            <a href="javascript:void(0);" class="news-word fl">安全稳定，全网互通 大数据分析，共建物联网生态安全稳定</a>
            <div class="news-date fr">2019-09-09</div>
          </li>
          <li class="news-li">
            <a href="javascript:void(0);" class="news-word fl">安全稳定，全网互通 大数据分析，共建物联网生态安全稳定</a>
            <div class="news-date fr">2019-09-09</div>
          </li>
          <li class="news-li">
            <a href="javascript:void(0);" class="news-word fl">安全稳定，全网互通 大数据分析，共建物联网生态安全稳定</a>
            <div class="news-date fr">2019-09-09</div>
          </li>
        </ul>
        <div class="more-warp"><i class="iconfont icon-more fr"></i></div>
      </div>
      <zg-title title="业务介绍"></zg-title>
      <div class="business container">
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
        </ul>
        <div class="more-warp"><i class="iconfont icon-more fr"></i></div>
      </div>
      <zg-title title="信息咨询"></zg-title>
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
        </ul>
        <div class="more-warp"><i class="iconfont icon-more fr"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
  import zgBanner from './components/zg-banner'
  import zgTitle from './components/zg-title'

  export default {
    title: 'HYJC官网',
    components: {
      zgBanner,
      zgTitle
    },
    data() {
      return {
        aa: [
          'http://47.99.66.195/zg/01.jpg',
          'http://47.99.66.195/zg/02.jpg',
          'http://47.99.66.195/zg/03.jpg',
          'http://47.99.66.195/zg/04.jpg',
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .news {
    padding-top 10px;

    .news-li {
      height 18px;
      color #000;
      font-size 14px;
      margin-bottom 10px;

      a {
        color #333;
      }
    }

    .news-title {
      height 40px;
      line-height 40px;
      font-size 18px;
      color #333;

      .icon-news {
        color red;
        margin-right: 2px;
      }
    }
  }

  .business {
    overflow hidden;

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

  .info-consult {
    overflow hidden;
    padding-bottom 30px;
  }

  .ic-ul {
    margin-left: -20px;
    margin-right -20px;

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
</style>
