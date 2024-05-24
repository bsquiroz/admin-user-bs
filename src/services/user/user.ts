import { supabase } from "../../lib/supabaseClient";

export class UserService {
  static async getUsers() {
    return await supabase.from("users").select().returns<User[]>();
  }

  static async getUser(userId: string) {
    return await supabase
      .from("users")
      .select()
      .eq("id", userId)
      .returns<User[]>();
  }

  static async createUser(user: any) {
    return await supabase.from("users").insert(user);
  }

  static async updateUser(user: User) {
    return await supabase.from("users").update(user).eq("id", user.id);
  }

  static async deleteUser(userId: string) {
    return await supabase.from("users").delete().eq("id", userId);
  }
}
