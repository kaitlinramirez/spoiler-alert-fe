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
div {
    color: black;
}

</style>
