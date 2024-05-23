import { ref } from "vue";
import { UserService } from "../services/user/user";

const users = ref<User[]>();

export function useAdminStore() {
  async function getUsers() {
    const response = await UserService.getUsers();

    if (response.error) {
      return;
    }

    users.value = response.data;
  }

  return {
    users,
    getUsers,
  };
}
