<template>
  <v-app>
    <v-main>
      <Header />
      <calendar />
    </v-main>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";
import Header from "./components/Header";

export default {
  name: "App",

  components: { Calendar, Header },
};
</script>
