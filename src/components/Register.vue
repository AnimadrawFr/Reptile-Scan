<template>
  <div class="register">
    <div class="title">
      <div class="line"></div>
      <div class="text">Sign up</div>
      <div class="line"></div>
    </div>
    <div class="subTitle">with your MyReptileScan account</div>
    <form class="flex_column">
      <input
        name="email"
        type="text"
        placeholder="Your mail adresse"
      />
      <input
        name="username"
        type="text"
        placeholder="Choose an username"
      />

      <input
        name="password"
        type="password"
        placeholder="Create a password"
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />

      <button class="btn primary">Register</button>
      <b @click="p_click">Already have an account click here</b>
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
export default {
  props: {
    p_click: Function,
  },
  data: function () {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
b {
  margin-bottom: 10px;
  font-size: 12px;
}

.btn {
  margin-top: 10px;
}

.register {
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
      width: 210px;
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