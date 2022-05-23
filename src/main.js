import ons from 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';

import App from './App.vue';

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App }
});
