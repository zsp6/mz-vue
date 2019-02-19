<template>
  <div>
    <MzBanner></MzBanner>
    <mz-tabs></mz-tabs>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner';
import MzTabs from '../components/MzTabs';
import MzFooter from '../components/MzFooter';
export default {
  components: {
    MzBanner,
    MzTabs,
    MzFooter
  }
}
</script>
