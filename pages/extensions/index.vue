<template>
  <section>
    <h1>Extensions</h1>
    <ul>
      <li v-for="item in items" :key="item">
        <router-link :to="{ path: `/extensions/${item}`}">{{ item }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        'sample.hello-world',
        'alefragnani.project-manager',
        'oderwat.indent-rainbow',
        'wmaurer.vscode-jumpy'
      ];
    }
  }
};
</script>
