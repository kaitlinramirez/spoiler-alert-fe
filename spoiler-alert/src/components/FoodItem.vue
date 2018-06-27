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
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>

<script>
export default {
    props: ['food'],
    data(){
      return{
        foodImg: require(`../assets/${this.food.type}.jpg`)
      }
    }

}
</script>

<style>
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
