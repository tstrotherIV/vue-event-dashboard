<template>
  <v-row>
    <v-col cols="6" sm="6">
      <v-date-picker v-model="dates" range></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    dates: [],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    computed: {
    ...mapState(["dateRange"]),
  },
  },
};
</script>

<style></style>
