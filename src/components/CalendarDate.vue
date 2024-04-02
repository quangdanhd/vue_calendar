<template>
  <div id="calendar-dates">
    <div
      v-for="(item, key) in data"
      :key="key"
      class="date-wrapper"
      :class="{ 'active-day active-month': item.today }"
    >
      <div class="date">
        <div class="date-day">
          <h2 class="date-day-of-month">{{ item.day }}</h2>
          <h2 class="date-day-of-week">{{ item.dayName }}</h2>
        </div>
        <!--        <div class="date-title">-->
        <!--          <div class="date-title-dot"></div>-->
        <!--          <h2>Groundhog Day</h2>-->
        <!--        </div>-->
      </div>
      <div v-if="item.today" class="active-day-indicator"></div>
    </div>
  </div>
</template>

<script>
import CalendarDate from "@/components/scripts/CalendarDate";
export default CalendarDate;
</script>
