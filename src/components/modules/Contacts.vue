<template>
    <div class="flex flex-col h-min-screen justify-between bg-site-primary bg-opacity-35 border-gray-200">
        <div class="flex flex-col items-center justify-center flex-1">
            <h1 class="text-center py-3 shadow-md bg-black bg-opacity-5 backdrop-blur-sm mb-6 font-semibold text-2xl w-full">Contacts</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Contact email="contact1@example.com"></Contact>
                <Contact email="contact2@example.com"></Contact>
                <Contact email="contact3@example.com"></Contact>
                <Contact email="contact4@example.com"></Contact>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Contact from '@/components/assets/Contact.vue';

export default defineComponent({
    name: 'Contacts',
    components: {
        Contact,
    },
});
</script>

  