<template>
  <div>
    <!-- <router-view name="top"></router-view>
    <router-view name="bottom"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getCityName');
  }
}
</script>
