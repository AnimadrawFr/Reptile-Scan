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
        :sections="_sections"
        :size="200"
        unit="px"
        :total="100"
        background="rgba(0, 0, 0, 0.8)"
        :thickness="20"
        :text="_result"
      >
      </vc-donut>

      <div :class="_informationsClass">
        {{ _content }}
      </div>

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
    _showHead_img: Boolean,
    _sections: Array,
    _result: String
  },
};
</script>

<style lang="scss" scoped>
</style>