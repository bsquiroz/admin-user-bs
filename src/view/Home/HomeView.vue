<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { useAdminStore } from "../../store/useAdminStore";

defineProps<{ title: string }>();

const { users, getUsers } = useAdminStore();

onMounted(() => getUsers());
</script>

<template>
  <h2>{{ title }}</h2>

  <pre>{{ users }}</pre>
</template>
