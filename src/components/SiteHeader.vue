<template lang="pug">
header.site-header
  .container-wide
    h1.logo
      a(href="/")
        span VSCJ
</template>

<script>
export default {
  name: 'site-header',
};
</script>

<style lang="stylus" scoped>
.site-header
  background #1A1F21

.site-header
  height 70px
  .container-wide
    height 70px
    display flex
    align-items center

.logo
  margin 0
  a
    color #fff
    font-size 1.5rem
    line-height 1
    text-decoration none
</style>
