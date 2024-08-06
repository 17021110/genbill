<template>
  <component :is="route.meta?.layout || 'div'">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

</script>
<style scoped></style>