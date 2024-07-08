<template>
  <div class="flex flex-col h-screen justify-between text-gray-200 bg-site-primary">
    <Navbar></Navbar>
    <div class="text-black">questa è una prova</div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue'; 
import Navbar from '@/components/modules/Navbar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Footer,
    Navbar
  },
});
</script>
