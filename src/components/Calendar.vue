<template>
  <v-row>
    <v-col cols="12">
      <v-date-picker
        @change="assignDateRange"
        v-model="dates"
        range
        width="60%"
        height="100%"
      ></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data: () => ({
    dates: [],
  }),
  methods: {
    ...mapActions(["getEventsForDateRange"]),
    ...mapMutations(["setDateRange"]),

    assignDateRange() {
      const range = {
        startDate: this.dates[0],
        endDate: this.dates[1],
      };
      this.getEventsForDateRange(range);
    },
  },

  computed: {
    ...mapState(["dateRange"]),
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    ...mapState(["concerts"]),
  },
};
</script>

<style></style>
