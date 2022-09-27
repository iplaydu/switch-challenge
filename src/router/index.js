import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "benefits",
    //component: () => import("../views/BenefitsView.vue"),
    component: HomeView,
  },
  {
    path: "/",
    name: "policies",
    //component: () => import("../views/PoliciesView.vue"),
    component: HomeView,
  },
  {
    path: "/",
    name: "safety",
    //component: () => import("../views/SafetyView.vue"),
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
