<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{ title: string }>();
</script>

<template>
  <h2>{{ title }}</h2>
</template>
