<template>
    <div class="flex flex-col h-screen overflow-y-auto" ref="homeContainer">
        <HomeContentComponent title="Prova"></HomeContentComponent>
        <HomeContentComponent title="Prova2"></HomeContentComponent>
        <HomeContentComponent title="Prova3"></HomeContentComponent>

        <Bee ref="beeRef"></Bee>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import HomeContentComponent from '../assets/HomeContentComponent.vue';
import Bee from '../assets/Bee.vue';

export default defineComponent({
    name: 'Home',
    components: { HomeContentComponent, Bee },
    setup() {
        const homeContainer = ref<HTMLElement | null>(null);
        const beeRef = ref<typeof Bee | null>(null);

        const handleScroll = () => {
            if (!homeContainer.value || !beeRef.value) return;

            const scrollTop = homeContainer.value.scrollTop;
            const containerHeight = homeContainer.value.clientHeight;
            const scrollHeight = homeContainer.value.scrollHeight - containerHeight;
            const scrollFraction = scrollTop / scrollHeight;

            const beePathLength = Math.ceil(scrollHeight / containerHeight) * 10;

            const pathIndex = Math.min(Math.floor(scrollFraction * beePathLength), beePathLength - 1);

            const current = { x: 0, y: 0 };
            const end = { x: homeContainer.value.clientWidth - beeRef.value.$el.clientWidth, y: containerHeight - beeRef.value.$el.clientHeight };
            const x = current.x + (end.x - current.x) * (pathIndex / (beePathLength - 1));
            const y = current.y + (end.y - current.y) * (pathIndex / (beePathLength - 1));
            const angle = Math.atan2(end.y - current.y, end.x - current.x) * (180 / Math.PI);

            beeRef.value.moveBee(x, y, angle);
        };

        onMounted(() => {
            homeContainer.value?.addEventListener('scroll', handleScroll);
        });

        return {
            homeContainer,
            beeRef,
        };
    },
});
</script>
