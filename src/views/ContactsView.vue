<template>
    <div class="contacts flex flex-col h-screen justify-between bg-site-primary">
      <Navbar></Navbar>
      <h1>This is an Contacts page</h1>
      <Footer></Footer>
    </div>
  </template>
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Footer from '@/components/modules/Footer.vue'; 
  import Navbar from '@/components/modules/Navbar.vue';
  
  export default defineComponent({
    name: 'ContactsView',
    components: {
      Footer,
      Navbar
    },
  });
  </script>
  