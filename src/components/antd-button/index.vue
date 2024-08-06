<template>
  <a-button :type="type" :size="size" :disabled="disabled" :loading="loading" :icon="icon" :ghost="ghost">
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import VueTypes from "vue-types";

const props = defineProps({
  type: VueTypes.string.def("default"),
  disabled: VueTypes.bool.def(false),
  loading: VueTypes.bool.def(false),
  size: VueTypes.string.def("medium"),
  icon: VueTypes.bool.def(false),
  ghost: VueTypes.bool.def(false),
});
</script>
