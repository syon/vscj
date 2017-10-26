<template lang="pug">
.container-wide
  h2 Extensions.vue
  ul
    li
      router-link(to="/extensions/item/alefragnani.project-manager") alefragnani.project-manager
    li
      router-link(to="/extensions/item/wmaurer.vscode-jumpy") wmaurer.vscode-jumpy
    li
      router-link(to="/extensions/item/oderwat.indent-rainbow") oderwat.indent-rainbow
</template>

<script>
export default {
  name: 'extensions',
};
</script>

<style scoped>
</style>
