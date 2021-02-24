<template>
  <div class="login">
    <div class="title">
      <div class="line"></div>
      <div class="text">Sign in</div>
      <div class="line"></div>
    </div>
    <div class="subTitle">with your MyReptileScan account</div>
    <form class="flex_column" @submit.prevent="_submit">
      <input
        :value="_username"
        @input="$emit('_username', $event.target.value)"
        name="username"
        type="text"
        placeholder="Your mail or username"
      />
      <input
        :value="_password"
        @input="$emit('_password', $event.target.value)"
        name="password"
        type="password"
        placeholder="Your password"
      />

      <div class="rememberBlc">
        <input type="checkbox" class="checkboxes" name="" id="rememberMe" />
        <label for="rememberMe">Remember me</label>
      </div>
      
      <button class="btn primary">Log in</button>

      <b href="#" @click="p_click">You don't have an account yet click here</b>
    </form>
    <div class="title">
      <div class="line"></div>
      <div class="text">Or</div>
      <div class="line"></div>
    </div>
    <div class="social_LoginBlc">
      <img src="@/assets/images/google_icon.svg" alt="" />
      <div class="line"></div>
      <img src="@/assets/images/fb_icon.svg" alt="" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data: function () {
    return {};
  },
  props: {
    p_click: Function,
    _username: String,
    _password: String,
    _submit: Function,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
b {
  margin-bottom: 10px;
  font-size: 12px;
}

.login {
  //border: 1px solid red;

  .subTitle {
    text-align: center;
    font-size: 12px;
    color: $light_green;

    margin: 10px 0;
  }
  form {
    input {
      margin: 5px 0;
    }
    .rememberBlc {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 260px;
      margin-bottom: 10px;
      label {
        margin-left: 5px;
        color: $grey;

        font-size: 11px;
      }
    }
  }
  .social_LoginBlc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 15px;
    .line {
      height: 2px;
      width: 15px;
      background-color: $light_green;
      margin: 0 10px;
    }
    img {
      cursor: pointer;
      height: 25px;
      width: 25px;
    }
  }
}
</style>