<script setup lang="ts">
import { onMounted } from "vue";
import Layout from "./components/Layout/Layout.vue";
import { useStoreAuth } from "./store/useAuthStore";

const { getSession, userAuth } = useStoreAuth();

onMounted(async () => {
  const response = await getSession();

  if (!response) return;

  userAuth.value = response;
});
</script>

<template>
  <Layout />
</template>
