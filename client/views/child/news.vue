<template>
  <div class="news container">
    <div class="news-title"><i class="iconfont icon-news fl"></i>新闻动态</div>
    <ul class="news-ul">
      <li class="news-li" v-for="news in list" :key="news.id" @click="goToContent(news.id)">
        <a href="javascript:void(0);" class="news-word fl">{{news.title}}</a>
        <div class="news-date fr">{{news.date}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    title: '新闻动态',
    data() {
      return {
        list: [
          { id: 3212, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3412, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3512, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3612, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3112, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3222, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3262, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3292, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
          { id: 3268, title: '安全稳定，全网互通 大数据分析，共建物联网生态安全稳定', date: '2019-09-09' },
        ]
      }
    },
    methods: {
      goToContent(id) {
        if (id) this.$router.push({ path: 'news-cont', query: { id } })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .news {
    padding-top 20px;

    .news-li {
      height 18px;
      color #000;
      font-size 14px;
      padding 0 35px;
      padding-bottom 12px;

      a {
        color #333;
      }
    }

    .news-title {
      height 50px;
      line-height 50px;
      font-size 18px;
      margin-bottom 5px;
      color #333;

      .icon-news {
        color red;
        margin-right: 2px;
      }
    }
  }
</style>
