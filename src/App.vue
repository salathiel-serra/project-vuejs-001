<template>
  <div class="page-content">
    <h1 class="page-title"> {{ title }} </h1>

    <input type="search" class="image-search" v-on:input="search = $event.target.value" placeholder="Buscar">
    {{ search }}
    <ul class="image-list">
      <li class="image-item" v-for="image of images">
        <my-panel :title="image.title">
          <img class="image" :src="image.url" :alt="image.title">
        </my-panel>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Panel from "./components/shared/panel/Panel.vue";

export default {
  components: {
    "my-panel": Panel
  },

  data() {
    return {
      title: "Project One With Vue.js",
      images: [],
      search: ""
    }
  },

  created() {
    this.$http.get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(images => this.images = images, err => console.log(err));
  }
  
}
</script>

<style>
  .page-content {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .page-title {
    text-align: center;
  }

  .image-list {
    list-style: none;
  }

  .image-item {
    display: inline-block;
  }

  .image {
    width: 100%;
  }

  .image-search {
    display: block;
    width: 100%;
    padding: 8px;
  }
</style>
