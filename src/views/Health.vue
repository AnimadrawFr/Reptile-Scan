<template>
  <div id="health">
    <header :style="{ backgroundImage: `url('${animalPicture}')` }">
      <img class="section_head_img" src="@/assets/images/health_head.svg" alt="" />
    </header>
    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>Animal name</p>
        <div class="line"></div>
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