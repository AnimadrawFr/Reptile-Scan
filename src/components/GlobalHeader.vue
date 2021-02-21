<template>
  <div class="header" :class="(this.$route.name !== 'preHome' && this.$route.name !== 'home') ? 'white' : ''" >
    <div class="burgerMenu">
      <img
        @click="sideBarEvent"
        src="@/assets/images/burger_icon.svg"
        alt=""
        v-if="this.$route.name !== 'preHome'"
      />
    </div>
    <div class="langsChoice">
      <transition name="slide-fade">
        <ul class="langs" v-if="langs_showed">
          <li>FR</li>
          <li>EN</li>
        </ul>
      </transition>

      <img
        src="@/assets/images/lang_icon.svg"
        alt=""
        @click="langs_showed = !langs_showed"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      langs_showed: false,
      isWhite: false
    };
  },
  props: {
    sideBarEvent: Function,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";

.header {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.white {
    position: absolute;
    filter: brightness(100);
  }
  .burgerMenu {
    img {
      height: 30px;
      width: 30px;
    }
  }
  .langsChoice {
    display: flex;
    align-items: center;
    justify-content: center;
    .langs {
      margin: 0;
      li {
        display: inline-block;
        font-family: sans-serif;
        color: $light_green;
        margin: 0 5px;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
  img {
    margin: 10px 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
}
</style>