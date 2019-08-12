<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home {{$t('test')}}</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <a @click="setLang">切换语言</a>
      <p> {{$t('onlineLang')}}</p>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tab: 1,
      }
    },
    methods: {
      setLang() {
        const lang = this.tab === 1 ? 'en' : 'zh'
        this.tab = this.tab === 1 ? 2 : 1
        this.$setI18n(lang)
      }
    }
  }
</script>
<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50

  #nav
    padding 30px

    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983
</style>
