<template>
    <nav>
      <ul>       
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
    export default { 
        // A props pode ser definida apenas recebendo um array ["routes"] ou com validação da forma abaixo
        props: {
            routes: {
                type: Array,
                required: true
            }
        }
    }
</script>