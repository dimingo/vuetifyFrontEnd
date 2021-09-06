<template>
  <nav>
    <v-toolbar flat app class="text-uppercase grey--text">
      <v-app-bar-nav-icon color="grey--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Ketcha</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain>
        <span>Sign out</span>
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text">
          <v-list-item-icon>
            <v-icon >{{link.icon}}</v-icon>
          </v-list-item-icon>
        
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' }, 
      ]
    };
  },
};
</script>
