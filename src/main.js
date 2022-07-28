import { createApp } from 'vue'
import './sass/index.scss'
import App from './App.vue'
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).mount('#app')
