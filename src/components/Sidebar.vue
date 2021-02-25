<template>
  <div id="sidebar">
    <img
      @click="sideBarEvent"
      class="back"
      src="@/assets/images/back_icon.svg"
      alt=""
    />
    <div class="sidebar_top">
      <div class="profil_picture">
        <img class="avatar" :src="user.avatar.url" alt="" />
        <div class="edit_avatar">
          <img src="@/assets/images/edit_icon.svg" alt="" />
        </div>
      </div>
      <div class="user_informations">
        <h3>{{ user.username }}</h3>
        <p>{{ user.email }}</p>
        <p>ID - {{ user.objectId }}</p>
      </div>
    </div>
    <div class="sidebar_bottom">
      <b @click="disconnect">Disconnect</b>
      <a href="#">About us</a>
      <a href="#">Give your opinion</a>
      <a href="#">Contact us</a>
      <div class="sidebar_mention">© MyReptileScan All rights reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: { avatar: { url: "" }},
      
    };
  },
  props: {
    sideBarEvent: Function,
  },
  methods: {
    disconnect() {
      localStorage.removeItem("session");
      this.$router.push("/");
    },
  },
  async mounted() {
    try {
      const response = await this.axios({
        url: `${process.env.VUE_APP_URL}/users/me`,
        method: "GET",
        headers: this.$headers,
      });

      this.user = response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";

#sidebar {
  .back {
    position: absolute;
    top: 15px;
    left: 15px;
    cursor: pointer;
  }
  z-index: 2000;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: -100%;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  //border: 1px solid red;
  .sidebar_top {
    .profil_picture {
      // border: 1px solid red;
      text-align: center;
      .avatar {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        object-fit: cover;
      }
      .edit_avatar {
        position: relative;
        z-index: 10;
        margin: -25px 0 0 25px;
        background-color: $light_green;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        object-fit: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 12px;
          width: 12px;
        }
      }
    }
    .user_informations {
      text-align: center;
      color: $light_green;

      p {
        font-size: 14px;
      }
    }
  }
  .sidebar_bottom {
    // border: 1px solid red;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    a {
      font-size: 14px;
      margin: 2px 0;
    }
    b {
      font-size: 17px;
    }
    .sidebar_mention {
      margin: 20px 0;
      color: $grey;
      text-align: center;

      font-size: 12px;
      width: 70%;
    }
  }
}

b,
a {
  text-decoration: none;
  color: $light_green;
  font-size: 10px;
}
</style>