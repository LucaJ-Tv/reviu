<template>
  <div class="flex flex-col h-screen justify-between bg-site-primary">
    <Navbar :pageSelected="'Contacts'"></Navbar>
    <div>this page is for Contacts</div>
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
    Navbar,
  },
});
</script>
