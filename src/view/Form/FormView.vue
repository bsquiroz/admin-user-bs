<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{ title: string }>();
</script>

<template>
  <h2 class="text-xl font-bold">{{ title }}</h2>
</template>
