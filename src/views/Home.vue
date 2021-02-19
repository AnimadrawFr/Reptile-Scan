<template>
  <div class="home flex_column">
    <form class="search flex_column" action="">
      <input type="search" placeholder="Search an animal" />
    </form>

    <div class="categoriesList">
      <img src="@/assets/images/options.svg" alt="" />
      <div class="list">
        <div
          class="puce"
          @click="selectedCat('all')"
          :class="selected.includes('all') ? '' : 'selected'"
        >
          All
        </div>
        <div
          class="puce"
          @click="selectedCat('lizards')"
          :class="selected.includes('lizards') ? 'selected' : ''"
        >
          Lizards
        </div>
        <div
          class="puce"
          @click="selectedCat('snakes')"
          :class="selected.includes('snakes') ? 'selected' : ''"
        >
          Snakes
        </div>
        <div
          class="puce"
          @click="selectedCat('spiders')"
          :class="selected.includes('spiders') ? 'selected' : ''"
        >
          Spiders
        </div>
        <div
          class="puce"
          @click="selectedCat('frogs')"
          :class="selected.includes('frogs') ? 'selected' : ''"
        >
          Frogs
        </div>
        <div
          class="puce"
          @click="selectedCat('others')"
          :class="selected.includes('others') ? 'selected' : ''"
        >
          Others
        </div>
        <div
          class="puce"
          @click="selectedCat('favorites')"
          :class="selected.includes('favorites') ? 'selected' : ''"
        >
          ♡
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

    <div ref="container" class="container-list">
      <div class="card">
        <img
          class="card_content"
          src="@/assets/images/sample_picture.jpg"
          alt=""
        />
        <div class="card_bottom">
          <p>Animal name</p>
          <span>♡</span>
        </div>
      </div>
      <div class="card">
        <img
          class="card_content"
          src="@/assets/images/sample_picture_two.jpg"
          alt=""
        />
        <div class="card_bottom">
          <p>Animal name</p>
          <span>♡</span>
        </div>
      </div>
      <div class="card">
        <img
          class="card_content"
          src="@/assets/images/sample_picture_two.jpg"
          alt=""
        />
        <div class="card_bottom">
          <p>Animal name</p>
          <span>♡</span>
        </div>
      </div>
      <div class="card">
        <img
          class="card_content"
          src="@/assets/images/sample_picture.jpg"
          alt=""
        />
        <div class="card_bottom">
          <p>Animal name</p>
          <span>♡</span>
        </div>
      </div>
      <div class="card">
        <img
          class="card_content"
          src="@/assets/images/sample_picture_two.jpg"
          alt=""
        />
        <div class="card_bottom">
          <p>Animal name</p>
          <span>♡</span>
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
      selected: [],
      cards: document.querySelectorAll(".cards"),
      quadriIcon: require('@/assets/images/sort_quadri_icon.svg'),
      listIcon: require('@/assets/images/sort_list_icon.svg')
    };
  },
  methods: {
    selectedCat(category) {
      const index = this.selected.indexOf(category);
      if (index !== -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(category);
      }
    },
    swap(oldClass, newClass) {
      const container = this.$refs.container.classList;
      if (container.contains(oldClass)) {
        container.remove(oldClass);
        container.add(newClass);
        this.$refs.swapIcon.src = this.listIcon
      } else {
        container.remove(newClass);
        container.add(oldClass);
        this.$refs.swapIcon.src = this.quadriIcon
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
      font-family: sans-serif;
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

.container-quadri {
  // border: 1px solid red;
  position: relative;
  width: 90%;
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    position: relative;
    // border: 1px solid red;
    min-height: 160px;
    width: 48%;
    color: $light_green;
    font-family: sans-serif;
    .card_content {
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
    .card_bottom {
      margin-top: -10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 12px;
      }
      span {
        font-size: 20px;
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
  .card {
    position: relative;
    // border: 1px solid red;
    min-height: 160px;
    width: 100%;
    color: $light_green;
    font-family: sans-serif;
    .card_content {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
    .card_bottom {
      margin-top: -10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 12px;
      }
      span {
        font-size: 20px;
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
    font-family: sans-serif;
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