<template>
  <div class="container jobs">
    <div class="jobs-left">
      <div class="news-title"><i class="iconfont icon-recruit fl"></i>人才招聘</div>
      <ul class="jobs-ul">
        <li class="jobs-li">
          <h2>Web前端工程师</h2>
          <div class="text" v-html="jobHtml"></div>
        </li>
        <li class="jobs-li">
          <h2>产品总监</h2>
          <div class="text" v-html="jobHtml1"></div>
        </li>
      </ul>
    </div>
    <div class="jobs-bg"></div>
  </div>
</template>
<script>
  export default {
    title: '人才招聘',
    data() {
      return {
        jobHtml: '岗位描述：<br>1.设计核心产品的前端架构，并带领组员实现并持续优化； <br>2.优化前端开发方式及协作流程，创建技术标准及规范，并孜孜不倦的布道； <br>3.为前后端技术改进、网站性能优化、技术选型提供解决方案； <br>4.为组员的技术成长制定目标、计划并帮助实施，提升整体技术水平。<br>岗位要求：<br>1.续关注业界的新话题和新技术，研究过React，Vue等框架中的一种或以上； <br>2.视团队协作，愿意探寻和改进目前还不成熟的前端开发流程，了解各种常用工具； <br>3.热爱前端技术，个性乐观开朗，逻辑性强，善于和各种背景的人沟通合作； <br>4.如具备服务端开发能力，比如java或node.js优先考虑。\n',
        jobHtml1: '职位描述<br>1.作为阿里本地生活-本地生活-餐饮行业SAAS &amp; 会员营销产品专家，负责大型项目的规划、汇报、设计搭建、产品推广等完整链路。<br>2.能够把握餐饮行业产品及市场发展状况，了解业界竞品动向，洞察行业商家和用户诉求和痛点，引导建立有效的商业生态模式和产品体系；<br>3.主导项目设计研发并协同业务运营、行业数据研发团队，完成整体的产品&amp;项目的落地和阶段性目标；<br>职位要求<br>1. 5年以上产品经理经验，有SAAS平台POS、会员、营销经验者优先；<br>2. 业务要性强、作为团队负责人能灵活协调和完整负责大型项目；<br>3. 有商业化sense和商家营销经验者优先；<br>4. 具备产品创新意识，学习能力强，愿意接受挑战，有很强的抗压性；'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .jobs {
    padding-top 16px;
  }

  .jobs-ul {
    margin-bottom 20px;
    padding-left 35px;
  }

  .jobs-li {
    overflow hidden;
    margin-bottom: 15px;

    h2 {
      font-size 22px;
    }

    .text {
      word-break: break-all;
      word-wrap: break-word;
      color: #61687c;
      line-height: 36px;
    }
  }

  .news-title {
    height 50px;
    line-height 50px;
    font-size 18px;
    color #333;

    .icon-recruit {
      color red;
      margin-right: 2px;
    }
  }

  .jobs-bg {
    position: absolute;
    width: 300px;
    height 280px;
    right 120px;
    margin-right 150px;
    bottom 50px;
    background url("./../../assets/images/jobs-bg.png") no-repeat;
  }
</style>
