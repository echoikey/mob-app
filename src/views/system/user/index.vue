<template>
</template>
<script setup lang="ts">
import { fetchUsers } from '@/api/system/user';

const getData = async () => {
  const res = await fetchUsers();
  console.log(res, res);
};
getData();

</script>
<style scoped>
</style>
