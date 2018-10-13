import Vue from 'vue';
import Router from 'vue-router';

import Quiz from '../pages/Quiz.vue';
import Score from '../pages/Score.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Quiz',
    components: {
      default: Quiz,
      scoreBar: Score,
    },
  }],
});
