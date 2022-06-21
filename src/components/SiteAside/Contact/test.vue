<template>
  <div class="test-container">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from '@/components/Contact/'

export default {
  components: {
    Contact
  }
}
</script>
<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border: 2px solid black;
  background: #000;
  padding-top: 200px;
}
</style>
