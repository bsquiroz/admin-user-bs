import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    props: {
      title: "This is a home",
    },
    component: () => import("../view/Home/HomeView.vue"),
  },
  {
    path: "/form",
    name: "form",
    props: {
      title: "This is a form",
    },
    component: () => import("../view/Form/FormView.vue"),
  },
];

export const routerAdmin = createRouter({
  history: createWebHistory(),
  routes,
});
