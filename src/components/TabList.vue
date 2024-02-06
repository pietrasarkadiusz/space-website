<template lang="">
  <div
    class="flex underline-indicators tab-list"
    ref="tabList"
    @click="handleClick"
  >
    <button
      aria-selected="true"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-accent"
    >
      Moon
    </button>

    <button
      aria-selected="false"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-accent"
    >
      Mars
    </button>

    <button
      aria-selected="false"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-accent"
    >
      Europa
    </button>

    <button
      aria-selected="false"
      class="fs-400 fw-400 ff-sans-cond letter-spacing-2 uppercase text-accent"
    >
      Titan
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// store emitted events
const emit = defineEmits(['selectTab']);

const tabList = ref();

const handleClick = (e) => {
  let buttonsArray = [...tabList.value.children];

  buttonsArray.forEach((button) => {
    button.setAttribute('aria-selected', 'false');
  });
  e.target.setAttribute('aria-selected', 'true');
  emit('selectTab', e.target.innerHTML);
};
</script>
<style scoped>
.tab-list {
  --gap: 2rem;
}
</style>
