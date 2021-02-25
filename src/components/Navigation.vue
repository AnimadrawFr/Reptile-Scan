<template>
  <div id="navigation">
    <div class="left_menu">
      <router-link to="home">
        <img src="@/assets/images/home_icon.svg" alt="" />
      </router-link>
      
      <img @click="sideBarEvent" src="@/assets/images/profil_icon.svg" alt="" />
    </div>
    <div class="middle_menu">
      <img src="@/assets/images/add_icon.svg" alt="" />
    </div>
    <div class="right_menu">
      <img src="@/assets/images/stats_icon.svg" alt="" />
      <img src="@/assets/images/scan_icon.svg" alt="" />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    sideBarEvent: Function
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/app.scss";

#navigation {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: $dark_green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  .left_menu,
  .right_menu {
    // border: 1px solid red;
    width: 35%;
    display: flex;
    justify-content: space-around;
    img {
      width: 25px;
      cursor: pointer;
    }
  }
  .middle_menu {
    background-color: $light_green;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $white;
    margin-top: -30px;
    cursor: pointer;
  }
}
</style>