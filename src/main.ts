import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './ui/router/router';

import { VenueService } from '@src/core/application/usecases/VenueService';
import { VenueRepository } from '@src/external/repository/VenueRepository';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import './style.css';

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

const venueService = new VenueService(new VenueRepository());

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .provide<VenueService>('venueService', venueService)
  .mount('#app');
