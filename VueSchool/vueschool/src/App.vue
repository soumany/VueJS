<script setup>
  import { ref } from 'vue'

  const header = ref('Shopping List App')
  const items = ref([
    {id:1, label:"10 party hats"},
    {id:2, label:"2 board games"},
    {id:3, label:"20 cups"},
    
  ])
</script>

<template>
  <h1>{{ header }}</h1>
  <ul>
    <li v-for="({id, label},index) in items" :key="id">{{index}} 
      {{label}}</li>
  </ul>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
