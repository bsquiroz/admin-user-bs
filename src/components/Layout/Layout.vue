<script setup lang="ts">
import { computed } from "vue";
import { RouterView, RouterLink, useRoute } from "vue-router";

const route = useRoute();

const stylesButton = computed(() => ({
  "px-4 py-2 bg-blue-500 rounded-lg self-end hover:opacity-80 border-2 border-transparent":
    route.path === "/",
  "px-4 py-2 rounded-lg self-end border-2 border-blue-500": route.path !== "",
}));

const toLink = computed(() =>
  route.path === "/" ? { name: "form" } : { name: "home" }
);

const TextButton = computed(() => (route.path === "/" ? "Add user" : "Back"));
</script>

<template>
  <main class="bg-slate-100 text-black dark:bg-slate-950 dark:text-white">
    <section class="dark:bg-slate-900 h-52 flex">
      <div class="max-w-5xl m-auto p-5 flex-1 flex flex-col gap-5">
        <h1 class="text-4xl font-extrabold">Admin user bs</h1>
        <RouterLink :to="toLink" :class="stylesButton">{{
          TextButton
        }}</RouterLink>
      </div>
    </section>
    <section class="max-w-5xl m-auto p-5 min-h-screen">
      <RouterView />
    </section>
  </main>
</template>
