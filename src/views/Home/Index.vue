// 这是个一级路由,他包裹着 film cinema center 这些二级路由
<template>
  <div>
    <router-view></router-view>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from '@/components/MzFooter';
export default {
  components: {
    MzFooter
  }
}
</script>
