<template>
    <div class="flex flex-col h-min-screen justify-between bg-site-primary bg-opacity-35 border-gray-200 p-6">
      <h1 class="text-center py-3 shadow-md bg-black bg-opacity-5 backdrop-blur-sm mb-6 font-semibold text-2xl w-full">Vision</h1>
      <div class="flex flex-col items-center justify-center flex-1">
        <div class="flex items-start space-x-8">
          <ProgressBar :progress="progress" />
          <div class="text-gray-700">
            <div class="space-y-4 p-4">
              <Goal v-for="(goal, index) in goals" :key="index" :goal="goal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, ref } from 'vue';
  import ProgressBar from '@/components/assets/ProgressBar.vue';
  import Goal from '@/components/assets/Goal.vue';
  
  export default defineComponent({
    name: 'Vision',
    components: {
      ProgressBar,
      Goal,
    },
    setup() {
      const goals = ref([
        { text: 'La nostra visione è creare un mondo in cui la tecnologia e l\'innovazione guidino il cambiamento positivo e migliorino la qualità della vita di tutti.', completed: true },
        { text: 'Miriamo a essere all\'avanguardia nei progressi tecnologici, spingendo continuamente i confini di ciò che è possibile e garantendo che le nostre soluzioni siano accessibili, sostenibili e vantaggiose per tutti.', completed: false },
        { text: 'Unisciti a noi nel nostro viaggio mentre lavoriamo verso un futuro più luminoso, sfruttando il potere della tecnologia per risolvere le sfide più pressanti del mondo.', completed: true }
      ]);
  
      const progress = computed(() => {
        const completedGoals = goals.value.filter(goal => goal.completed).length;
        return (completedGoals / goals.value.length) * 100;
      });
  
      return {
        goals,
        progress,
      };
    },
  });
  </script>
