<template>
  <div class="flex flex-col h-screen justify-between bg-site-primary">
    <Navbar :pageSelected="'About us'"></Navbar>
    <div>this page is for about us</div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue';
import Navbar from '@/components/modules/Navbar.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    Footer,
    Navbar,
  },
});
</script>
