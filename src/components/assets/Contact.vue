<template>
  <div class="p-4 shadow-md rounded-lg bg-black bg-opacity-5 backdrop-blur-sm transition-transform transform hover:scale-105 hover:shadow-lg">
    <a :href="'mailto:' + email" class="text-gray-700 text-lg font-semibold mb-2 p-2 block hover:underline">
      {{ email }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Contact',
  props: {
    email: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
