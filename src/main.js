import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App }
});
