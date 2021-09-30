<template>
  <div class="page-content">
    <h1 class="page-title"> {{ title }} </h1>

    <ul class="image-list">
      <li class="image-item" v-for="image of images">
        <img :src="image.url" :alt="image.title">
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

      title: "Project One With Vue.js",
      images: []
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
</style>
