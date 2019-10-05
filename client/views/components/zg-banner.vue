<template>
  <div class="zg-banner" @mouseenter.stop="handleMouseEnter"
       @mouseleave.stop="initBanner">
    <i class="iconfont icon-left" @click="setBanner(-1)"></i>
    <i class="iconfont icon-right" @click="setBanner(1)"></i>
    <div class="banner-warp">
      <ul class="banner-ul">
        <li class="banner-li" :class="{'active':tabIndex===index}" v-for="(url,index) in items"
            :index="index" ref="bannerLi" :style="`background: url(${url}) 50% 50%`"></li>
      </ul>
    </div>
    <div class="banner-dots">
      <div class="ids" :class="{'active':tabIndex===index}" v-for="(ii,index) in items" :key="index"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    props: {
      items: {
        type: Array,
        default: () => [
          'http://47.99.66.195/zg/01.jpg',
          'http://47.99.66.195/zg/02.jpg',
          'http://47.99.66.195/zg/03.jpg',
          'http://47.99.66.195/zg/04.jpg',
        ],
      },
    },
    data() {
      return {
        tabIndex: 0,
        status: false, // 动画状态
        timeFunc: null
      }
    },
    mounted() {
      if (process.env.VUE_ENV !== 'server') this.initBanner()
    },
    destroyed() {
      clearTimeout(this.timeFunc)
      this.timeFunc = null
    },
    methods: {
      handleMouseEnter() {
        clearTimeout(this.timeFunc)
        this.timeFunc = null
      },
      initBanner() {
        this.timeFunc = setTimeout(() => {
          this.setBanner(1)
          this.initBanner()
        }, 3000)
      },
      /**
       * 执行动画
       * @param num
       */
      setBanner(num) {
        if (this.status) return
        this.status = true
        if (this.timeFunc) {
          clearTimeout(this.timeFunc)
          this.timeFunc = null
        }
        const index = this.tabIndex
        const pages = this.$refs.bannerLi
        let nextIndex = index + num
        if (nextIndex > pages.length - 1) nextIndex = 0
        if (nextIndex < 0) nextIndex = pages.length - 1
        const currentPage = pages[index]
        const nextPage = pages[nextIndex]
        currentPage.style.webkitTransition = '-webkit-transform 300ms ease-in-out'
        nextPage.style.display = 'block'
        nextPage.style.webkitTransform = `translate3d(${num > 0 ? 100 : -100}%,0,0)`
        nextPage.style.webkitTransition = '-webkit-transform 300ms ease-in-out'
        setTimeout(() => {
          nextPage.style.webkitTransform = 'translate3d(0,0,0)'
          currentPage.style.webkitTransform = `translate3d(${num > 0 ? -100 : 100}%,0,0)`
          setTimeout(() => {
            nextPage.style.display = ''
            nextPage.style.webkitTransition = ''
            currentPage.style.display = ''
            currentPage.style.webkitTransition = ''
            this.tabIndex = nextIndex
            this.status = false
          }, 301)
        }, 66)
      }
    },
  }
</script>
<style lang="stylus" scoped>
  .banner-li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    background: url('./../images/01.jpg')
  }

  .banner-li.active {
    display: block;
  }

  .banner-dots {
    z-index: 666;
    position: absolute;
    height: 10px;
    left: 50%;
    bottom: 15px;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0)
  }

  .ids {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, .5);
    border: 1px solid #fff;
    margin: 0 6px
  }

  .ids.active {
    background: #fff
  }

  .iconfont {
    position absolute;
    z-index 9999;
    font-size 46px;
    color #fff;
    transition: color .3s;
    cursor pointer;
    margin-top -23px;
    width 46px;
    height 46px;
    top: 50%;
    line-height 1;
  }

  .icon-left {
    left: 13.072%;
  }

  .icon-right {
    right: 13.072%;
  }

  .iconfont:hover {
    color #666;
  }

  .zg-banner, .banner-warp, .banner-ul {
    height: 600px;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .zg-banner {
      height: 360px;
    }
  }

  @media (min-width: 992px) {
    .zg-banner {
      height: 380px;
    }
  }

  @media (min-width: 1200px) {
    .zg-banner {
      height: 600px;
    }
  }
</style>
