<template>
  <div class="py-8">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <p>{{ loremIpsum }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeContentComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const generateLoremIpsum = () => {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac lorem facilisis, a placerat ligula bibendum. Sed efficitur sem vitae quam pharetra, sed luctus velit aliquam. Nulla facilisi. Proin vulputate est id ligula vestibulum, quis lobortis felis convallis. Integer in nisi vel nunc facilisis lacinia vel a ex. Mauris egestas risus sed convallis euismod. Phasellus hendrerit mauris sed eros feugiat consequat. Donec consectetur, nisi vel sodales sodales, est magna auctor diam, sed ullamcorper eros quam non sapien. Cras viverra sem ac lectus blandit, nec tempor lectus pulvinar. Nam ullamcorper felis et eros aliquet, non gravida orci tempor. Quisque bibendum tortor eu mi consectetur egestas. Vivamus vel aliquet velit. Nam sed eleifend nulla. Nam lacinia velit sed luctus tincidunt. Nullam aliquam vitae elit a viverra.";
    };

    return {
      loremIpsum: generateLoremIpsum()
    };
  }
});
</script>
