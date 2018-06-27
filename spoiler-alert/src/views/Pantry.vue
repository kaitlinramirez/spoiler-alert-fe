<template>
    <div id="pantry">
        <h2>Welcome to your pantry {username}!</h2>
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
  async mounted() {
    this.foods = await API.getFood()
  }
}
</script>

<style>
#pantry {
    background-image: url(https://cdn-images-1.medium.com/max/2000/1*wfoo4AtOkOWSUq-7rIT53Q.jpeg);
    height: 100vh;
    color: white;
    padding-top: 2%;
}
</style>
