<template>
    <div ref="bee" class="bee absolute z-0">
        <img src="@/assets/LogoReviu.svg" alt="Bee" class="w-10 h-10">
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Bee',
    setup() {
        const bee = ref<HTMLElement | null>(null);

        const moveBee = (x: number, y: number, angle: number) => {
            if (bee.value) {
                bee.value.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
            }
        };

        return { bee, moveBee };
    },
});
</script>
  
<style scoped>
.bee {
    transition: transform 0.2s ease-out;
}
</style>
  