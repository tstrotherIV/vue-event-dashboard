<template>
  <v-container>
    <!-- <h1>Concerts List</h1> -->
    <v-sheet>
      <v-slide-group class="pb-5" show-arrows>
        <v-slide-item v-for="concert in concerts.events" :key="concert.id">
          <v-card class="ma-4" width="300" height="450px">
            <v-card-title class="text-center">
              {{ concert.short_title }}
            </v-card-title>
            <v-card-text>
              {{ formatDate(concert.datetime_local) }}
            </v-card-text>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="200px"
              max-width="250"
              :src="`${concert.performers[0].image}`"
            ></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { dateConverter } from "../mixins/dateMixin";

export default {
  mixins: [dateConverter],
  computed: {
    ...mapState(["concerts"]),
  },
};
</script>

<style></style>
