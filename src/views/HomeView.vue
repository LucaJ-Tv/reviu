<template>
  <div class="flex flex-col h-screen justify-between text-gray-200 bg-slate-500">
    <Navbar></Navbar>
    <BeeMovement></BeeMovement>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue'; 
import Navbar from '@/components/modules/Navbar.vue';
import BeeMovement from '@/components/modules/BeeMovement.vue';
import HomeContentComponent from '@/components/assets/HomeContentComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Footer,
    Navbar,
    BeeMovement,
    HomeContentComponent
},
});
</script>
