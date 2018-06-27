<template>
    <div class="parallax" id="pantry">
        <h2>Welcome to your pantry {{userName}}!</h2>
        <Form />
    </div>
</template>

<script>
import Form from '@/components/Form'
import API from '@/lib/API'

export default {
  components: {
    Form
  },
  data: () => ({
    foods: []
  }),
  props: {
    userName: String,
    userId: Number
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
    padding-top: 2%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
