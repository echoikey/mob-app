<template>
  <router-view />
</template>

<script setup lang="ts" name="Dashboard">
import { useThemeStore } from './store/theme';

const theme = useThemeStore();
theme.initTheme();
</script>

<style scoped>
@import './assets/css/main.css';
</style>
