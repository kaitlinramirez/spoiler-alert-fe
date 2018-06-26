<template>
  <section>
    <button @click="showForm = !showForm" type="button" >Add Food Item</button>
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
    <button @click="showImage = !showImage" type="button" >Expiration Guide</button>
    <img v-if="showImage" src="https://thumbnails-visually.netdna-ssl.com/TheShelfLifeofFood_512f96cbed064.jpg" alt="">
  </section>
</template>

<script>
export default {
  data: () => ({
    showForm: false,
    showImage: false,
    apiURL: 'apiUrl goes here',
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
    postFormData () {
      fetch(this.apiURL, {
      method: 'POST',
      body: data.form
      })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log('RESULT', data)
      })
      .catch(function(error) {
        console.log('error:', error.message);
      });
        alert('Form Submitted!')
    },
    onSubmit (evt) {
      evt.preventDefault()
      postFormData()
    }
  }
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
}

</style>

