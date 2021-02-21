import Vue from "vue";
import App from "./App.vue";
import PreHome from "@/views/PreHome.vue";
import Home from "@/views/Home.vue";
import Single from "@/views/Single.vue";
import Router from "vue-router";

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.baseUrl,
  routes: [
    {
      path: "/",
      component: PreHome,
      name: "preHome",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
      path: "/single",
      component: Single,
      name: "single",
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
