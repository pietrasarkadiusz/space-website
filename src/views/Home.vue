<template lang="">
  <main id="main" class="grid-container grid-container--home">
    <div>
      <h1 class="text-accent fs-500 ff-sans-cond letter-spacing-1 uppercase">
        So, you want to travel to
        <span class="text-white fs-900 ff-serif d-block">Space</span>
      </h1>
      <p class="text-accent fs-400">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div>
      <LargeButton />
    </div>
  </main>
</template>
<script>
import LargeButton from '../components/LargeButton.vue';
export default {
  components: {
    LargeButton,
  },
};
</script>
<style scoped>
/* layout */

@media (min-width: 45em) {
  .grid-container--home {
    padding-bottom: max(6rem, 20vh);
    align-items: end;
  }

  .grid-container--home > *:first-child {
    grid-column: 2;
  }

  .grid-container--home > *:last-child {
    grid-column: 3;
  }
}
</style>
<style></style>
