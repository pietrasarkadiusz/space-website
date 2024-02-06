<template lang="">
  <main id="main" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">02</span> Meet your crew
    </h1>

    <DotList @selectDot="changeCrew" class="dot-list" />

    <!-- commander -->
    <article class="crew-info flow" role="tabpanel">
      <header class="flow flow--space-small">
        <h2 class="fs-600 ff-serif uppercase">{{ crew.role }}</h2>
        <p class="fs-700 uppercase ff-serif">{{ crew.name }}</p>
      </header>
      <p>{{ crew.bio }}</p>
    </article>

    <picture>
      <source :srcset="crew.images.webp" type="image/webp" />
      <img :src="crew.images.png" alt="Douglas Hurley" />
    </picture>
  </main>
</template>
<script>
import DotList from '../components/DotList.vue';

export default {
  data() {
    return {
      crew: [],
    };
  },
  computed: {
    getCrew() {
      return this.$store.getters['crews/getCrew'];
    },
  },
  methods: {
    getImgUrl(image) {
      return `/src${image}`;
    },
    changeCrew(role) {
      this.crew = this.getCrew(role.trim());
    },
  },
  created() {
    this.crew = this.getCrew('Commander');
  },
  components: {
    DotList,
  },
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
/* crew layout */

.grid-container--crew {
  --flow-space: 2rem;
  grid-template-areas:
    'title'
    'image'
    'tabs'
    'content';
}

.grid-container--crew > picture {
  grid-area: image;
  max-width: 60%;
  border-bottom: 1px solid hsl(var(--clr-white) / 0.1);
}

.grid-container--crew > .dot-list {
  grid-area: tabs;
}

.grid-container--crew > .crew-info {
  grid-area: content;
}

.crew-info h2 {
  color: hsl(var(--clr-white) / 0.5);
}

@media (min-width: 35em) {
  .numbered-title {
    justify-self: start;
    margin-top: 2rem;
  }
  .grid-container--crew {
    padding-bottom: 0;
    grid-template-areas:
      'title'
      'content'
      'tabs'
      'image';
  }
}

@media (min-width: 45em) {
  .grid-container--crew {
    grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(
        1rem,
        1fr
      );
    justify-items: start;
    grid-template-areas:
      '. title title .'
      '. content image .'
      '. tabs image .';
  }

  .grid-container--crew > picture {
    grid-column: span 2;
    align-self: end;
    max-width: 80%;
    margin-top: 0;
  }
}
</style>
