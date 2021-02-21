<template>
  <div id="single" class="single_detail">
    <header :style="{ backgroundImage: `url('${animalPicture}')` }">
      <div
        class="animal_picture"
        :style="{ backgroundImage: `url('${animalPicture}')` }"
      ></div>
      <img class="icon health" src="@/assets/images/health_icon.svg" alt="">
      <img class="icon moults" src="@/assets/images/moults_icon.svg" alt="">
      <img class="icon habitat" src="@/assets/images/habitat_icon.svg" alt="">
      <img class="icon couplings" src="@/assets/images/coupling_icon.svg" alt="">
      <img class="icon layings" src="@/assets/images/laying_icon.svg" alt="">
      <img class="icon meals" src="@/assets/images/meals_icon.svg" alt="">
    
    </header>
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

<style lang="scss">
</style>