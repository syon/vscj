<template lang="pug">
#app
  #app-header
    site-header
  #app-body
    router-view
</template>

<script>
import SiteHeader from '@/components/SiteHeader';

export default {
  name: 'app',
  components: {
    SiteHeader,
  },
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  border 0

*, *:before, *:after
  box-sizing border-box

body
  min-width 960px
  font-feature-settings "palt"
  background-color #222a2d
  color #fff

.container-wide
  width 92%
  margin 0 auto
  max-width 1005px
  transition max-width .4s ease-out
  max-width 1440px
</style>
