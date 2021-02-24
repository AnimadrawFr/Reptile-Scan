<template>
  <div id="single" class="single_detail">
    <header :style="{ backgroundImage: `url('${animalPicture}')` }">
      <div class="header_content">
        <div
          class="animal_picture"
          :style="{ backgroundImage: `url('${animalPicture}')` }"
        ></div>
        <router-link
          to="/health"
          tag="img"
          :src="require('@/assets/images/health_icon.svg')"
          class="icon health"
        ></router-link>
        <router-link
          to="/moults"
          tag="img"
          :src="require('@/assets/images/moults_icon.svg')"
          class="icon moults"
        ></router-link>
        <router-link
          to="/habitat"
          tag="img"
          :src="require('@/assets/images/habitat_icon.svg')"
          class="icon habitat"
        ></router-link>
        <router-link
          to="/couplings"
          tag="img"
          :src="require('@/assets/images/coupling_icon.svg')"
          class="icon couplings"
        ></router-link>
        <router-link
          to="/layings"
          tag="img"
          :src="require('@/assets/images/laying_icon.svg')"
          class="icon layings"
        ></router-link>
        <router-link
          to="/meals"
          tag="img"
          :src="require('@/assets/images/meals_icon.svg')"
          class="icon meals"
        ></router-link>

        <div class="animal_infos">
          <img src="@/assets/images/no_fav_icon.svg" alt="" />
          <ul>
            <li>Snakes,</li>
            <li>Pythons</li>
          </ul>
        </div>
      </div>
    </header>
    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>Animal name</p>
        <div class="line"></div>
      </div>
      <p class="birth_date">22/01/2019</p>
      <div class="global_information">
        <p>Ball python</p>
        <p>Spider</p>
        <p>Male</p>
        <p class="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.
        </p>
        <div class="last_action">
          <p class="title">Last action :</p>
          <p>18/09/2020 - Food - 120g rat - accepted</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      animalPicture: require("@/assets/images/sample_picture.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>