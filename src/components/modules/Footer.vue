<template>
  <footer class="text-black py-4">
    <div class="container mx-auto text-center">
      <FooterLinks />
      <FooterCopyright />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterLinks from '@/components/assets/FooterLinks.vue'
import FooterCopyright from '@/components/assets/FooterCopyright.vue'

export default defineComponent({
  name: 'Footer',
  components: {
    FooterLinks,
    FooterCopyright
  }
});
</script>
