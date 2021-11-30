<template>
  <div class="editor">
    <ul id="gist-list">
      <li v-for="gist in data.gists" :key="gist.url">
        {{ gist.description }} <!-- - {{ gist.url }} -->
      </li>
    </ul>

  </div>
</template>

<script>
import {Octokit} from "@octokit/core";

export default {
  name: "EditorMain",
  data: function () {
    return {
      data: {
        gists: null,
      },
    };
  },

  mounted: function () {
    const octokit = new Octokit({
      auth: process.env.VUE_APP_GITHUB_TOKEN,
    });
    octokit.request("/gists")
        .then(
            (data) => {
              // console.log(data)
              this.data.gists = data.data
            }
        );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
