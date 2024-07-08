<template>
    <div class="scroll-container relative w-full h-screen overflow-hidden">
        <!-- Ape che esegue il percorso (sfocata) -->
        <div ref="bee" class="bee z-0">
            <img src="@/assets/LogoReviu.svg" alt="Bee" class="w-12 h-12">
        </div>

        <div class="content h-[200vh] bg-white relative z-10">
            <Home></Home>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import Home from './Home.vue';

export default defineComponent({
    name: 'BeeMovement',
    components: { Home },
    setup() {
        const bee = ref<HTMLElement | null>(null);
        const numberOfPoints = 20;
        const path = generateRandomPath(numberOfPoints);

        function generateRandomPath(points: number) {
            const path = [];
            const startPoint = { x: 0, y: 0 }; 
            const endPoint = { x: window.innerWidth, y: window.innerHeight }; 
            
            path.push(startPoint);

            for (let i = 1; i < points - 1; i++) {
                const x = startPoint.x + (endPoint.x - startPoint.x) * (i / (points - 1));
                const y = startPoint.y + (endPoint.y - startPoint.y) * (i / (points - 1));
                path.push({ x, y });
            }

            path.push(endPoint);
            
            return path;
        }

        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const pathIndex = Math.min(
                path.length - 1,
                Math.floor(scrollFraction * (path.length - 1))
            );
            const nextIndex = pathIndex + 1;

            const current = path[pathIndex];
            const next = path[nextIndex];

            const progress = (scrollFraction * (path.length - 1)) % 1;

            const x = current.x + (next.x - current.x) * progress;
            const y = current.y + (next.y - current.y) * progress;
            const angle = Math.atan2(next.y - current.y, next.x - current.x) * (180 / Math.PI);

            if (bee.value) {
                bee.value.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        return { bee };
    }
});
</script>

<style scoped>
.bee {
    transition: transform 0.2s ease-out;
    filter: blur(3px); 
    z-index: 0; 
}
.content {
    z-index: 10; 
}
</style>
