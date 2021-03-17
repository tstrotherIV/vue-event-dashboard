<template>
  <v-app>
    <v-main>
      <Header />
      <v-row justify="start">
        <v-col cols="12">
          <calendar />
        </v-col>
        <v-col cols="12">
          <concerts />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";
import Concerts from "./components/concerts.vue";
import Header from "./components/Header";

export default {
  name: "App",

  components: { Calendar, Header, Concerts },
};
</script>
