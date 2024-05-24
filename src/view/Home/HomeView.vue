<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { useAdminStore } from "../../store/useAdminStore";
import { useRouter } from "vue-router";

defineProps<{ title: string }>();

const router = useRouter();
const { users, getUsers, getUser, updateUserState } = useAdminStore();

const handleGetUser = async (userId: string) => {
  const response = await getUser(userId);

  if (!response) return;

  router.push({ name: "form" });
};

const handleChangeState = async (userId: string) => {
  const user = users.value?.find((user) => user.id === +userId);
  const response = await updateUserState(user!);

  if (!response) return;
};

onMounted(() => getUsers());
</script>

<template>
  <h2 class="text-xl font-bold">{{ title }}</h2>

  <table class="table-auto w-full mt-4">
    <thead>
      <tr class="bg-slate-800">
        <th class="p-3 text-left">email</th>
        <th class="p-3 text-left">info</th>
        <th class="p-3 text-left">state</th>
        <th class="p-3 text-left">actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id" class="hover:bg-slate-900">
        <td class="whitespace-nowrap p-3">
          <p class="font-medium text-gray-300">{{ user.email }}</p>
        </td>
        <td class="whitespace-nowrap p-3">
          <p class="text-gray-400 font-bold">{{ user.name }}</p>
          <p class="text-gray-300">{{ user.created_at }}</p>
        </td>
        <td class="whitespace-nowrap p-3">
          <p class="flex gap-2 items-center">
            <span
              class="inline-block w-2 h-2 rounded-full"
              :class="{
                'bg-red-500': !user.state,
                'bg-green-500': user.state,
              }"
            ></span>
            <span
              @click="handleChangeState(user.id.toString())"
              class="cursor-pointer"
              :class="{
                ' hover:text-red-500': !user.state,
                ' hover:text-green-500': user.state,
              }"
              >{{ user.state ? "Active" : "Inactive" }}</span
            >
          </p>
        </td>
        <td class="whitespace-nowrap p-3">
          <button @click="handleGetUser(user.id.toString())">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
