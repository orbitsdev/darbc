<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from '../plugins/event-utils.js';

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      
      calendarOptions: {
        
        plugins: [
          listPlugin,
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],

         customButtons: {
    add: {
      text: 'Add',
      click: function() {
        alert('clicked the Add button!');
      }
    },
    update: {
      text: 'Update',
      click: function() {
        alert('clicked the Update button!');
      }
    },
    delete: {
      text: 'Delete',
      click: function() {
        alert('clicked the Dele button!');
      }
    },
  },
        headerToolbar: {
          left: 'add update delete prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay, listDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    
    }
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect() // clear date selection
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
  }
}
</script>
<template>
  <!-- <button @click="toggleWeekends">toggle weekends</button> -->
  <FullCalendar :options="calendarOptions" />
</template>