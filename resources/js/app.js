





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
 

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob('./pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    .use(plugin)
    .component('DarNavigation', DarNavigation)
    .component('DarButton' ,DarButton)
    .component('DarDialog', DarDialog)
    .component('DarTable', DarTable);

    new WaveUI(app, {
      // Some Wave UI options.
    })


  //   .use(ElementPlus)
  //   .use(vuetify);

  // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //   app.component(key, component)
  // }
  return app.mount(el)
  },
});