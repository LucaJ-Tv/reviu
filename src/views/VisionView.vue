<template>
  <div class="flex flex-col min-h-screen bg-site-primary">
    <Navbar :pageSelected="'Vision'"></Navbar>
    <Vision></Vision>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue';
import Navbar from '@/components/modules/Navbar.vue';
import Vision from '@/components/modules/Vision.vue';

export default defineComponent({
  name: 'VisionView',
  components: {
    Footer,
    Vision,
    Navbar,
  },
});
</script>
