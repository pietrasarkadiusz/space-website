<template lang="">
  <main id="main" class="grid-container grid-container--technology flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">03</span> Space lunch 101
    </h1>

    <NumberedDots class="tab-list" @selectNumber="changeTechnology" />

    <!-- capsule -->
    <article class="technology-info flow" id="capsule-tab" role="tabpanel">
      <header class="flow flow--space-small">
        <h2 class="fs-400 ff-serif uppercase">The terminology...</h2>
        <p class="fs-700 uppercase ff-serif">{{ technology.name }}</p>
      </header>
      <p>
        {{ technology.description }}
      </p>
    </article>
    <picture id="capsule-image">
      <source media="(min-width: 720px)" :srcset="technology.images.portrait" />
      <source :srcset="technology.images.landscape" />
      <img :src="technology.images.portrait" alt="The space capsule" />
    </picture>
  </main>
</template>
<script>
import NumberedDots from '../components/NumberedDots.vue';

export default {
  data() {
    return {
      technology: [],
    };
  },
  computed: {
    getTechnology() {
      return this.$store.getters['technologies/getTechnology'];
    },
  },
  methods: {
    getImgUrl(image) {
      return `/src${image}`;
    },
    changeTechnology(name) {
      this.technology = this.getTechnology(name.trim());
    },
  },
  created() {
    this.technology = this.getTechnology('Space capsule');
  },
  components: {
    NumberedDots,
  },
};
</script>
<style scoped>
/* technology layout */

.grid-container--technology {
  --flow-space: 2rem;
  padding-inline: 0;
  grid-template-areas:
    'title'
    'image'
    'tabs'
    'content';
}

.grid-container--technology > :not(picture) {
  margin-inline: 1rem;
}

.grid-container--technology > picture {
  grid-area: image;
  width: 100%;
}

.grid-container--technology > picture > img {
  width: 100%;
}

.grid-container--technology > .number-indicators {
  grid-area: tabs;
}

.grid-container--technology > .technology-info {
  grid-area: content;
}

.technology-info h2 {
  color: hsl(var(--clr-white) / 0.5);
}
@media (min-width: 35em) {
  .numbered-title {
    justify-self: start;
    margin-top: 2rem;
  }

  .grid-container--technology {
    grid-template-areas:
      'title'
      'image'
      'tabs'
      'content';
  }
}

@media (min-width: 45em) {
  .grid-container--technology {
    grid-template-columns: minmax(1rem, 1fr) minmax(0, 7rem) minmax(0, 37rem) minmax(
        0,
        35rem
      );
    justify-items: start;
    grid-template-areas:
      '. title title title'
      '. tabs content image'
      '. tabs content image';
  }

  .grid-container--technology .number-indicators {
    flex-direction: column;
  }

  .grid-container--technology > picture {
    margin-top: 0;
  }
}
</style>
