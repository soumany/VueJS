<script>
  import { ref } from 'vue';
  import '../assets/main.css'
  import { apiMixin } from '../mixins/apiMixin.js';
  export default {
    mixins:[apiMixin],
  };
</script>
<template>
  <template v-for = "(data,i) in apiData" :key="i">
    <div v-if="data.title === 'event'" class="video-group">
          <div v-for="(video, j) in data.videos" :key="j" class="video-container">
            <iframe :src="video"></iframe>
          </div>
     </div>
  </template>
</template>

<style>
  .video-group {
  margin-bottom: 50px; /* Add margin between video groups */
  }

  .video-container {
    display: inline-block;
    margin-right: 50px;
    margin-top: 50px; /* Add margin between videos */
  }

  iframe {
    width: 250px; /* Set the width of each video */
    height: 200px; /* Set the height of each video */
  }
</style>
