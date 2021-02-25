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
        :_username="user.username"
        @_username="user.username = $event"
        :_password="user.password"
        @_password="user.password = $event"
        :_submit="login"
      />
      <Register
        v-if="!onLoginView"
        :style="{ visibility: seeBloc() }"
        :p_click="toggleLoginView"
        :_email="user.email"
        @_email="user.email = $event"
        :_username="user.username"
        @_username="user.username = $event"
        :_password="user.password"
        @_password="user.password = $event"
        :_confirmPassword="user.confirmPassword"
        @_confirmPassword="user.confirmPassword = $event"
        :_submit="register"
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
  data: () => {
    return {
      loaded: false,
      onLoginView: true,
      user: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  mounted() {
    if (localStorage.getItem("session")) this.$router.push("home");
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
    async login() {
      if (this.user.username && this.user.password) {
        try {
          const response = await this.axios({
            url: `${process.env.VUE_APP_URL}/login`,
            method: "POST",
            headers: this.$headers,
            data: {
              username: this.user.username,
              password: this.user.password,
            },
          });
          localStorage.setItem("session", response.data.sessionToken);
          this.$headers['X-Parse-Session-Token'] = response.data.sessionToken
          console.log(localStorage.getItem('session'))
          this.$router.push("home");
        } catch (e) {
          console.error(e);
        }
      } else {
        alert("invalid informations");
      }
    },
    async register() {
      if (
        this.user.email &&
        this.user.username &&
        this.user.password &&
        this.user.confirmPassword
      ) {
        if (this.user.password === this.user.confirmPassword) {
          try {
            const response = await this.axios({
              url: `${process.env.VUE_APP_URL}/users`,
              method: "POST",
              headers: this.$headers,
              data: this.user
            });
            localStorage.setItem("session", response.data.sessionToken);
            this.login();
          } catch (e) {
            console.error(e);
          }
        } else {
          alert("invalid password");
        }
      } else {
        alert("empty inputs");
      }
    },
    seeBloc() {
      let visibility = this.loaded ? "visible" : "hidden";
      return visibility;
    },
    toggleLoginView() {
      this.onLoginView = !this.onLoginView;
    },
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