<template>
  <section>
    <button @click="showForm = !showForm" type="button" >Show Form</button>
    <form v-if="showForm">
      <!-- <label for="food">Food</label>
      <input type="text" name="food" id="food" value="">
      <label for="type">Type</label>
      <input type="text" name="type" id="type" value="">
      <label for="expiration">Expiration</label>
      <input type="text" name="expiration" id="expiration" value="">
      <button type="submit" name="button">Add food item</button> -->
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="foodName"
                    label="Food Name:"
                    label-for="foodName">
        <b-form-input id="foodName"
                      type="text"
                      v-model="form.food"
                      required
                      placeholder="Enter food">
        </b-form-input>
      </b-form-group>
      <b-form-group id="foodCategory"
                    label="Category:"
                    label-for="foodCategory">
        <b-form-select id="foodCategory"
                      :options="categories"
                      required
                      v-model="form.category">
        </b-form-select>
      </b-form-group>
      <b-form-group id="date"
                    label="Expiration Date:"
                    label-for="date">
        <b-form-input id="date"
                      type="date"
                      v-model="form.date"
                      required
                      placeholder="Expiration date">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit Food Item</b-button>
    </b-form>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    showForm: false,
    form: {
        food: '',
        name: '',
        category: null,
        checked: []
      },
      categories: [
        { text: 'Select One', value: null },
        'Produce', 'Dairy', 'Meat', 'Grain'
      ],
      show: true
  })
}
</script>

<style>

</style>
