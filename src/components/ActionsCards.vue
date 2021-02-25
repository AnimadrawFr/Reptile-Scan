<template>
  <div class="card" :class="_success">
    <div class="date">
      <h3 class="day">{{ _day }}</h3>
      <p class="month">{{ _month }}/{{ _fullYear }}</p>
    </div>
    <div class="sepp"></div>
    <div class="data">
      {{ _content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    _day: Number,
    _month: Number,
    _fullYear: Number,
    _content: String,
    _success: String
  },
};
</script>

<style lang="scss">
@import "./src/assets/app.scss";

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
  &.red {
    border-left: 5px solid red;
  }
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
</style>