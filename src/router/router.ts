import { createWebHistory, createRouter } from "vue-router";
import { useStoreAuth } from "../store/useAuthStore";

const { getSession } = useStoreAuth();

const routes = [
  {
    path: "/",
    name: "home",
    props: {
      title: "User List",
    },
    component: () => import("../view/Home/HomeView.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/form",
    name: "form",
    props: {
      title: "This is a form",
    },
    component: () => import("../view/Form/FormView.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    props: {
      title: "This is a login",
    },
    component: () => import("../view/Login/LoginView.vue"),
    meta: {
      requireAuth: false,
    },
  },
];

export const routerAdmin = createRouter({
  history: createWebHistory(),
  routes,
});

routerAdmin.beforeEach(async (to, _, next) => {
  const needAuth = to.meta.requireAuth;
  const session = await getSession();

  if (!session) return;

  if (needAuth && !session.id) {
    return next({ name: "login" });
  }

  if (!needAuth && session.id) {
    return next({ name: "home" });
  }

  return next();
});
