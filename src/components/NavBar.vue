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

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on">
              Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.title"
              route
              :to="link.route"
            >
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn plain>
        <span>Sign out</span>
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="118">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">Software Engineer</p>
        </v-flex>
        <v-flex grow>
         
          <popup/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from "./Popup.vue";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { title: "Photos", icon: "mdi-image", route: "/photos" },
        { title: "About", icon: "mdi-help-box", route: "/about" },
      ],
    };
  },
};
</script>
