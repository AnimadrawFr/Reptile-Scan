<template>
  <div id="health">

    <HeadSection 
      :_picture="animalPicture"
      _sectionTitle="Meals"
      _informationsClass="health_infos"
      _content="[health informations]"
      :_showDonut="true"
      :_showHead_img="false"
    />

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
        <ActionsCards _day="22" _month="07" _fullYear="20" _content="Mouse 30g" />
        <ActionsCards _day="19" _month="07" _fullYear="20" _content="Mouse 10g" />

        <button class="card addAction">Add</button>
      </div>
    </main>
  </div>
</template>


<script>
import { Tabs, Tab } from "vue-slim-tabs";
import Categories from "@/components/Categories";
import ActionsCards from "@/components/ActionsCards";
import HeadSection from "@/components/HeadSection"

export default {
  data: function () {
    return {
      animalPicture: require("@/assets/images/sample_picture.jpg"),
    };
  },
  components: {
    Tabs,
    Tab,
    Categories,
    ActionsCards,
    HeadSection
  },
  async mounted() {
    try {
      const response = await this.axios({
        url: `${process.env.VUE_APP_URL}/classes/Meal`,
        method: 'GET',
        headers: this.$headers
      })

      console.log(response)
    } catch(e) {
      console.error(e)
    }
  }
};
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style  lang="scss">
@import "./src/assets/app.scss";

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
}
.vue-tab[aria-selected="true"] {
  background-color: $light_green;
  border: 1px solid $light_green;
  color: $white;
}
</style>