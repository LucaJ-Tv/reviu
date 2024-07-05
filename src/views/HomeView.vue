<template>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue'; 

export default defineComponent({
  name: 'HomeView',
  components: {
    Footer,
  },
});
</script>
