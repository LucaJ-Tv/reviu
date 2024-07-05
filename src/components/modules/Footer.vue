<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <FooterLinks />
      <FooterCopyright />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterLinks from './FooterLinks.vue';
import FooterCopyright from './FooterCopyright.vue';

export default defineComponent({
  name: 'FooterLinks',
  components: {
    FooterLinks,
    FooterCopyright
  }
});
</script>
