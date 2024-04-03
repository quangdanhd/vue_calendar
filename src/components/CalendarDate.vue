<template>
  <div id="calendar-dates">
    <div
      @click="showModal(item)"
      v-for="(item, key) in data"
      :key="key"
      class="date-wrapper"
      :class="{ 'active-day': item.today, 'active-month': item.activeMonth }"
    >
      <div class="date">
        <div class="date-day">
          <h2 class="date-day-of-month">{{ item.day }}</h2>
          <h2 class="date-day-of-week">{{ item.dayName }}</h2>
        </div>
        <div v-if="item.activeMonth" class="date-title">
          <div class="date-title-dot"></div>
          <h2>Groundhog Day</h2>
        </div>
      </div>
      <div v-if="item.today" class="active-day-indicator"></div>
    </div>
  </div>
  <div v-if="modal" id="calendar-modal" @click.self="closeModal">
    <div class="modal">
      <div class="modal-header">
        <div class="date-day">
          <h2 class="date-day-of-month">{{ modalDay }}</h2>
          <h2 class="date-day-of-week">{{ modalDayName }}</h2>
        </div>
      </div>
      <div class="modal-body">
        <textarea></textarea>
      </div>
      <div class="modal-footer">
        <button @click="closeModal">Close</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDate from "@/components/scripts/CalendarDate";
export default CalendarDate;
</script>
