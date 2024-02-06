<template lang="">
  <header class="primary-header flex">
    <div>
      <img src="../../shared/logo.svg" alt="space logo" class="logo" />
    </div>
    <button
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
      :class="{ opened: isOpen }"
      @click="toggleMenu()"
    >
      <span class="sr-only">Menu</span>
    </button>
    <nav
      id="primary-navigation"
      data-visible="false"
      class="primary-navigation underline-indicators flex"
      :aria-expanded="isOpen"
    >
      <router-link
        :to="{ name: 'home' }"
        class="ff-sans-cond uppercase text-white letter-spacing-2"
        ><span aria-hidden="true">00</span>Home</router-link
      >
      <router-link
        :to="{ name: 'destination' }"
        class="ff-sans-cond uppercase text-white letter-spacing-2"
        ><span aria-hidden="true">01</span>Destination</router-link
      >
      <router-link
        :to="{ name: 'crew' }"
        class="ff-sans-cond uppercase text-white letter-spacing-2"
        ><span aria-hidden="true">02</span>Crew</router-link
      >
      <router-link
        :to="{ name: 'technology' }"
        class="ff-sans-cond uppercase text-white letter-spacing-2"
        ><span aria-hidden="true">03</span>Technology</router-link
      >
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
<style scoped>
.primary-header {
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
}

.primary-navigation {
  --gap: clamp(1.5rem, 5vw, 3.5rem);
  --underline-gap: 2rem;
  list-style: none;
  background-color: hsl(var(--clr-dark) / 0.9);
  padding: 0;
  margin: 0;
}

@supports (backdrop-filter: blur(1rem)) {
  .primary-navigation {
    background: hsl(var(--clr-white) / 0.05);
    backdrop-filter: blur(1rem);
  }
}

.primary-navigation a {
  text-decoration: none;
}

.primary-navigation a > span {
  font-weight: 700;
  margin-right: 0.5em;
}

.mobile-nav-toggle {
  display: none;
}

@media (max-width: 35rem) {
  .primary-navigation {
    --underline-gap: 0.5rem;
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    list-style: none;
    padding: min(6rem, 10vh) 2rem;
    margin: 0;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
  }

  .primary-navigation[aria-expanded='true'] {
    transform: translateX(0);
  }

  .primary-navigation a {
    display: block;
    width: 100%;
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: url(../../shared/icon-hamburger.svg);
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }

  .mobile-nav-toggle.opened {
    background-image: url(../../shared/icon-close.svg);
  }
}

@media (min-width: 35em) {
  .primary-navigation {
    padding-inline: clamp(2rem, 6vw, 7rem);
  }
}

@media (min-width: 35rem) and (max-width: 44.999rem) {
  .primary-navigation a > span {
    display: none;
  }
}

@media (min-width: 45em) {
  .primary-header::after {
    content: '';
    display: block;
    position: relative;
    background-color: hsl(var(--clr-white) / 0.25);
    height: 1px;
    width: 100%;
    margin-right: -3rem;
    order: 1;
  }

  .primary-header nav {
    order: 2;
  }

  .primary-navigation {
    margin-block: 2rem;
  }
}
</style>
