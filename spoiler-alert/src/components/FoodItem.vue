<template>
<div>
  <b-card :title="food.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <img :src='foodImg' alt="">
    <p class="card-text">
      {{food.expDate | moment("dddd, MMMM Do")}}
    </p>
    <b-button @click="deleteFood(food)" variant="danger">Delete</b-button>
  </b-card>
</div>
</template>

<script>
export default {
    props: ['food', 'getFood'],
    data(){
      return{
        foodImg: require(`../assets/${this.food.type}.jpg`),
      }
    },
    methods: {
        deleteFood(deletedFood) {
          const delete_API_URL = `http://localhost:3000/api/v1/${deletedFood.id}`
          fetch(delete_API_URL, {
            method: "DELETE",
            body: JSON.stringify(deletedFood),
            headers: new Headers({"content-type": "application/json"})
          })
          .then(data => {
            console.log(data);
            this.getFood();
          })
          .then(console.log('deleted'))
        }
      }

}
</script>

<style scoped>
article{
  box-shadow: 4px 8px 8px rgba(0, 0, 0, .5);

}
div {
    color: black;
    padding-bottom: 2em;

}
img{
  height: 120px;
  width: 240px;
}

</style>
