<template>
  <div class="test-container">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'

export default {
  components: {
    SiteAside
  }
}
</script>
<style scoped>
.test-container {
  width: 250px;
  height: 600px;
  margin: 0 auto;
  border: 2px solid red;
  background: #000;
}
</style>
