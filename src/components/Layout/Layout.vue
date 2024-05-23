<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main class="bg-slate-100 text-black dark:bg-slate-950 dark:text-white">
    <section class="max-w-5xl m-auto p-5 min-h-screen">
      <RouterView />
    </section>
  </main>
</template>
