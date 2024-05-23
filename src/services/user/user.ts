import { supabase } from "../../lib/supabaseClient";

export class UserService {
  static async getUsers() {
    return await supabase.from("users").select().returns<User[]>();
  }
}
