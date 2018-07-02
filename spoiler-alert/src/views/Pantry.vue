<template>
    <div id="pantry">
      <div class="welcome">
        <h3 class="page-title">Welcome to your pantry {{userName}}!</h3>
      </div>
      <Form :getFood="getFood"/>
      <b-button
        class="main-button"
        @click.prevent="getFood()"
        type="button" variant="primary">Your pantry
      </b-button>
      <article v-if="showPantry">
        <pantry-list
          :foods="foods"
          :getFood='getFood'/>
      </article>
      <food-chart
        :user-food='foods.items'
        :meat='meat'
        :produce='produce'
        :dairy='dairy'
        :grain='grain'
        :other='other'/>
    <article v-if="showPantry">
      <pantry-list
        :foods="foods"
        :getFood="getFood"
        :userId="userId"/>
    </article>
  </div>
</template>

<script>
import Form from '@/components/Form'
import PantryList from '@/components/PantryList'
import FoodChart from '@/components/FoodTypeChart'



export default {
  props: ['userName', 'userId'],
  components: {
    Form,
    PantryList,
    FoodChart
  },
  data: () => ({
    showPantry: true,
    foods: [],
    foodsById: [],
    meat: this.getMeat,
    produce: 1,
    dairy: 2,
    grain: 1,
    other: 2
  }),
  methods: {
    getFood() {
      const food_API_URL = `http://localhost:3000/api/v1/pantry/${this.userId}`
      console.log(food_API_URL);
      fetch(food_API_URL)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.foods = res
      })
    }
  },
  computed: {
    getMeat(){
      return this.foods[0].items.filter( item => {
        item.type === 'Meat'
      })
    },
    getProduce(){
      return this.foods.items.filter( item => {
        item.type === 'Produce'
      })
    },
    getDairy(){
      return this.foods.items.filter( item => {
        item.type === 'Dairy'
      })
    },
    getGrain(){
      return this.foods.items.filter( item => {
        item.type === 'Grain'
      })
    },
    getOther(){
      return this.foods.items.filter( item => {
        item.type === 'Other'
      })
    }
  }
}

</script>

<style>
#pantry {
  background-image: url(https://cdn-images-1.medium.com/max/2000/1*wfoo4AtOkOWSUq-7rIT53Q.jpeg);
  min-height: 87vh;
  color: white;
  padding-top: 2%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.welcome {
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: -1.4%;
  padding-top: .5em;
  padding-bottom: .5em;
}

@media (max-width: 500px) {
  .welcome {
    margin-top: 14.5%;
  }

  #chart-container {
    width: inherit
  }
}
</style>
