<template>
  <div class="all-content-wrapper">
    <double></double>
    <div class="second-column-wrapper">
      <div class="left-item-numbers">
        <div>
          <div>
                  <span class="fa-stack fa-lg orange-number">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-inverse fa-stack-1x ">5</i>
                  </span>
          </div>
        </div>
        <div>
         <span class="fa-stack fa-lg red-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">1</i>
        </span>
        </div>
        <div>
         <span class="fa-stack fa-lg red-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">2</i>
        </span>
        </div>
        <div>
         <span class="fa-stack fa-lg red-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">3</i>
        </span>
        </div>
        <div>
         <span class="fa-stack fa-lg red-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">4</i>
        </span>
        </div>
        <div>
         <span class="fa-stack fa-lg red-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">5</i>
        </span>
        </div>
        <div>
         <span class="fa-stack fa-lg red-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">6</i>
        </span>
        </div>
      </div>
      <div class="left-item-numbers">
        <div>
                  <span class="fa-stack fa-lg orange-number">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-inverse fa-stack-1x ">5</i>
                  </span>
        </div>
        <div v-for="(odd,key) in getPositiveOdds.oddsForFirstPlace">
          <div type="info" class="col-border" v-if="odd" @click="addSingleOddPositive(odd,1,key)">
            {{odd}}<br/>
            <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          </div>
        </div>
      </div>
      <div class="left-item-numbers">
        <div>
                  <span class="fa-stack fa-lg orange-number">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-inverse fa-stack-1x ">5</i>
                  </span>
        </div>
        <div v-for="(odd,key) in getPositiveOdds.oddsForSecondPlace">
          <div type="info" class="col-border" v-if="odd" @click="addSingleOddPositive(odd,2,key)">
            {{odd}}<br/>
            <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          </div>
        </div>
      </div>
      <div class="left-item-numbers">
        <div>
                  <span class="fa-stack fa-lg orange-number">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-inverse fa-stack-1x ">5</i>
                  </span>
        </div>
        <div v-for="(odd,key) in getPositiveOdds.oddsForThirdPlace">
          <div type="info" class="col-border" v-if="odd" @click="addSingleOddPositive(odd,3,key)">
            {{odd}}<br/>
            <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          </div>
        </div>
      </div>
      <div class="left-item-numbers">
        <div>
         <span class="fa-stack fa-lg orange-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">5x</i>
        </span>
        </div>
        <div v-for="(odd,key) in getNegativeOdds.oddsForFirstPlaceNegative">
          <div type="info" class="col-border" v-if="odd" @click="addSingleOddNegative(odd,1,key)">
            {{odd}}<br/>
            <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          </div>
        </div>
      </div>
      <div class="left-item-numbers">
        <div>
         <span class="fa-stack fa-lg orange-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">5x</i>
        </span>
        </div>
        <div v-for="(odd,key) in getNegativeOdds.oddsForSecondPlaceNegative">
          <div type="info" class="col-border" v-if="odd" @click="addSingleOddNegative(odd,2,key)">
            {{odd}}<br/>
            <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          </div>
        </div>
      </div>
      <div class="left-item-numbers">
        <div>
         <span class="fa-stack fa-lg orange-number">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-inverse fa-stack-1x ">5x</i>
        </span>
        </div>
        <div v-for="(odd,key) in getNegativeOdds.oddsForThirdPlaceNegative">
          <div type="info" class="col-border" v-if="odd" @click="addSingleOddNegative(odd,3,key)">
            {{odd}}<br/>
            <span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          </div>
        </div>
      </div>
      <div></div>
      <!--<negative></negative>-->
    </div>
  </div>
</template>

<script>
  import Double from '../components/double-odds-wrapper.vue'

  export default {
    data() {
      return {
        odds: {}
      }
    },
    computed: {
      getPositiveOdds: function () {
        return this.$store.getters.getPositiveOdds
      },
      getNegativeOdds: function () {
        return this.$store.getters.getNegativeOdds
      }
    },
    methods: {
      addSingleOddNegative(odd, key, row) {
        let item = {
          betId: Math.floor((Math.random() * 100) + 1),
          betType: 'single',
          secondType: 'negative',
          odd: odd,
          amount: '',
          profit: '',
          position: {
            horizontal: key,
            vertical: row + 1
          }
        }
        this.$store.commit('addBet', item)
      },
      addSingleOddPositive(odd, key, row) {
        let item = {
          betId: Math.floor((Math.random() * 100) + 1),
          betType: 'single',
          secondType: 'positive',
          odd: odd,
          amount: '',
          profit: '',
          position: {
            horizontal: key,
            vertical: row + 1
          }
        }
        this.$store.commit('addBet',item)
      }
    },
    components: {
      double: Double,
    }
  }
</script>
