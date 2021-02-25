<template>
  <header :style="{ backgroundImage: `url('${_picture}')` }">
    <div class="header_content">
      <h3>{{ _sectionTitle }}</h3>

      <img
        v-if="_showHead_img"
        class="section_head_img"
        :src="_sectionIllustration"
        alt=""
      />

      <vc-donut
        v-show="_showDonut"
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

      <div :class="_informationsClass">
        {{ _content }}
      </div>

      <Categories />
    </div>
  </header>
</template>

<script>
import Categories from "@/components/Categories";

export default {
  components: {
    Categories,
  },
  props: {
    _picture: String,
    _sectionTitle: String,
    _sectionIllustration: String,
    _informationsClass: String,
    _content: String,
    _showDonut: Boolean,
    _showHead_img: Boolean
  },
};
</script>

<style lang="scss" scoped>
</style>