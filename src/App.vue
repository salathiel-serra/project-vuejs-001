<template>
  <div>
    <h1> {{ title }} </h1>
    
    <img :src="image.url" v-bind:alt="image.title">
  </div>
</template>

<script>
export default {
  data() {
    return {

      title: 'Project One With Vue.js',
      image: {
        url: 'https://media.istockphoto.com/photos/illustration-of-generic-compact-car-perspective-view-picture-id1148853697?k=20&m=1148853697&s=612x612&w=0&h=x_IL5R5PF48fTZhuD-1gMHDqstoxyrUfRMH-Oet-7Mk=',
        title: 'Carro vermelho'
      }

    }
  }
  
}
</script>

<style>

</style>
