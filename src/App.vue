<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar v-ons-index="activeIndex" position="auto" :visible="true">
      <template slot="pages">
        <home-page></home-page>
        <settings-page></settings-page>
      </template>

      <v-ons-tab v-for="(tab, i) in tabs"
        :icon="!$platform.isAndroid() && tabs[i].icon"
        :label="tabs[i].label"
        :badge="tabs[i].badge"
      ></v-ons-tab>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import settingsPage from 'Settings';
  import homePage from 'Home';

  export default {
    data() {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: 'ion-home',
            label: 'Home'
          },
          {
            icon: 'ion-ios-settings',
            label: 'Settings'
          }
        ]
      };
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label;
      }
    },
    components: { homePage, settingsPage }
  }
</script>
