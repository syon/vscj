<template>
  <section>
    <h1>Extensions</h1>
    <ul>
      <li>
        <router-link :to="{ path: '/extension/sample.hello-world'}">sample.hello-world</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/extension/alefragnani.project-manager'}">alefragnani.project-manager</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/extension/oderwat.indent-rainbow'}">oderwat.indent-rainbow</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/extension/wmaurer.vscode-jumpy'}">wmaurer.vscode-jumpy</router-link>
      </li>
    </ul>
  </section>
</template>
