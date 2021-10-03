<template>
  <div class="page-content">
    <my-menu :routes="routes"></my-menu>

    <router-view></router-view>
  </div>
</template>

<script>
  import { routes } from './routes';
  import Menu from './components/menu/Menu.vue';

  export default {
    components: {
      "my-menu": Menu
    },

    data() {
      return {
        routes
      }
    }
  }
</script>

<style>
  .page-content {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
</style>
