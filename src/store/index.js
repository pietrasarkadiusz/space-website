import { createStore } from 'vuex';

import destinationsModule from './modules/destinations/index.js';
import crewsModule from './modules/crews/index.js';
import technologiesModule from './modules/technologies/index.js';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    destinations: destinationsModule,
    crews: crewsModule,
    technologies: technologiesModule,
  },
});
