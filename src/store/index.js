import Vue from 'vue';
import Vuex from 'vuex';

import quizModule from './modules/quiz';
import scoreModule from './modules/score';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    quiz: quizModule,
    score: scoreModule,
  },
  getters: {
  },
});

