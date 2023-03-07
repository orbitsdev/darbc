





import { createVuetify } from 'vuetify'


// element ui
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'




//vueitfy
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })


//wave ui 

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'




import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import  DarNavigation from './components/DarNavigation.vue';
import  DarButton from './components/DarButton.vue';
import  DarDialog from './components/DarDialog.vue';
import  DarTable from './components/DarTable.vue';
import  DarTable2 from './components/DarTable2.vue';
import  DarLink from './components/DarLink.vue';
import  Chart from './components/Chart.vue';
import  Pie from './components/Pie.vue';
import  Pie2 from './components/Pie2.vue';
import  BarGraph from './components/BarGraph.vue';
import  DarDetails from './components/DarDetails.vue';
import  DarFullCalendar from './components/DarFullCalendar.vue';
import  Pagination from './components/Pagination.vue';
import  SterpCard from './components/SterpCard.vue';
import  InputField from './components/InputField.vue';
import  SaveButton from './components/SaveButton.vue';
import  Spinner1 from './components/Spinner1.vue';
// import  VEscheduleCalendar from './components/VEscheduleCalendar.vue';
import {Link} from '@inertiajs/vue3';


// full calendar

import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// import VCalendar from 'v-calendar';
// import 'v-calendar/dist/style.css';
import * as echarts from 'echarts';

createInertiaApp({
  progress: {
    color: '#5819d5',
  },
  resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob('./pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    .use(plugin)
    // .use(VCalendar)
    .component('DarNavigation', DarNavigation)
    .component('DarButton' ,DarButton)
    .component('DarDialog', DarDialog)
    .component('DarTable', DarTable)
    .component('Link', Link)
    .component('DarLink', DarLink)
    .component('Chart', Chart)
    .component('Pie', Pie)
    .component('Pie2', Pie2)
    .component('BarGraph', BarGraph)
    .component('DarTable2', DarTable2)
    .component('DarFullCalendar', DarFullCalendar)
    .component('Pagination', Pagination)
    .component('SterpCard', SterpCard)
    .component('InputField', InputField)
    .component('SaveButton', SaveButton)
    .component('Spinner1', Spinner1)
    .component('DarDetails', DarDetails);

    new WaveUI(app, {
      // Some Wave UI options.
    })
    app.config.globalProperties.$echarts = echarts;

  //   .use(ElementPlus)
  //   .use(vuetify);

  // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //   app.component(key, component)
  // }
  return app.mount(el)
  },
});