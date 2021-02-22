<template>
  <div id="health">
    <header :style="{ backgroundImage: `url('${animalPicture}')` }">
      <img
        class="section_head_img"
        src="@/assets/images/health_head.svg"
        alt=""
      />
      <div class="animal_infos">
        <img src="@/assets/images/no_fav_icon.svg" alt="" />
        <ul>
          <li>Snakes,</li>
          <li>Pythons</li>
        </ul>
      </div>
    </header>
    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>Animal name</p>
        <div class="line"></div>
      </div>
      <tabs>
        <tab title="weight">
          <button class="card addAction">Add</button>
          <div class="card">
            <div class="date">
              <h3 class="day">23</h3>
              <p class="month">07/20</p>
            </div>
            <div class="sepp"></div>
            <div class="data">60 cm</div>
          </div>
          <div class="card">
            <div class="date">
              <h3 class="day">23</h3>
              <p class="month">07/20</p>
            </div>
            <div class="sepp"></div>
            <div class="data">60 cm</div>
          </div>
          <div class="card">
            <div class="date">
              <h3 class="day">23</h3>
              <p class="month">07/20</p>
            </div>
            <div class="sepp"></div>
            <div class="data">60 cm</div>
          </div>
        </tab>
        <tab title="size">
          <button class="card addAction">Add</button>
        </tab>
        <tab title="visits">
          <button class="card addAction">Add</button>
        </tab>
        <tab title="treatments">
          <button class="card addAction">Add</button>
          <div class="card">
            <div class="date">
              <h3 class="day">23</h3>
              <p class="month">07/20</p>
            </div>
            <div class="sepp"></div>
            <div class="data">60 cm</div>
          </div>
        </tab>
      </tabs>
    </main>
  </div>
</template>


<script>
import { Tabs, Tab } from "vue-slim-tabs";

export default {
  data: function () {
    return {
      animalPicture: require("@/assets/images/sample_picture.jpg"),
    };
  },
  components: {
    Tabs,
    Tab,
  },
};
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style  lang="scss">
@import "./src/assets/app.scss";

.vue-tablist {
  border: none;
  li {
    background-color: transparent;
    margin: 0 5px;
    border: 1px solid $light_green;
    color: $light_green;
    border-radius: 5px;
  }
}
.vue-tabpanel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .addAction {
    width: 48.5%;
    height: 70px;
    background-color: $light_green;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    color: $white;
  }
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid $light_green;
    max-height: 70px;
    border-radius: 5px;
    width: 48.5%;
    margin: 2px 2px;
    border-left: 5px solid $light_green;
    .date {
      height: 70px;
      color: $dark_green;
      line-height: 0px;
      text-align: center;
      h3 {
        font-size: 25px;
      }
    }
    .sepp {
      width: 2px;
      height: 50px;
      background-color: $light_green;
    }
  }
}
.vue-tab[aria-selected="true"] {
  background-color: $light_green;
  border: 1px solid $light_green;
  color: $white;
}
</style>