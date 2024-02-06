<template>
  <body class="bg-dark" :class="bgImage">
    <Navbar />
    <router-view />
  </body>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();
const bgImage = ref('home');

watch(
  () => route.name,
  () => {
    bgImage.value = route.name;
  }
);
</script>

<style scoped>
/* set up the body */
body {
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  background-size: cover;
  line-height: 1.5;
  min-height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr;

  overflow-x: hidden;
}

/* backgrounds */

.home {
  background-image: url(../src/assets/backgrounds/home/background-home-mobile.jpg);
}

.destination {
  background-image: url(../src/assets/backgrounds/destination/background-destination-mobile.jpg);
}

.crew {
  background-image: url(../src/assets/backgrounds/crew/background-crew-mobile.jpg);
}

.technology {
  background-image: url(../src/assets/backgrounds/technology/background-technology-mobile.jpg);
}

@media (min-width: 35rem) {
  .home {
    background-image: url(../src/assets/backgrounds/home/background-home-tablet.jpg);
  }

  .destination {
    background-image: url(../src/assets/backgrounds/destination/background-destination-tablet.jpg);
  }

  .crew {
    background-image: url(../src/assets/backgrounds/crew/background-crew-tablet.jpg);
  }

  .technology {
    background-image: url(../src/assets/backgrounds/technology/background-technology-tablet.jpg);
  }
}

@media (min-width: 45rem) {
  .home {
    background-image: url(../src/assets/backgrounds/home/background-home-desktop.jpg);
  }

  .destination {
    background-image: url(../src/assets/backgrounds/destination/background-destination-desktop.jpg);
  }

  .crew {
    background-image: url(../src/assets/backgrounds/crew/background-crew-desktop.jpg);
  }

  .technology {
    background-image: url(../src/assets/backgrounds/technology/background-technology-desktop.jpg);
  }
}
</style>
