<template>
  <footer class="footer">
    <div class="container h40">
      <div class="footer-menu fl">
        <a @click="$router.push('jobs')" class="fl" href="javascript:void(0);">人才招聘</a>
        <a @click="$router.push('system-link')" class="fl" href="javascript:void(0);">系统链接</a>
        <a @click="$router.push('contact-us')" class="fl" href="javascript:void(0);">联系我们</a>
        <img class="qr-code fl" src="./../../assets/images/1570068695.png">
      </div>
      <div class="fr company">Copyright 2019 HYJC官网 版权所有 苏ICP备******号-1</div>
    </div>
  </footer>
</template>
<style lang="stylus" scoped>
  .footer {
    width: 100%;
    background-color #373b41;
    padding: 10px 0;
    height 60px;
    box-sizing border-box;

    .company {
      color #c3c7cd;
      line-height 40px;
    }

    .footer-menu {
      .qr-code {
        margin-top 5px;
        width 30px;
        height 30px;
      }

      a {
        color: #c3c7cd;
        margin-right: 10px;
        padding-right 10px;
        margin-top 14px;
        line-height 12px;
        border-right 1px solid #c3c7cd;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    .h40 {
      height 40px;
    }
  }
</style>
