<template>
  <section class="container">
    <b-button class="main-button" @click="showForm = !showForm" type="button" variant="primary">Add Food Item</b-button>
    <form @submit="formPost" v-if="showForm">
      <b-form v-if="show">
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
        <b-button  id="submit" type="submit" variant="success">Submit Food Item</b-button>
      </b-form>
    </form>
    <b-button class="main-button" @click="showImage = !showImage" type="button" variant="secondary" >Expiration Guide</b-button>
    <img class="guide-img" v-if="showImage" src="https://thumbnails-visually.netdna-ssl.com/TheShelfLifeofFood_512f96cbed064.jpg" alt="">
  </section>
</template>

<script>
export default {
  data: () => ({
    showForm: false,
    showImage: false,
    apiURL: 'https://g-spoiler-alert.herokuapp.com/api/v1/newitem',
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
    formPost() {
      const data = this.form
      fetch('http://localhost:3000/api/v1/newitem', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data),
        mode: 'cors'
      })
      .then(res => res.json())
    },
    onSubmit (evt) {
      evt.preventDefault()
      formPost()
    }
  }
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  align-items:center;
}

.guide-img {
  width: 50%;
  height: auto;
  margin-bottom: 10%;
}

.main-button {
  width: 50%;
  margin: 1em;
}

</style>
