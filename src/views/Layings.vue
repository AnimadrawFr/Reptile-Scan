<template>
  <div id="health">
    <HeadSection 
      :_picture="animalPicture"
      _sectionTitle="Layings"
      :_sectionIllustration="require('@/assets/images/layings_head_illustration.svg')"
      _informationsClass="layings_infos"
      _content="3 Layings"
      :_showHead_img="true"
    />

    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>Animal name</p>
        <div class="line"></div>
      </div>

      <p>List of layings since registration</p>
      <div class="layings">
        <ActionsCards
          _day="22"
          _month="07"
          _fullYear="20"
          _content="lorem ipsum dolor sit amet"
        />
        <button class="addAction">Add laying</button>
      </div>
    </main>
  </div>
</template>


<script>
import { Tabs, Tab } from "vue-slim-tabs";
import ActionsCards from "@/components/ActionsCards";
import Categories from "@/components/Categories";
import HeadSection from "@/components/HeadSection";


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
  margin: 0 10px;
  font-size: 14px;
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

.layings {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  .addAction {
    width: 50%;
    height: 50px;
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
    justify-content: flex-start;
    border: 1px solid $light_green;
    max-height: 50px;
    border-radius: 5px;
    width: 100%;
    margin: 2px 2px;
    border-left: 5px solid $light_green;
    .date {
      height: 50px;
      color: $dark_green;
      line-height: 0px;
      text-align: center;
      margin: 0 10px;
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

.layings_infos {
  text-align: center;
}
</style>