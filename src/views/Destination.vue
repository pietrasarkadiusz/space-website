<template lang="">
  <main id="main" class="grid-container grid-container--destination flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">01</span>Pick your destination
    </h1>
    <picture id="planet-image">
      <source :srcset="destination.images.webp" type="image/webp" />
      <img :src="destination.images.png" alt="planet image" />
    </picture>

    <TabList class="tab-list" @selectTab="changeDestination" />
    <!-- The moon -->
    <article
      class="destination-info flow"
      id="moon-tab"
      tabindex="0"
      role="tabpanel"
    >
      <h2 class="fs-800 uppercase ff-serif">
        {{ destination.name }}
      </h2>

      <p>
        {{ destination.description }}
      </p>

      <div class="destination-meta flex">
        <div>
          <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
          <p class="ff-serif uppercase">
            {{ destination.distance }}
          </p>
        </div>
        <div>
          <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
          <p class="ff-serif uppercase">
            {{ destination.travel }}
          </p>
        </div>
      </div>
    </article>
  </main>
</template>
<script>
import TabList from '../components/TabList.vue';

export default {
  data() {
    return {
      destination: [],
    };
  },
  computed: {
    getDestinations() {
      return this.$store.getters['destinations/getDestinations'];
    },
    getDestination() {
      return this.$store.getters['destinations/getDestination'];
    },
  },
  methods: {
    getImgUrl(image) {
      return `/src${image}`;
    },
    changeDestination(name) {
      this.destination = this.getDestination(name.trim());
    },
  },
  created() {
    this.destination = this.getDestination('Moon');
  },
  components: {
    TabList,
  },
};
</script>
<style scoped>
/* destination layout */

.grid-container--destination {
  --flow-space: 2rem;
  grid-template-areas:
    'title'
    'image'
    'tabs'
    'content';
}

.grid-container--destination > picture {
  grid-area: image;
  max-width: 60%;
  align-self: start;
}

.grid-container--destination > .tab-list {
  grid-area: tabs;
}

.grid-container--destination > .destination-info {
  grid-area: content;
}

.destination-meta {
  flex-direction: column;
  border-top: 1px solid hsl(var(--clr-white) / 0.1);
  padding-top: 2.5rem;
  margin-top: 2.5rem;
}

.destination-meta p {
  font-size: 1.75rem;
}

@media (min-width: 35em) {
  .numbered-title {
    justify-self: start;
    margin-top: 2rem;
  }

  .destination-meta {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

@media (min-width: 45em) {
  .grid-container--destination {
    justify-items: start;
    align-content: start;
    grid-template-areas:
      '. title title .'
      '. image tabs .'
      '. image content .';
  }

  .grid-container--destination > picture {
    max-width: 90%;
  }

  .destination-meta {
    --gap: min(6vw, 6rem);
    justify-content: start;
  }
}
</style>
<style>
/* background */
#app {
  background-image: url(../assets/destination/background-destination-mobile.jpg);
}

@media (min-width: 35rem) {
  #app {
    background-image: url(../assets/destination/background-destination-tablet.jpg);
  }
}

@media (min-width: 45rem) {
  #app {
    background-image: url(../assets/destination/background-destination-desktop.jpg);
  }
}
</style>
