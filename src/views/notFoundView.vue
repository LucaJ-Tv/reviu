<template>
  <div class="flex flex-col h-screen justify-between bg-site-primary">
    <Navbar :pageSelected="'0'"></Navbar>

    <NotFound></NotFound>
    <Footer></Footer>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue';
import Navbar from '@/components/modules/Navbar.vue';
import NotFound from '@/components/modules/NotFound.vue';

export default defineComponent({
  name: 'notFoundView',
  components: {
    Footer,
    Navbar,
    NotFound
  },
});
</script>
  