<template>
  <div class="test-container">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    Menu
  }
}
</script>
<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border: 2px solid red;
  background: #000;
}
</style>
