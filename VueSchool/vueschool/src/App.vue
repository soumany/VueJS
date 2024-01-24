<script>
  import { ref } from 'vue';
  import { apiMixin } from './mixins/apiMixin.js';
  export default {
    mixins:[apiMixin],
  };
</script>

<template>
  <div v-if="!loading">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in apiData" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.title}}</td>
          <td><img :src="data.src" alt="Image"></td>
          <td>{{ data.description }}</td>
          <td>
            <button class="active" v-if="data.status == true">Active</button>
            <button class="inactive" v-else>Inactive</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-center h-screen" v-if="loading" role="status">
    <span class="sr-only">Loading...</span>
  </div>

</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;  
}

th, td {
  border: 1px solid #1a1818;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #7c3434;
}

button {
  padding: 5px 10px;
  border-radius: 3px;
}

button.active {
  background-color: green; /* Red for Active */
  color: white;
}

button.inactive {
  background-color: red; /* Blue for Inactive */
  color: white;
}

img {
  height: 100px;
}
</style>
