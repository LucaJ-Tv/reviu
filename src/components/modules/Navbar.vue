<template>
  <nav class="z-10 bg-site-primary bg-opacity-35 backdrop-blur-md shadow-md border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/LogoReviu.svg" class="h-8" alt="Reviu logo"/>
        <img src="@/assets/LogotipoReviu.svg" class="h-7" alt="Reviu logo"/>
      </a>
      <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <transition name="slide-fade">
        <div v-if="menuOpen || isLargeScreen" class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium shadow-lg md:shadow-none flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li v-for="page in pages" :key="page">
              <a 
                @click = "nextpage(page)"
                :class="[
                  'block py-2 px-3 rounded-lg md:bg-transparent md:p-0',
                  page === pageSelected ? 'text-white bg-opacity-80 bg-site-tertiary hover:bg-opacity-100' : 'text-gray-900 hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-500'
                ]" 
                aria-current="page">
                {{ page }}
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter} from 'vue-router';

export default {
  name: 'Navbar',
  
  props: {
    pageSelected: {
      type: String,
      required: true
    }
  },

  data () {
      return {
        pages: ["Home", "Vision", "About us", "Contacts"]
      }
  },

  setup() {
    const menuOpen = ref(false);
    const isLargeScreen = ref(false);
    const router = useRouter();

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const nextpage = (page: String) => {
      const pageName = page.split(' ').join('').toLowerCase();
      router.push({ name: pageName });
    };

    const checkScreenSize = () => {
      isLargeScreen.value = window.innerWidth >= 768;
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkScreenSize);
    });

    return {
      menuOpen,
      isLargeScreen,
      toggleMenu,
      nextpage
    };
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
