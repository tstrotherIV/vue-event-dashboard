<template>
  <div>
    <div>
      <h1 class="text-center">Event Calendar</h1>
    </div>
    <div>
      <h4 class="text-center" v-if="startDate != endDate">Events between {{ formatDate(startDate) }} and {{ formatDate(endDate) }}</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { dateConverter } from "../mixins/dateMixin";

export default {
  mixins: [dateConverter],
  computed: {
    ...mapState(["startDate", "endDate"]),
  },
};
</script>

<style></style>
