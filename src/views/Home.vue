<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>
<style scoped>

</style>
