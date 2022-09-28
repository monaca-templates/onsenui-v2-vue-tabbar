<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import settingsPage from './Settings.vue';
  import homePage from './Home.vue';
  import newsPage from './News.vue';

  export default {
    data() {
      return {
        activeIndex: 0,
        tabs: [
	  {
	    icon: this.md() ? null : 'ion-ios-home',
	    label: 'Home',
	    page: homePage
	  },
	  {
	    icon: this.md() ? null : 'ion-ios-notifications',
	    label: 'News',
	    page: newsPage,
	    badge: 7
	  },
	  {
	    icon: this.md() ? null : 'ion-ios-settings',
	    label: 'Settings',
	    page: settingsPage
	  }
        ]
      };
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      }
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label;
      }
    },
    components: { homePage, settingsPage, newsPage }
  }
</script>
