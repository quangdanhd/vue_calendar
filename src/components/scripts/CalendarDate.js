export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    // today
    const today = new Date();
    // const today = new Date("2024-07-10");
    const y = today.getFullYear();
    const m = today.getMonth();
    const currentDay = this.formatDate(today);
    // first date of month
    const first = new Date(y, m, 1);
    // first date of calendar
    const firstDate = new Date(
      first.getTime() - (first.getDay() - 1) * 24 * 60 * 60 * 1000
    );
    // prepare for while
    const currentMonth = `${y}-${m}`;
    let date = firstDate;
    let month = this.getYearMonth(date);
    // data
    this.data = [this.getDateData(date, currentDay)];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      date = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      month = this.getYearMonth(date);
      // date is monday
      if (month > currentMonth && date.getDay() === 1) {
        break;
      }
      this.data.push(this.getDateData(date, currentDay));
    }
    console.table(this.data);
  },
  methods: {
    getYearMonth(date) {
      return date.getFullYear() + "-" + date.getMonth();
    },
    formatDate(date) {
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const year = date.getFullYear();

      return [year, month, day].join("-");
    },
    getDateData(date, today) {
      const format = this.formatDate(date);
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return {
        date: format,
        day: date.getDate(),
        dayName: days[date.getDay()],
        today: format === today,
      };
    },
  },
};
