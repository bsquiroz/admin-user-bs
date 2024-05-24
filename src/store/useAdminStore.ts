import { ref } from "vue";
import { UserService } from "../services/user/user";

const users = ref<User[]>();
const user = ref<User>();

export function useAdminStore() {
  async function getUsers() {
    user.value = undefined;

    const response = await UserService.getUsers();

    if (response.error) return;

    users.value = response.data;
  }

  async function getUser(userId: string) {
    const response = await UserService.getUser(userId);

    if (response.error) return;

    user.value = response.data[0];

    return true;
  }

  async function createUser(user: {
    name: string;
    email: string;
    state?: boolean;
  }) {
    user.state = false;

    const response = await UserService.createUser(user);

    if (response.error) return;

    return true;
  }

  async function updateUser(user: User) {
    const response = await UserService.updateUser(user);

    if (response.error) return;

    return true;
  }

  async function updateUserState(user: User) {
    user.state = !user.state;
    const response = await UserService.updateUser(user);

    if (response.error) return;

    return true;
  }

  async function deleteUser(userId: string) {
    const response = await UserService.deleteUser(userId);

    if (response.error) return;

    return true;
  }

  return {
    users,
    user,
    getUsers,
    getUser,
    createUser,
    updateUser,
    updateUserState,
    deleteUser,
  };
}
