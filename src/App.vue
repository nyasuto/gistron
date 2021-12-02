<template>
  <div class="container">
    <header class="header">
      <ui-top-app-bar>Header</ui-top-app-bar>
    </header>
    <aside class="aside">
      <GistList/>
    </aside>
    <main class="main">
      <GistMain/>
    </main>

  </div>
</template>

<script>
import GistList from "./components/GistList.vue";
import GistMain from "./components/GistMain.vue";

export default {
  name: "App",
  components: {
    GistList,
    GistMain,
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 180px 1fr 160px;
  grid-template-rows: 60px 1fr 90px;
}

.header {
  grid-column: 1 / 4;
  grid-row: 1;
}

.main {
  grid-column-start: 2;
  grid-column-end: auto;
  grid-row-start: 2;
  grid-row-end: auto;
}

.aside {
  grid-column-start: 1;
  grid-column-end: auto;
  grid-row-start: 2;
  grid-row-end: auto;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
