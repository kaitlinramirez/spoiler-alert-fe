<template>
  <section>
    <button @click="showForm = !showForm" type="button" >Show Form</button>
    <form v-if="showForm">
<b-form @submit="onSubmit" v-if="show">
      <b-form-group id="foodName"
                    label="Food Name:"
                    label-for="foodName">
        <b-form-input id="foodName"
                      type="text"
                      v-model="form.name"
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
                      v-model="form.type">
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
        name: '',
        type: null,
        date: 'date'
      },
      categories: [
        { text: 'Select One', value: null },
        'Produce', 'Dairy', 'Meat', 'Grain'
      ],
      show: true
  }),
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
}
</script>

<style>

</style>
