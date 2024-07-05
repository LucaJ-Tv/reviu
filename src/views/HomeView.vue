<template>
<<<<<<< HEAD
  <Footer></Footer>
=======
  <Navbar></Navbar>
  <footer></footer>
>>>>>>> 8d5db1cc3b08be3d1486f385823ac3b6d370132b
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
