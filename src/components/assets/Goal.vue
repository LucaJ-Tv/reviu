<template>
    <div class="p-4 shadow-md rounded-lg bg-black bg-opacity-5 backdrop-blur-sm">
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox h-8 w-8" 
               :checked="goal.completed" :disabled="true">
        <span class="ml-3 text-gray-800">{{ goal.text }}</span>
      </label>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      goal: {
        type: Object as PropType<{ text: string; completed: boolean }>,
        required: true,
      },
    },
  });
  </script>  