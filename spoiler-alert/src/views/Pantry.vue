<template>
    <div>
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

</style>
