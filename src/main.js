import Vue from 'vue'
import App from './App.vue'
// importando os módulos
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
// importando arquivo com rotas definidas para aplicação
import {routes} from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

// Criando instancia de VueRouter para rotear as rotas mapeadas
const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  // Adicionando rotas à vue instance para que sejam acessadas por toda aplicação
  router: router,
  render: h => h(App)
})
