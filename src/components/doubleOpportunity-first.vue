<template>
  <div class="double-op-first">
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">1.2</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">1</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">2</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">3</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">4</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">5</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">6</i>
      </span>
    </div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">1</i>
      </span>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">2</i>
      </span>
    </div>
    <div v-for="item in returnCorrectValue(0,1, getDoubleOpp)">
      <div class="col-border">
        {{item}}
        <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">3</i>
      </span>
    </div>
    <div v-for="item in returnCorrectValue(1,3, getDoubleOpp)">
      <div class="col-border">
        {{item}}
        <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">4</i>
      </span>
    </div>
    <div v-for="item in returnCorrectValue(3,6, getDoubleOpp)">
      <div class="col-border">
        {{item}}
        <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">5</i>
      </span>
    </div>
    <div v-for="item in returnCorrectValue(6,10, getDoubleOpp)">
      <div class="col-border">
        {{item}}
        <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div></div>
    <div></div>
    <div>
      <span class="fa-stack fa-lg orange-number">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-inverse fa-stack-1x ">6</i>
      </span>
    </div>
    <div v-for="item in returnCorrectValue(10,15, getDoubleOpp)">
      <div class="col-border">
        {{item}}
        <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
  export default {
    computed: {
      getDoubleOpp() {
        return this.$store.getters.getDoubleOpportunity.firstPlace
      }
    },
    methods: {
      returnCorrectValue(a, b, obj) {
        return obj.slice(a,b)
      }
    }

  }
</script>
<style scoped>
  .double-op-first {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    background: #171e24;
  }

  .double-op-first div {
    min-width: 40px;
    display: grid;
    align-content: center;
    width: 100%;
    justify-content: center;
  }
</style>
