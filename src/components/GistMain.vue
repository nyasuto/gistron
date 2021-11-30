<template>
  <div class="editor">
    <li v-for="file in data.gist.files" :key="file">
      {{ file.content }}
    </li>
  </div>
</template>

<script>
import { Octokit } from "@octokit/core";

export default {
  name: "GistMain",
  data: function () {
    return {
      data: {
        gist:{
          files: null
          },
      },
    };
  },

  beforeMount: function () {
    const octokit = new Octokit({
      auth: process.env.VUE_APP_GITHUB_TOKEN,
    });

    octokit
      .request("/gists/{gist_id}", {
        gist_id: "d006bacd9eae05e0bdf2fdcd7e62d74d",
      })
      .then((data) => {
        console.log(data);
        this.data.gist = data.data;
      })
      .catch((err) => {
        console.log(err);
        this.data.error = err;
      });
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
