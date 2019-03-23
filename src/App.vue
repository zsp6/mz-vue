<template>
  <div>
    <transition
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import animate from 'animate.css';
export default {
  created () {
    this.$store.dispatch('getCityName');
  }
}
</script>
