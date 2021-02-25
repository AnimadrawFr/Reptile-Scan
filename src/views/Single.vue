<template>
  <div id="single" class="single_detail">
    <header :style="{ backgroundImage: `url('${animal.picture.url}')` }">
      <div class="header_content">
        <div
          class="animal_picture"
          :style="{ backgroundImage: `url('${animal.picture.url}')` }"
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
          v-show="animal.sexe != 1"
          disabled
          to="/layings"
          tag="img"
          :src="require('@/assets/images/laying_icon.svg')"
          class="icon layings"
        ></router-link>
        <img v-show="animal.sexe != 0" class="icon layings isMale" :src="require('@/assets/images/laying_icon.svg')" alt="">
        <router-link
          :to="`/meals?animalId=${animal.objectId}`"
          tag="img"
          :src="require('@/assets/images/meals_icon.svg')"
          class="icon meals"
        ></router-link>

        <div class="animal_infos">
          <img
            :src="
              animal.favorite
                ? require('@/assets/images/fav_icon.svg')
                : require('@/assets/images/no_fav_icon.svg')
            "
            @click="manageFavorite"
            alt=""
          />
          <ul>
            <li>Category: {{ category }}</li>
          </ul>
        </div>
      </div>
    </header>
    <main class="flex-column">
      <div class="name">
        <div class="line"></div>
        <p>{{ animal.name }}</p>
        <div class="line"></div>
      </div>
      <p class="birth_date">
        Birthday :
        {{
          `${new Date(animal.birthday.iso).getDate()}/${
            new Date(animal.birthday.iso).getMonth() + 1
          }/${new Date(animal.birthday.iso).getFullYear()}`
        }}
      </p>
      <div class="global_information">
        <p>{{ animal.species }}</p>
        <p>{{ animal.morph }}</p>
        <p>{{ animal.sexe ? "Male" : "Female" }}</p>
        <p class="description">
          {{ animal.description }}
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
      urlParam: new URLSearchParams(window.location.search),
      animal: {
        picture: {
          url: "",
        },
        birthday: {
          iso: "",
        },
      },
      category: "",
    };
  },
  methods: {
    manageFavorite() {
      this.axios({
        url: `${process.env.VUE_APP_URL}/classes/Animal/${this.urlParam.get(
          "animalId"
        )}`,
        method: "PUT",
        headers: this.$headers,
        data: {
          favorite: !this.animal.favorite,
        },
      }).then((res) => {
        this.animal.favorite = !this.animal.favorite
      });
    },
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
        url: `${process.env.VUE_APP_URL}/classes/Categorie?where={"objectId": "${this.animal.categorie_id.objectId}" }`,
        method: "GET",
        headers: this.$headers,
      });
      this.category = response.data.results[0].title;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>