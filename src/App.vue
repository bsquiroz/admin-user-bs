<script setup lang="ts">
import Layout from "./components/Layout/Layout.vue";

import { ref, onMounted } from "vue";
import { supabase } from "./lib/supabaseClient";

const countries = ref([]);

async function getCountries() {
  const data = await supabase.from("users").select();
  console.log(data);
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <Layout>
    <h2 class="color--primary">Hola mundo</h2>
  </Layout>
</template>
