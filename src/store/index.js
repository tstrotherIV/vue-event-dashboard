import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY = process.env.MYCLIENTID;
const searchURL = (dateRange) => {
  return `https://api.seatgeek.com/2/events?&client_id=${API_KEY}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local.gte=${dateRange.startDate}&datetime_local.lte=${dateRange.endDate}`;
};

export default new Vuex.Store({
  state: {
    startDate: null,
    endDate: null,
    concerts: {},
  },
  mutations: {
    setDateRange(state, payload) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
  },
  actions: {},
  modules: {},
});
