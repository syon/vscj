<template lang="pug">
.container-wide
  h2 {{ $route.params.id }}
  async-article
</template>

<script>
export default {
  components: {
    'async-article': () => {
      // console.log($route);
      // => ReferenceError: $route is not defined
      const filename = window.location.href.match(/[^/]+$/)[0];
      return import(`../articles/${filename}.md`);
    },
  },
};
</script>

<style scoped>
</style>
