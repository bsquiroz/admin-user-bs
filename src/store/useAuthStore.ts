import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";

interface Props {
  id?: string;
  name?: string;
  avatar?: string;
}

const userAuth = ref<Props>();

export function useStoreAuth() {
  async function getSession() {
    try {
      let response;

      const { data } = await supabase.auth.getSession();
      response = data.session;

      supabase.auth.onAuthStateChange((_, _session) => {
        response = _session;
      });

      return {
        id: response?.user.id,
        name: response?.user.user_metadata.full_name as string,
        avatar: response?.user.user_metadata.avatar_url as string,
      };
    } catch (error) {
      return false;
    }
  }

  async function signIn() {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      alert("ha ocurrido un error");
    }
  }

  async function signout() {
    try {
      await supabase.auth.signOut();

      userAuth.value = undefined;
    } catch (error) {
      alert(error);
    }
  }

  return {
    userAuth,
    getSession,
    signIn,
    signout,
  };
}
