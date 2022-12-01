<script setup lang="ts">
const { $trpc } = useNuxtApp()

const { data, error, pending } = await useAsyncData(
  'uptime',
  () => $trpc.uptime.query(),
  {
    server: false
  }
)

</script>

<template>
  <p v-if="pending">loading</p>

  <p v-if="error">{{ error.message }}</p>

  <p v-if="data">uptime: {{ data.uptime }}</p>
</template>
