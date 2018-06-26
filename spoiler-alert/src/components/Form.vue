<template>
  <section>
    <button @click="showForm = !showForm" type="button" >Show Form</button>
    <form v-if="showForm">
      <label for="food">Food</label>
      <input type="text" name="food" id="food" value="">
      <label for="type">Type</label>
      <input type="text" name="type" id="type" value="">
      <label for="expiration">Expiration</label>
      <input type="text" name="expiration" id="expiration" value="">
      <button type="submit" name="button">Add food item</button>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    showForm: false
  })
}
</script>

<style>

</style>
