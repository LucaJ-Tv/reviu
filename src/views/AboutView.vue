<template>
  <div class="flex flex-col h-screen justify-between bg-site-primary">
    <Navbar :pageSelected="'About us'"></Navbar>
    <About></About>
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
