<template>
  <div>
    <Pager :current="current" :total="total" @pageChange="handlePageChange($event)"></Pager>
  </div>
</template>

<script>
import Pager from '@/components/Pager'

export default {
  components: {
    Pager
  },
  data() {
    return {
      current: 1,
      total: 300
    }
  },
  methods: {
    handlePageChange(newPage) {
      console.log('页码改变了', newPage)
      this.current = newPage
    }
  }
}
</script>
