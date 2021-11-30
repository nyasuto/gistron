<template>
  <div class="container">
    <header class="header">
      header <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    </header>
    <aside class="aside">
      <EditorMain msg="hoge"/>
    </aside>
  </div>
</template>

<script>
import EditorMain from './components/EditorMain.vue'

export default {
  name: 'App',
  components: {
    EditorMain
  }
}
</script>

<style>
.container {
  display: grid;

  grid-template-columns: 180px 1fr 160px;

  grid-template-rows: 60px 1fr 90px;
}

.header {
  /* 列の1本目から4本目のグリッドラインまで */
  grid-column: 1 / 4;
  /* 行の1本目から2本目のグリッドラインまで */
  grid-row: 1;
}

.main {
  /* 列の2本目から3本目のグリッドラインまで */
  grid-column-start: 2;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 2;
  grid-row-end: auto;
}

.aside {
  /* 列の1本目から2本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 2;
  grid-row-end: auto;
}

.nav {
  /* 列の3本目から4本目のグリッドラインまで */
  grid-column-start: 3;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 2;
  grid-row-end: auto;
}

.footer {
  /* 列の1本目から4本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: 4;
  /* 行の3本目から4本目のグリッドラインまで */
  grid-row-start: 3;
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
