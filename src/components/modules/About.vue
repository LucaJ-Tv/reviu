<template>
  <div>
    <h1 class="text-center py-3 shadow-md bg-black bg-opacity-5 backdrop-blur-sm mb-6 font-semibold text-2xl w-full">Team</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <card :profilePicPath="profilePicLucone" :name="'Lucone'" :surname="'Ferarone'" :role="'CTO'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae veritatis cum odit. Consequatur, ducimus. Hic ipsum,'"></card>
      <card :profilePicPath="profilePicLucone" :name="'Lucone'" :surname="'Ferarone'" :role="'CTO'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae veritatis cum odit. Consequatur, ducimus. Hic ipsum,'"></card>
      <card :profilePicPath="profilePicLucone" :name="'Lucone'" :surname="'Ferarone'" :role="'CTO'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae veritatis cum odit. Consequatur, ducimus. Hic ipsum,'"></card>
      <card :profilePicPath="profilePicLucone" :name="'Lucone'" :surname="'Ferarone'" :role="'CTO'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae veritatis cum odit. Consequatur, ducimus. Hic ipsum,'"></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/assets/memberCard.vue';
import profilePicLucone from '@/assets/fotoProfilo.jpg';

export default {
  name: 'AboutModule',
  components: {
    card
  },
  data() {
    return {
      profilePicLucone
    }
  }
}
</script>
