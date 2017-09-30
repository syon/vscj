<template lang="pug">
#app
  #app-body
    router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus">
body
  min-width 960px
  font-feature-settings "palt"
</style>
