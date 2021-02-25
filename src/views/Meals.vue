<template>
  <div id="health">
    <HeadSection
      :_picture="animalPicture"
      _sectionTitle="Meals"
      _informationsClass="health_infos"
      _content=""
      :_showDonut="true"
      :_showHead_img="false"
      :_sections="[
        { value: succes, color: '#CFE6FF', label: 'succes' },
        { value: missed, color: '#CEFF7A', label: 'missed' },
      ]"
      :_result="`${meals.length > 0 ? succes + '% succes' : 'No meals'}`"
    />

    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>{{ animal.name }}</p>
        <div class="line"></div>
      </div>

      <month-picker-input
        :default-month="new Date().getMonth() + 1"
        :default-year="new Date().getFullYear()"
        :max-date="new Date()"
        :min-date="new Date(animal.createdAt)"
        @change="showDate"
        input-pre-filled
      />
      <p>Meals of the month :</p>
      <div class="meals">
        <ActionsCards
          v-for="(item, i) in meals"
          :key="i"
          :_success="item.success ? '' : 'red'"
          :_day="new Date(item.date.iso).getDate()"
          :_month="new Date(item.date.iso).getMonth() + 1"
          :_fullYear="new Date(item.date.iso).getFullYear()"
          :_content="`${item.type} ${item.weight} g`"
          v-show="
            new Date(item.date.iso).getMonth() + 1 === date.monthIndex &&
            new Date(item.date.iso).getFullYear() === date.year
          "
        />

        <button class="card addAction">Add</button>
      </div>
    </main>
  </div>
</template>


<script>
import { Tabs, Tab } from "vue-slim-tabs";
import Categories from "@/components/Categories";
import ActionsCards from "@/components/ActionsCards";
import HeadSection from "@/components/HeadSection";
import { MonthPickerInput } from "vue-month-picker";

export default {
  data: function () {
    return {
      animalPicture: require("@/assets/images/sample_picture.jpg"),
      urlParam: new URLSearchParams(window.location.search),
      meals: [],
      succes: 0,
      missed: 0,
      animal: {
        picture: {
          url: "",
        },
      },
      date: {
        from: null,
        monthIndex: new Date().getMonth() + 1,
        to: null,
        month: null,
        year: null,
      },
    };
  },
  methods: {
    showDate(date) {
      this.date = date;
    },
  },
  components: {
    Tabs,
    Tab,
    Categories,
    ActionsCards,
    HeadSection,
    MonthPickerInput,
  },
  async mounted() {
    try {
      const response = await this.axios({
        url: `${process.env.VUE_APP_URL}/classes/Animal/${this.urlParam.get(
          "animalId"
        )}`,
        method: "GET",
        headers: this.$headers,
      });

      this.animal = response.data;
    } catch (e) {
      console.error(e);
    }

    try {
      const response = await this.axios({
        url: `${
          process.env.VUE_APP_URL
        }/classes/Meal?where={"animal_id": { "__type": "Pointer", "className": "Animal", "objectId": "${this.urlParam.get(
          "animalId"
        )}" } }`,
        method: "GET",
        headers: this.$headers,
      });
      this.meals = response.data.results;
    } catch (e) {
      console.error(e);
    }

    this.succes = (this.meals.filter((e) => e.success).length / this.meals.length) * 100
    this.missed = 100 - this.succes

  },
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
  margin-bottom: 150px;
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

.month-picker-input-container[data-v-201d773d] {
  margin-top: 15px;
  width: 100%;

  .month-picker-input {
    width: 100%;
    background-color: $dark_green;
    border-radius: 0;
    height: 35px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    text-align: center;
    bottom: 100px;
  }
  .month-picker__container {
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: $white;
    margin-bottom: 80px;
  }
}
</style>