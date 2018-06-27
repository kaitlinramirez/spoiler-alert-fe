<template>
    <div id="pantry">
        <h1>welcome to your pantry!</h1>
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
  mounted() {
    this.foods = API.getFood()
  }
}
</script>

<style>
#pantry {
        background-image: url(https://cdn-images-1.medium.com/max/2000/1*wfoo4AtOkOWSUq-7rIT53Q.jpeg);
        height: 100vh;

}

</style>
