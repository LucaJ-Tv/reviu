<template>
  <div class="p-4 shadow-md rounded-lg bg-black bg-opacity-5 backdrop-blur-sm w-60">
      <img :src=profilePicPath alt="foto profilo" class="size-52 rounded-lg shadow-md">
      <div class="pt-1">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-semibold"> {{ name }} {{ surname }}</h1>
            <h2 class="font-light"> {{ role }}</h2>
          </div>
          <a :href=contactLink><img :src=linkedinLogo alt="logo linkedin" class="size-6 hover:opacity-80"></a>
        </div>
        <p class="w-fit text-sm pt-1">{{ description }}</p>
      </div>

  </div>
</template>

<script>
import linkedinLogo from '@/assets/linkedinLogoFooter.png';

export default {

  props: {
    profilePicPath: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    contactLink: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      linkedinLogo
    };
  }
}
</script>