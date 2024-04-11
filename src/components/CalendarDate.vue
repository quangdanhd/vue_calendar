<template>
  <div id="calendar-month">{{ monthYear }}</div>
  <div id="calendar-dates">
    <div
      @click="showModal(item)"
      v-for="(item, key) in data"
      :key="key"
      class="date-wrapper active-month"
      :class="{ 'active-day': item.isToday }"
    >
      <div class="date">
        <div class="date-day">
          <h2 class="date-day-of-month">{{ item.day }}</h2>
          <h2 class="date-day-of-week">{{ item.dayName }}</h2>
        </div>
        <div v-if="item.note" class="date-title">
          <div class="date-title-dot"></div>
          <h2>{{ item.note }}</h2>
        </div>
      </div>
      <div v-if="item.isToday" class="active-day-indicator"></div>
    </div>
  </div>
  <div v-if="modal" id="calendar-modal" @click.self="closeModal">
    <div class="modal">
      <div class="modal-header">
        <div class="date-day">
          <h2 class="date-day-of-month">
            {{ modalData.day }} {{ modalData.monthName }}
          </h2>
          <h2 class="date-day-of-week">{{ modalData.dayName }}</h2>
        </div>
      </div>
      <div class="modal-body">
        <textarea v-model="modalData.note"></textarea>
      </div>
      <div class="modal-footer">
        <button @click="closeModal">Close</button>
        <button @click="saveNote">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDate from "@/components/scripts/CalendarDate";
export default CalendarDate;
</script>
