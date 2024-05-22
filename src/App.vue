<script setup lang="ts">
import Layout from "./components/Layout/Layout.vue";

import { onMounted } from "vue";
import { supabase } from "./lib/supabaseClient";

async function getUsers() {
  const data = await supabase.from("users").select();
  console.log(data);
}

onMounted(() => {
  getUsers();
});
</script>

<template>
  <Layout>
    <h2 class="color--primary">Hola mundo</h2>
  </Layout>
</template>
