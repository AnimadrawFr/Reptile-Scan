<template>
  <div class="home flex_column">
    <form class="search flex_column" action="">
      <input
        type="search"
        placeholder="Search an animal"
        v-model="searchString"
      />
    </form>

    <div class="categoriesList">
      <img src="@/assets/images/options.svg" alt="" />
      <div class="list">
        <div
          class="puce"
          :class="selectedCat === 'All' ? 'selected' : ''"
          @click="selectedCat = 'All'"
        >
          All
        </div>
        <div
          v-for="(item, i) in categories"
          :key="i"
          class="puce"
          @click="selectedCat = item.objectId"
          :class="selectedCat === item.objectId ? 'selected' : ''"
        >
          {{ item.title }}
        </div>
      </div>
    </div>

    <div class="heading">
      <h1>My animals</h1>
      <div class="sortButtons">
        <button @click="swap('container-list', 'container-quadri')">
          <img
            ref="swapIcon"
            src="@/assets/images/sort_quadri_icon.svg"
            alt=""
          />
        </button>
      </div>
    </div>

    <div ref="container" class="container container-list">
      <div class="home_card" v-for="(item, i) in filteredData" :key="i" v-show="selectedCat === item.categorie_id.objectId || selectedCat === 'All'">
        <router-link :to="`/single?animalId=${item.objectId}`">
          <img class="home_card_content" :src="item.picture.url" alt="" />
        </router-link>
        <div class="home_card_bottom">
          <p>{{ item.name }}</p>
          <img
            :src="
              item.favorite
                ? require('@/assets/images/green_fav_icon.svg')
                : require('@/assets/images/green_no_fav_icon.svg')
            "
            @click="manageFavorite(item)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data: function () {
    return {
      animals: [],
      selected: [],
      categories: [],
      selectedCat: "All",
      cards: document.querySelectorAll(".home_cards"),
      quadriIcon: require("@/assets/images/sort_quadri_icon.svg"),
      listIcon: require("@/assets/images/sort_list_icon.svg"),
      searchString: "",
    };
  },
  created() {
    if (!localStorage.getItem("session")) this.$router.push("/");
  },
  computed: {
    filteredData: function () {
      var search_array = this.animals,
        searchString = this.searchString;

      if (!searchString) {
        return search_array;
      }

      searchString = searchString.trim().toLowerCase();

      search_array = search_array.filter((item) => {
        if (item.name.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      });

      // Return an array with the filtered data.
      return search_array;
    },
  },
  async mounted() {
    try {
      const response = await this.axios({
        url: `${process.env.VUE_APP_URL}/users/me`,
        method: "GET",
        headers: this.$headers,
      });
    } catch (e) {
      localStorage.removeItem("session");
      this.$router.push("/");
      console.error(e);
    }

    // set current user animals
    try {
      const response = await this.axios({
        url: `${process.env.VUE_APP_URL}/classes/Animal`,
        method: "GET",
        headers: this.$headers,
      });
      this.animals = response.data.results;
      console.log(this.animals);
    } catch (e) {
      console.error(e);
    }

    try {
      const response = await this.axios({
        url: `${process.env.VUE_APP_URL}/classes/Categorie`,
        method: "GET",
        headers: this.$headers,
      });
      this.categories = response.data.results;
      console.log(this.categories);
      console.log(this.animals);
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    manageFavorite(item) {
      this.axios({
        url: `${process.env.VUE_APP_URL}/classes/Animal/${item.objectId}`,
        method: "PUT",
        headers: this.$headers,
        data: {
          favorite: !item.favorite,
        },
      }).then((res) => {
        item.favorite = !item.favorite;
      });
    },
    swap(oldClass, newClass) {
      const container = this.$refs.container.classList;
      if (container.contains(oldClass)) {
        container.remove(oldClass);
        container.add(newClass);
        this.$refs.swapIcon.src = this.listIcon;
      } else {
        container.remove(newClass);
        container.add(oldClass);
        this.$refs.swapIcon.src = this.quadriIcon;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/app.scss";

.search {
  width: 100%;
  margin-bottom: 15px;
  input[type="search"] {
    width: 90%;
    height: 35px;
    padding: 5px 10px;
    color: $grey;
    border-radius: 20px;
    border: 1px solid $grey;
    &::placeholder {
      color: $grey;
    }
  }
}

.categoriesList {
  display: flex;
  align-items: center;
  width: 90%;
  img {
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
  .list {
    overflow-x: auto;
    position: relative;
    margin: 0 5px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &::-webkit-scrollbar {
      display: none;
    }
    .puce {
      position: relative;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      font-size: 13px;
      border-radius: 5px;

      color: $light_green;
      border: 1.5px solid $light_green;
      margin: 0 5px;
      height: 30px;
      width: Auto;
      &.selected {
        background-color: $light_green;
        border: 1px solid transparent;
        color: $white;
      }
      &.favorite {
        font-size: 20px;
      }
    }
  }
}

.container:last-child {
  margin-bottom: 80px;
}
.container-quadri {
  // border: 1px solid red;
  position: relative;
  width: 90%;
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .home_card {
    position: relative;
    // border: 1px solid red;
    min-height: 160px;
    max-width: 48%;
    color: $light_green;

    .home_card_content {
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
    .home_card_bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 45px;
      //border: 1px solid red;
      font-size: 20px;
      p {
        font-size: 16px;
        font-weight: bold;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.container-list {
  // border: 1px solid red;
  position: relative;
  width: 90%;
  margin-top: 15px;
  flex-wrap: wrap;
  .home_card {
    position: relative;
    // border: 1px solid red;
    min-height: 160px;
    width: 100%;
    color: $light_green;

    .home_card_content {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
    .home_card_bottom {
      margin-top: -5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 16px;
        font-weight: bold;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.heading {
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 40px;
  h1 {
    color: $light_green;

    width: 100px;
    margin: 0;
  }
  .sortButtons {
    display: flex;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      margin: 0 5px;
      background-color: transparent;
      border: 1px solid $light_green;
      border-radius: 5px;
      img {
        width: 17px;
      }
    }
  }
}
</style>