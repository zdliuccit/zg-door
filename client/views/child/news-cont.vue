<template>
  <div class="container news">
    <div class="news-title"><i class="iconfont icon-news fl"></i>新闻动态-详情</div>
    <div class="news-bg-title">安全稳定，全网互通 大数据分析，共建物联网生态安全稳定</div>
    <div class="news-bg-date">2019-09-09</div>
    <div class="news-body" v-html="newsContent"></div>
  </div>
</template>
<script>
  export default {
    title: '新闻动态-详情',
    data() {
      return {
        newsContent: '<p>　　新华社北京10月7日电&nbsp; 在中国传统节日重阳节来临之际，国家主席习近平10月6日给澳门街坊总会颐骏中心长者义工组的30位老人回信，向他们表示亲切问候和勉励，并祝全国的老人们健康长寿、生活幸福。</p>\n' +
          '<p>　　习近平在回信中表示，看到你们的来信，我想起了十年前在澳门同大家见面的情景。得知你们退休后热心公益事业、生活充实快乐，我很高兴。</p>\n' +
          '<p>　　习近平表示，作为新中国的同代人，你们见证了国家几十年的沧桑巨变，亲历了“一国两制”在澳门的成功实践。你们说为自己是中国人感到由衷的骄傲，我相信这也是广大澳门同胞的心声。希望你们坚持老有所为、继续发光发热，多向澳门青年讲一讲回归前后的故事，鼓励他们把爱国爱澳精神传承好，积极参与粤港澳大湾区建设，携手把澳门建设得更加美丽。</p>\n' +
          '<p>　　澳门街坊总会颐骏中心成立于2007年，是一家专业的老年人服务机构。2009年1月，时任国家副主席习近平视察澳门期间，曾到中心亲切看望。近日，颐骏中心长者义工组的30位老人给习近平写信，讲述了澳门回归后的发展变化，表达了深为自己是中国人而骄傲的心情、传承好爱国爱澳精神的决心。</p>\n' +
          '<p><strong><font color="navy">新闻链接</font></strong></p>\n' +
          '<p><span><a href="http://www.xinhuanet.com/politics/leaders/2019-10/07/c_1125075566.htm" target="_blank"><strong><font color="navy">习近平给澳门街坊总会颐骏中心长者义工组老人的回信（全文）</font></strong></a></span></p>\n'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .news {
    padding-top 20px;
  }

  .news-bg-title {
    text-align center;
    font-size 24px;
    padding-bottom 10px;
  }

  .news-bg-date {
    text-align center;
    font-size 16px;
    color #666;
  }

  .news-body {
    padding 30px 60px;
    font-size 14px;
    color #333;
    overflow-x: hidden;

    div, img, ul, ol, p {
      max-width: 100% !important;
    }
  }
</style>
