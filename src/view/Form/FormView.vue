<script setup lang="ts">
import { defineProps } from "vue";
import { useAdminStore } from "../../store/useAdminStore";
import { useRouter } from "vue-router";

const { createUser, user, updateUser, deleteUser } = useAdminStore();
const router = useRouter();

defineProps<{ title: string }>();

const handlerSubmit = async (values: { name: string; email: string }) => {
  const response = user.value
    ? await updateUser({ ...user.value!, ...values })
    : await createUser(values);

  if (response) return router.push({ name: "home" });

  alert("Algo ha ido mal");
};

const handleDelete = async (userId: string) => {
  const response = await deleteUser(userId);

  if (response) return router.push({ name: "home" });
};
</script>

<template>
  <h2 class="text-xl font-bold">{{ title }}</h2>

  <FormKit
    type="form"
    :submit-label="user ? 'Editar usuaio' : 'Crear usuario'"
    @submit="handlerSubmit"
    :value="user as any"
  >
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

    <FormKit
      v-if="user"
      type="button"
      label="Delete"
      v-on:click="handleDelete(user.id.toString())"
    />
  </FormKit>
</template>
