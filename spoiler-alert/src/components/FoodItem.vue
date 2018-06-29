<template>
<div>
  <b-card :title="food.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <img :src='foodImg' alt="">
    <p class="card-text">
      {{food.expDate}}
    </p>
    <b-button @click="deleteFood()" href="#" variant="danger">Delete</b-button>
  </b-card>
</div>
</template>

<script>
export default {
    props: ['food'],
    data(){
      return{
        foodImg: require(`../assets/${this.food.type}.jpg`),
      }
    },
    methods: {
      deleteFood() {
        console.log('lets delete some shit')
        const delete_API_URL = `http://localhost:3000/api/v1/pantry/${this.food.id}`
        fetch(delete_API_URL, {
          method: "DELETE",
          headers: new Headers({"content-type": "application/json"})
        })
        .then(console.log('deleted'))
      }
    },
    mounted: function() {
      this.deleteFood()
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
