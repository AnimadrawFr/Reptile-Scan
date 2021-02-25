<template>
  <div class="animal_infos">
    <img src="@/assets/images/no_fav_icon.svg" alt="" />
    <ul>
      <li>Category: {{ _category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
      _category: String
    }
}
</script>