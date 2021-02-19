<template>
  <div id="login">
    <div class="logoBlc">
      <img class="logo" src="@/assets/images/logo.png" alt="logo" />
    </div>

    <transition name="slide-fade" mode="out-in">
      <Login
        v-if="onLoginView"
        :style="{ visibility: seeBloc() }"
        :p_click="toggleLoginView"
        class="loginBlc"
      />
      <Register
        v-if="!onLoginView"
        :style="{ visibility: seeBloc() }"
        :p_click="toggleLoginView"
        class="loginBlc"
      />
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";

import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
    Login,
    Register,
  },
  mounted() {
    setTimeout(() => {
      gsap.to(".logo", 1, {
        //y: -130,
        width: 70,
        onStart: () => {
          gsap.to(".logoBlc", 1, {
            height: "30vh",
          });
        },
        onComplete: () => {
          this.loaded = true;
        },
      });
    }, 1000);
  },
  methods: {
    seeBloc() {
      let visibility = this.loaded ? "visible" : "hidden";
      return visibility;
    },
    toggleLoginView() {
      this.onLoginView = !this.onLoginView;
    },
  },
  data: () => {
    return {
      loaded: false,
      onLoginView: true,
    };
  },
};
</script>

<style lang="scss">
@import "./src/assets/app.scss";

#login {
  height: 100vh;
  .logoBlc {
    padding: 0 auto;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //border: 1px solid green;
    height: 80vh;
    img.logo {
      position: absolute;
      width: 150px;
      margin: 100px 0;
    }
  }
  .loginBlc {
    margin-top: 10px;
  }
}
</style>