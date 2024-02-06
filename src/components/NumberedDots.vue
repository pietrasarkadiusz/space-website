<template lang="">
  <div
    class="number-indicators flex"
    role="tablist"
    aria-label="technology list"
    ref="numberedList"
  >
    <button
      class="ff-serif fs-500 text-accent bg-dark"
      aria-selected="true"
      role="tab"
      @click="handleClick"
    >
      <span class="sr-only">Space capsule</span>
      1
    </button>
    <button
      class="ff-serif fs-500 text-accent bg-dark"
      aria-selected="false"
      role="tab"
      @click="handleClick"
    >
      <span class="sr-only">Spaceport</span>
      2
    </button>
    <button
      class="ff-serif fs-500 text-accent bg-dark"
      aria-selected="false"
      role="tab"
      @click="handleClick"
    >
      <span class="sr-only">Launch vehicle</span>
      3
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['selectNumber']);

const numberedList = ref();

const handleClick = (e) => {
  let dotsArray = [...numberedList.value.children];
  dotsArray.forEach((button) => {
    button.setAttribute('aria-selected', 'false');
  });
  e.target.setAttribute('aria-selected', 'true');
  let name = e.target.innerText.split(/\s+/);
  name.pop();
  emit('selectNumber', name.join(' '));
};
</script>
<style scoped>
.number-indicators > * {
  cursor: pointer;
  padding: 0 2rem;
  aspect-ratio: 1;
  border: solid hsl(var(--clr-white) / 0.25);
  border-radius: 50%;
}

.number-indicators > *:hover,
.number-indicators > *:focus {
  border-color: hsl(var(--clr-white) / 0.5);
}

.number-indicators > .active,
.number-indicators > [aria-selected='true'] {
  background-color: hsl(var(--clr-white));
  color: hsl(var(--clr-dark));
}
</style>
