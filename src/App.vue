<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavigation from "@/components/MainNavigation/MainNavigation.vue";
</script>

<template>
  <header>
    <MainNavigation />
  </header>
  <RouterView />
</template>

<style scoped></style>
