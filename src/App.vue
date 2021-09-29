<template>
  <div>
    <h1> {{ title }} </h1>

    <ul>
      <li v-for="image of images">
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

</style>
