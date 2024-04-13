export default {
  data() {
    return {
      currentDay: null,
      data: [],
      monthYear: null,
      // modal
      modal: false,
      modalData: {},
      // store
      storeKey: "CALENDAR_STORE",
      storedNotes: {},
      // active month
      activeMonth: null,
    };
  },
  created() {
    const today = new Date();
    this.currentDay = this.formatDate(today);
    this.activeMonth = this.firstDayOfMonth(today);
    console.log(this.activeMonth);
    // get data
    this.getCalendar();
  },
  methods: {
    getCalendar() {
      this.storedNotes = this.getStore();
      // today
      const today = new Date(this.activeMonth);
      // month view
      this.getMonthYear(today);
      // y m
      const y = today.getFullYear();
      const m = today.getMonth();
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
      this.data = [this.getDateData(date)];
      // eslint-disable-next-line no-constant-condition
      while (true) {
        date = new Date(date.getTime() + 24 * 60 * 60 * 1000);
        month = this.getYearMonth(date);
        // date is monday
        if (month > currentMonth && date.getDay() === 1) {
          break;
        }
        this.data.push(this.getDateData(date));
      }
      // console.table(this.data);
    },
    getStore() {
      let store = localStorage.getItem(this.storeKey);
      if (store) {
        try {
          store = JSON.parse(store);
        } catch (e) {
          console.log(e.message);
          store = {};
        }
      } else {
        store = {};
      }
      return store;
    },
    getMonthYear(date) {
      this.monthYear =
        date.toLocaleString("en", { month: "long" }) + " " + date.getFullYear();
    },
    getYearMonth(date) {
      return date.getFullYear() + "-" + date.getMonth();
    },
    formatDate(date) {
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const year = date.getFullYear();

      return [year, month, day].join("-");
    },
    firstDayOfMonth(date) {
      const y = date.getFullYear();
      const m = date.getMonth();

      const first = new Date(y, m, 1);
      return this.formatDate(first);
    },
    getDateData(date) {
      const format = this.formatDate(date);
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      let note = null;
      if (this.storedNotes[format]) {
        note = this.storedNotes[format];
      }

      return {
        date: format,
        day: date.getDate(),
        dayName: days[date.getDay()],
        isToday: format === this.currentDay,
        monthName: date.toLocaleString("en", { month: "short" }),
        note: note,
      };
    },
    showModal(data) {
      this.modal = !this.modal;
      this.modalData = data;
    },
    closeModal() {
      this.modal = !this.modal;
    },
    saveNote() {
      // get stored note
      const store = this.getStore();
      // write
      store[this.modalData.date] = this.modalData.note;
      // save
      localStorage.setItem(this.storeKey, JSON.stringify(store));
      // close modal
      this.closeModal();
      // refresh
      this.getCalendar();
    },
    previousMonth() {
      const date = new Date(this.activeMonth);
      this.activeMonth = this.firstDayOfMonth(
        new Date(date.setMonth(date.getMonth() - 1))
      );
      console.log(this.activeMonth);
      // get data
      this.getCalendar();
    },
    nextMonth() {
      const date = new Date(this.activeMonth);
      this.activeMonth = this.firstDayOfMonth(
        new Date(date.setMonth(date.getMonth() + 1))
      );
      console.log(this.activeMonth);
      // get data
      this.getCalendar();
    },
  },
};
