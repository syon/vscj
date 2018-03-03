<template>
  <section>
    <h1>Extensions</h1>
    <ul>
      <li>
        <router-link :to="{ path: '/extensions/sample.hello-world'}">sample.hello-world</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/extensions/alefragnani.project-manager'}">alefragnani.project-manager</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/extensions/oderwat.indent-rainbow'}">oderwat.indent-rainbow</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/extensions/wmaurer.vscode-jumpy', query: { plan: 'private' }}">wmaurer.vscode-jumpy</router-link>
      </li>
    </ul>
  </section>
</template>
