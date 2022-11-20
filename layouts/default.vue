<template>
  <header class="header">
    <div v-if="smartphone" class="flex justify-content-start align-items-center">
      <PrimeButton icon="fa-solid fa-bars" class="p-button-text" @click="sidebarVisible = true" />
      <PrimeSidebar v-model:visible="sidebarVisible" position="top">
        <NuxtImg class="w-1" src="/images/profile.png" />
        <div class="flex flex-column justify-content-between align-items-center">
          <PrimeButton v-for="button in navigationButtons" :key="button" :label="button" class="p-button-raised" />
        </div>
      </PrimeSidebar>
    </div>
    <nav v-else class="flex justify-content-between align-items-center mx-8">
      <NuxtImg class="w-1" src="/images/profile.png" />
      <ul class="list-none flex justify-content-between align-items-center">
        <li v-for="button in navigationButtons">
          <PrimeButton :label="button" class="p-button-text mx-2" />
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <slot name="main" />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</template>

<script lang="ts" setup>
import { breakpointsVuetify } from "@vueuse/core";

const navigationButtons = ref<string[]>([
  "Home",
  "About",
  "Skills",
  "Projects",
  "Blog",
]);

const sidebarVisible = ref<boolean>(false);

const breakpoints = useBreakpoints(breakpointsVuetify);

const smartphone = breakpoints.smallerOrEqual('sm');
const tablet = breakpoints.isInBetween('md', 'lg');
const desktop = breakpoints.greaterOrEqual('lg');
</script>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';

.p-button-text {
  background-color: transparent;
  border-color: transparent;
  color: $background-color;
  
  &:enabled:hover {
    background-color: transparent;
    border-color: transparent;
    color: #E65C4F;
  }
  
  &:enabled:focus {
    background-color: transparent;
    border-color: transparent;
    color: #E65C4F;
    box-shadow: 0 0 0 0.2rem #e89b91;
  }
}
</style>