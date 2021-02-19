<template>
  <div id="app">
    <GlobalHeader />
    <router-view />
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader"

export default {
  components: {
    GlobalHeader
  }
}
</script>