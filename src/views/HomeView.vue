<template>
  <div class="flex flex-col h-screen bg-site-primary">
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue';
import Navbar from '@/components/modules/Navbar.vue';
import HomeContentComponent from '@/components/assets/HomeContentComponent.vue';
import Home from '@/components/modules/Home.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Footer,
    Navbar,
    HomeContentComponent,
    Home
  },
});
</script>
