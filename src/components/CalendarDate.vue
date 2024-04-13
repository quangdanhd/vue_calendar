<template>
  <div id="calendar-month">
    <button @click="previousMonth">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        />
      </svg>
    </button>
    <span>{{ monthYear }}</span>
    <button @click="nextMonth">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
  </div>
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
