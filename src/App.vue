<script setup lang="ts">
  import AppHeader from './ui/components/app/AppHeader.vue';
  import AppNav from './ui/components/app/AppNav.vue';
  import AppMain from './ui/components/app/AppMain.vue';
  import AppFooter from './ui/components/app/AppFooter.vue';
</script>
<template>
  <AppHeader>
    <AppNav />
  </AppHeader>
  <AppMain />
  <AppFooter />
</template>
<style scoped />
