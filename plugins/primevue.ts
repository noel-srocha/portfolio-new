import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Sidebar from "primevue/sidebar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true});
  nuxtApp.vueApp.component('PrimeButton', Button);
  nuxtApp.vueApp.component("PrimeSidebar", Sidebar);
  //other components that you need
});