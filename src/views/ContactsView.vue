<template>
  <div class="flex flex-col h-screen justify-between bg-site-primary">
    <Navbar :pageSelected="'Contacts'"></Navbar>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/modules/Footer.vue';
import Navbar from '@/components/modules/Navbar.vue';
import Contacts from '@/components/modules/Contacts.vue';
import Contact from '@/components/assets/Contact.vue';

export default defineComponent({
  name: 'ContactsView',
  components: {
    Footer,
    Contacts,
    Contact,
    Navbar,
  },
});
</script>
