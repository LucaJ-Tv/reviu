<template>
    <div class="notFound flex flex-col h-screen justify-between text-gray-200 bg-site-primary">
      <Navbar :pageSelected="'0'"></Navbar>
      <div class="flex flex-col h-screen justify-between bg-site-primary bg-opacity-35 backdrop-blur-md shadow-md border-gray-200">
        <div class="flex flex-col items-center justify-center flex-1">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-4">Pagina non trovata</h1>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-4">Torna alla schemata iniziale</h2>
        </div>
    </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Footer from '@/components/modules/Footer.vue'; 
  import Navbar from '@/components/modules/Navbar.vue';
  
  export default defineComponent({
    name: 'notFoundView',
    components: {
      Footer,
      Navbar
    },
  });
  </script>
  