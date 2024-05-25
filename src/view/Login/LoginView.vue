<script setup lang="ts">
import { defineProps } from "vue";
import { useStoreAuth } from "../../store/useAuthStore";

defineProps<{ title: string }>();

const { signIn } = useStoreAuth();
</script>

<template>
  <h2>{{ title }}</h2>

  <button class="p-4 bg-blue-500 rounded-lg font-extrabold" @click="signIn">
    Inicia con google
  </button>
</template>
