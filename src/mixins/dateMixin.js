export const dateConverter = {
  methods: {
    formatDate(dateString) {
      const d = new Date(dateString);
      const formatOptions = { day: "numeric", year: "numeric", month: "numeric" };
      return new Intl.DateTimeFormat("en-US", formatOptions).format(d);
    },
  },
};