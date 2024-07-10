<template>
    <div class="w-8 h-full bg-gray-200 rounded-full overflow-hidden">
      <div class="bg-site-tertiary w-full h-full" :style="{ height: progress + '%' }"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'ProgressBar',
    props: {
      progress: {
        type: Number as PropType<number>,
        required: true,
      },
    },
  });
  </script>
  
  