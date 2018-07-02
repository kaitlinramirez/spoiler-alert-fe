<template>
  <div id="pantry">
    <div class="welcome">
      <h3 class="page-title">Welcome to your pantry {{userName}}!</h3>
    </div>
    <Form
      :getFood="getFood"
      :userId="userId"/>
    <b-button
      class="main-button"
      @click.prevent="getFood()"
      type="button"
      variant="primary">Your pantry
    </b-button>
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



export default {
  props: ['userName', 'userId'],
  components: {
    Form,
    PantryList,
    // Chart
  },
  data: () => ({
    showPantry: true,
    foods: [],
    foodsById: [],
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

#chart-container {
  background-color: rgba(0, 0, 0, 0.5);
  width: inherit;
  padding-bottom: 5%;
  border-radius: .25rem;
  padding-top: 0.375rem;
  padding-right: 0.75rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
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
