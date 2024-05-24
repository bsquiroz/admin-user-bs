<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{ title: string }>();

const handlerSubmit = (values: { name: string; email: string }) => {
  console.log(values);
};
</script>

<template>
  <h2 class="text-xl font-bold">{{ title }}</h2>

  <FormKit type="form" @submit="handlerSubmit">
    <FormKit
      type="text"
      name="name"
      id="name"
      label="Name"
      help="Your full name"
      placeholder="“Jon Doe”"
      validation="required"
    />

    <FormKit
      type="email"
      name="email"
      id="email"
      label="Email"
      help="Your email"
      placeholder="“JonDoe@gmail.com”"
      validation="required"
    />
  </FormKit>
</template>
