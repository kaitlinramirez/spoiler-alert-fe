<template>
    <div>
        <h1>welcome to your pantry!</h1>
        <Form />
    </div>
</template>

<script>
import Form from '@/components/Form'
import api from '@/lib/api'
export default {
  components: {
    Form
  },
  data: () => ({
    foods: []
  }),
  mounted() {
    api.getFood()
  }
}
</script>

<style>

</style>
