<template>
  <div class="test-container">
    <Empty></Empty>
  </div>
</template>

<script>
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },
  data() {
    return {
      current: 1,
      total: 300
    }
  },
  methods: {}
}
</script>
<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border: 2px solid black;
  position: relative;
}
</style>
