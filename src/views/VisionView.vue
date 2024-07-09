<template>
  <div class="flex flex-col h-screen bg-site-primary">
    <Navbar :pageSelected="'Vision'"></Navbar>
    <div>this page is for vision</div>
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
    Navbar,
  },
});
</script>
