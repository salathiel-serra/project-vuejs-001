<template>
  <div>
    <h1 class="page-title"> {{ title }} </h1>

    <input type="search" class="image-search" @input="search = $event.target.value" placeholder="Buscar">
    
    <ul class="image-list">
      <li class="image-item" v-for="image of filterImages">
        <my-panel :title="image.titulo">
          <image-responsive :url="image.url" :title="image.titulo"/>
          <my-button 
            type="button" 
            name="Remover" 
            @confirmedAction="removeImage(image)" 
            :confirmationRequired="false" 
            buttonClass="warning" />
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../shared/panel/Panel.vue";
import ImageResponsive from "../shared/image-responsive/ImageResponsive.vue";
import Button from "../shared/button/Button.vue";

export default {
  components: {
    "my-panel": Panel,
    "image-responsive": ImageResponsive,
    "my-button": Button
  },

  data() {
    return {
      title: "Project One With Vue.js",
      images: [],
      search: ""
    }
  },

  computed: {
    filterImages() { 
      if (this.search) {
        
        // Criando uma expressão com o valor do filtro (insensitivo)
        let exp = new RegExp(this.search.trim(), 'i');
        // Retorna apenas as fotos que possuem com a expressão digitada
        return this.images.filter(image => exp.test(image.titulo));
      
      } else {
        return this.images;
      }
    }
  },

  methods: {
    removeImage(image) {
      alert("Deletado com sucesso!");
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
  

  .page-title {
    text-align: center;
  }

  .image-list {
    list-style: none;
  }

  .image-item {
    display: inline-block;
  }

  .image-search {
    display: block;
    width: 100%;
    padding: 8px;
  }
</style>
