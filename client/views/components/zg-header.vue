<template>
  <header class="header">
    <div class="container h80">
      <div class="logo fl" @click="$router.push('/')">HYJC官网</div>
      <ul class="menu fr h72">
        <li @click="goToUrl(mm.url)" class="menu-li fl" :class="menuClass(mm.url)"
            v-for="(mm,index) in list" :key="index"><a>{{mm.name}}</a>
        </li>
        <li class="fl icon-li">
          <i @click="showDialog(1)" class="iconfont icon-weixin" style="color: #00bb0a;"></i>
          <div class="dg-warp" v-show="wxStatus">
            <span class="triangle"></span>
            <img class="qr-code" src="./../../assets/images/1570068695.png">
          </div>
        </li>
        <li class="fl icon-li">
          <span @click="showDialog(2)">{{i18nNumber===1?'中文':'EN'}}</span>
          <i @click="showDialog(2)" class="iconfont icon-down fr i-14"></i>
          <div class="dg-warp" v-show="i18nStatus">
            <span class="triangle"></span>
            <div class="i18n-txt" :class="{'active':i18nNumber===1}" @click="setI18n(1)">中文</div>
            <div class="i18n-txt " :class="{'active':i18nNumber===2}" @click="setI18n(2)">EN</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="dialog-warp" @click="closeDialog" v-show="status"></div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          { url: 'about-us', name: '公司简介' },
          { url: 'news', name: '新闻动态' },
          { url: 'info-consult', name: '信息咨询' },
          { url: 'business-intro', name: '业务介绍' },
          { url: 'system-link', name: '系统链接' },
          { url: 'jobs', name: '人才招聘' },
          { url: 'contact-us', name: '联系我们' },
        ],
        status: false,
        wxStatus: false,
        i18nStatus: false,
        i18nNumber: 1,
      }
    },
    methods: {
      menuClass(val) {
        return this.$route.path.indexOf(val) > -1 ? 'active' : ''
      },
      goToUrl(url) {
        if (url) this.$router.push(url)
      },
      closeDialog() {
        this.status = false
        this.wxStatus = false
        this.i18nStatus = false
      },
      showDialog(type) {
        this.status = true
        this.wxStatus = type === 1
        this.i18nStatus = type === 2
      },
      setI18n(type) {
        this.i18nNumber = type
        this.closeDialog()
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .i18n-txt {
    line-height 35px;
    text-align center
    font-size 14px;
    color #555;
    user-select none;
  }

  .i18n-txt.active {
    color #2595ff;
  }

  .dg-warp {
    position: absolute;
    top: 63px;
    left: 50%;
    margin-left: -45px;
    width: 90px;
    height 90px;
    padding: 5px;
    z-index: 10001;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    border-radius 2px;
    background-color #fff;
  }

  .triangle {
    width: 0;
    height: 0;
    position: absolute;
    top: -16px;
    left 50%;
    margin-left -8px;
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgba(0, 0, 0, 0.2);
    border-left: 8px solid transparent;
    background-color: #fff;
  }

  .triangle:after {
    width: 0;
    height: 0;
    position: absolute;
    top: -7px;
    left 50%;
    margin-left -8px;
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    border-left: 8px solid transparent;
    content: ''
  }

  .qr-code {
    width 80px;
    height 80px;
  }

  .dialog-warp {
    position: fixed;
    left 0;
    right 0;
    top: 0;
    bottom 0;
    z-index: 10000;
  }

  .header {
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);

    .menu {
      .icon-li {
        vertical-align: middle;
        margin-left: 14px;
        position relative;

        span {
          font-size 12px;
          margin-right 2px;
          color #555;
        }

        i {
          color #555;
        }

        .i-14 {
          font-size 12px;
          margin-top 1px;
        }
      }

      li {
        line-height: 80px;
        height: 80px;
        cursor: pointer;
        user-select none;
      }

      .menu-li {
        width: 90px;
        text-align: center;
      }

      .menu-li.active {
        a {
          color #2595ff;
        }
      }

      .menu-li:hover {
        background-color #2595ff;

        a {
          color #fff;
        }
      }

      a {
        color #555;
        font-size 14px;
        text-decoration: none;
      }

    }

    .logo {
      font-size: 34px;
      line-height: 80px;
      color: #29333a;
      cursor pointer;
    }

    .h80 {
      height 80px;
    }
  }
</style>
