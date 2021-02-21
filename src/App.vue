<template>
  <div id="app">
    <Sidebar v-if="this.$route.name !== 'preHome'" :sideBarEvent="closeSideBar"/>
    <GlobalHeader :sideBarEvent="openSideBar" />
    <router-view />
    <Navigation v-if="this.$route.name !== 'preHome'" :sideBarEvent="openSideBar"/>
  </div>
</template>

<script>
import gsap from "gsap";

import Sidebar from "@/components/Sidebar";
import GlobalHeader from "@/components/GlobalHeader";
import Navigation from "@/components/Navigation";

export default {
  components: {
    Sidebar,
    GlobalHeader,
    Navigation,
  },

  methods: {
    openSideBar() {
      gsap.to("#sidebar", 0.5, {
        left: 0,
      });
    },
    closeSideBar() {
      gsap.to("#sidebar", 0.5, {
        left: '-100%',
      });
    },
  },
};
</script>