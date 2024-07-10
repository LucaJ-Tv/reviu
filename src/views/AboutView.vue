<template>
  <div class="flex flex-col min-h-screen bg-site-primary">
    <Navbar :pageSelected="'About us'"></Navbar>
    <div class="flex-grow">
      <About></About>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue';
import Navbar from '@/components/modules/Navbar.vue';
import About from '@/components/modules/About.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    Footer,
    Navbar,
    About
  },
});
</script>
