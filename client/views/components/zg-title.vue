<template>
  <div class="zg-title">
    <div class="title-line left-line">
      <div class="dot">
        <div class="dot-child"></div>
      </div>
    </div>
    <div class="title-txt">{{title}}</div>
    <div class="title-line right-line">
      <div class="dot">
        <div class="dot-child"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style lang="stylus" scoped>
  .zg-title {
    height: 100px;
    position relative;
    overflow hidden;

    .title-txt {
      height 100px;
      position: absolute;
      width 200px;
      left 50%;
      line-height 100px;
      margin-left -100px;
      font-size: 24px;
      text-align center;
      color #333;
    }

    .title-line {
      position: absolute;
      height 1px;
      width 50%;
      background-color: #fd8129;
      top: 49.5px;

      .dot {
        width 22px;
        height 22px;
        position absolute;
        background-color: rgba(253, 129, 41, 0.51);
        border-radius 50%;
        top: -11px;
        border: 6px solid transparent;

        .dot-child {
          width 10px;
          height: 10px;
          border-radius 50%;
          background-color: #fd8129;
        }
      }
    }

    .title-line.left-line {
      left 0;
      margin-left -100px;

      .dot {
        right -6px;
      }
    }

    .title-line.right-line {
      right 0;
      margin-right -100px;

      .dot {
        left: -6px;
      }
    }
  }
</style>
