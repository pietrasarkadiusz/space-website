<template lang="">
  <div
    class="dot-indicators flex"
    role="tablist"
    aria-label="crew member list"
    ref="dotList"
  >
    <button aria-selected="true" role="tab" @click="handleClick">
      <span class="sr-only">Commander</span>
    </button>
    <button aria-selected="false" role="tab" @click="handleClick">
      <span class="sr-only">Mission Specialist</span>
    </button>
    <button aria-selected="false" role="tab" @click="handleClick">
      <span class="sr-only">Pilot</span>
    </button>
    <button aria-selected="false" role="tab" @click="handleClick">
      <span class="sr-only">Flight Engineer</span>
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['selectDot']);

const dotList = ref();

const handleClick = (e) => {
  let dotsArray = [...dotList.value.children];
  dotsArray.forEach((button) => {
    button.setAttribute('aria-selected', 'false');
  });
  e.target.setAttribute('aria-selected', 'true');

  emit('selectDot', e.target.innerText);
};
</script>
<style scoped>
.dot-indicators > * {
  cursor: pointer;
  background-color: hsl(var(--clr-white) / 0.25);
  padding: 0.75em;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0;
}

.dot-indicators > *:hover,
.dot-indicators > *:focus {
  background-color: hsl(var(--clr-white) / 0.5);
}

.dot-indicators > .active,
.dot-indicators > [aria-selected='true'] {
  background-color: hsl(var(--clr-white) / 1);
}
</style>
