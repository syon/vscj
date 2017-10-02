<template lang="pug">
.container-wide
  h2 Index.vue
  ul
    li
      router-link(to="/extensions/") extensions
    li
      router-link(to="/extensions/") extensions
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
</style>
