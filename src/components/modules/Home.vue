<template>
    <div class="flex flex-col h-screen justify-between text-gray-200 bg-slate-500">
        <HomeContentComponent title="Prova"></HomeContentComponent>
        <HomeContentComponent title="Prova2"></HomeContentComponent>
        <HomeContentComponent title="Prova3"></HomeContentComponent>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
import HomeContentComponent from '../assets/HomeContentComponent.vue';
  
  export default defineComponent({
    name: 'Home',
    components: { HomeContentComponent }
});
  </script>
  