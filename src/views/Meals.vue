<template>
  <div id="health">
    <header :style="{ backgroundImage: `url('${animalPicture}')` }">
      <div class="header_content">
        <h3>Meals</h3>
        <span class="weight_info">success</span>
        <span class="size_info">missed</span>
        <vc-donut
          :sections="[
            { value: 60, color: '#CFE6FF', label: 'succes' },
            { value: 40, color: '#CEFF7A', label: 'missed' },
          ]"
          :size="200"
          unit="px"
          :total="100"
          background="rgba(0, 0, 0, 0.8)"
          :thickness="20"
          text="60% succes"
        >
        </vc-donut>

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
      <div class="chooseMonth">
        <div class="prev">
          <img src="@/assets/images/prev.svg" alt="" />
        </div>
        <div class="date">October 2020</div>
        <div class="next">
          <img src="@/assets/images/next.svg" alt="" />
        </div>
      </div>
      <p>Meals of the month :</p>
      <div class="meals">
        <div class="card">
          <div class="date">
            <h3 class="day">23</h3>
            <p class="month">07/20</p>
          </div>
          <div class="sepp"></div>
          <div class="data">Mouse 70g <br/> accepted</div>
        </div>
        <button class="card addAction">Add</button>
      </div>
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
.header_content {
  span {
    position: absolute;
    font-size: 14px;
  }
  span.weight_info {
    margin-top: 29px;
  }
  span.size_info {
    top: 262px;
  }
}
.data {
  font-size: 12px;
}

main p {
  color: $dark_green;
  font-weight: bold;
}
.chooseMonth {
  height: 40px;
  width: 100%;
  background-color: $dark_green;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 10px;
}

.meals {
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
    max-height: 50px;
    border-radius: 5px;
    width: 48.5%;
    margin: 2px 2px;
    border-left: 5px solid $light_green;
    .date {
      height: 50px;
      color: $dark_green;
      line-height: 0px;
      text-align: center;
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
    }
    .sepp {
      width: 2px;
      height: 30px;
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