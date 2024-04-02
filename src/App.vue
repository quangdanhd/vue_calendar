<template>
  <div id="calendar-background-wrapper">
    <div id="calendar-background"></div>
  </div>
  <div id="calendar">
    <calendar-date />
  </div>
</template>

<script>
import CalendarDate from "@/components/CalendarDate.vue";
export default {
  name: "App",
  components: {
    CalendarDate,
  },
};
</script>
