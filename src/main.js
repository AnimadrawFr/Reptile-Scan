import Vue from "vue";
import App from "./App.vue";
import PreHome from "@/views/PreHome.vue";
import Home from "@/views/Home.vue";
import Single from "@/views/Single.vue";
import Health from "@/views/Health.vue";
import Meals from "@/views/Meals.vue";
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

import Router from "vue-router";

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(Donut)


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
    {
      path: "/health",
      component: Health,
      name: "health",
    },
    {
      path: "/meals",
      component: Meals,
      name: "meals",
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
