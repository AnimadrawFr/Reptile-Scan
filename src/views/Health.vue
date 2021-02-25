<template>
  <div id="health">
    <HeadSection 
      :_picture="animalPicture"
      _sectionTitle="Health"
      :_sectionIllustration="require('@/assets/images/health_head.svg')"
      _informationsClass="health_infos"
      _content="[health informations]"
      :_showHead_img="true"
    />

    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>Animal name</p>
        <div class="line"></div>
      </div>
      <tabs>
        <tab title="weight">
          <ActionsCards _day="22" _month="07" _fullYear="20" _content="260 g" />
          <ActionsCards _day="30" _month="07" _fullYear="20" _content="280 g" />
          <button class="card addAction">Add weight</button>
        </tab>
        <tab title="size">
          <ActionsCards _day="22" _month="07" _fullYear="20" _content="80 cm" />
          <ActionsCards _day="30" _month="07" _fullYear="20" _content="82 cm" />
          <button class="card addAction">Add size</button>
        </tab>
        <tab title="visits">
          <ActionsCards _day="22" _month="07" _fullYear="20" _content="Lorem ipsum" />
          <ActionsCards _day="30" _month="07" _fullYear="20" _content="Lorem ipsum" />
          <button class="card addAction">Add visit</button>
        </tab>
        <tab title="treatments">
          <button class="card addAction">Add treatment</button>
        </tab>
      </tabs>
    </main>
  </div>
</template>


<script>
import { Tabs, Tab } from "vue-slim-tabs";
import Categories from '@/components/Categories'
import ActionsCards from '@/components/ActionsCards'
import HeadSection from '@/components/HeadSection'

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
<style  lang="scss" scoped>
@import "./src/assets/app.scss";
.header_content {
  span {
    position: absolute;
    font-size: 14px;
  }
  span.weight_info {
    top: 140px;
    right: 56px;
  }
  span.size_info {
    bottom: 137px;
    left: 56px;
  }
}

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