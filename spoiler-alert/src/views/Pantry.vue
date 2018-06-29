<template>
    <div id="pantry">
      <div class="welcome">
        <h3 class="page-title">Welcome to your pantry {{userName}}!</h3>
      </div>
      <div id="chart-container">
        <chart />
        <p>helloo from chart box!</p>
      </div>
        <Form />
      <pantry-list :foods="foods" />
    </div>
</template>

<script>
import Form from '@/components/Form'
import API from '@/lib/API'
import PantryList from '@/components/PantryList'
import Chart from '@/components/Chart'

export default {
  props: ['foods'],
  components: {
    Form,
    PantryList,
    Chart
  },
  data: () => ({
    foods: []
  }),
  props: {
    userName: String,
    userId: Object
  },
  async mounted() {
    this.foods = await API.getFood()
  }
}
</script>

<style>
#pantry {
    background-image: url(https://cdn-images-1.medium.com/max/2000/1*wfoo4AtOkOWSUq-7rIT53Q.jpeg);
    min-height: 87vh;
    color: white;
    text-shadow: 1px 1px black;
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

   
}

</style>

