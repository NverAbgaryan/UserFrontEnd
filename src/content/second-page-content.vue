<template>
  <div class="second-page-content">
    <first></first>
    <negative></negative>
  </div>
</template>

<script>
  import First from '../components/doubleOpportunity-first.vue'
  import Negative from '../components/doubleOpportunity-negative.vue'
  import Double from '../components/double-odds-wrapper.vue'

  export default {
    data() {
      return {
        odds: {}
      }
    },
    components: {
      first: First,
      negative: Negative,
      double:Double
    }
  }
</script>
<style>
  .second-page-content {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 4fr 4fr;
    grid-template-rows: 90vh;

  }
</style>
