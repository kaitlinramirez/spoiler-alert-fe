<template>
  <section class="container">
    <article class="form-container">
      <b-button class="main-button" @click="showForm = !showForm" type="button" variant="primary">Add Food Item</b-button>
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
          <b-button id="submit" type="submit" variant="success">Submit Food Item</b-button>
        </b-form>
      </form>
    </article>
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
        user_id: 2,
        name: '',
        type: null,
        expDate: 'date'
      },
      categories: [
        { text: 'Select One', value: null },
        'Produce', 'Dairy', 'Meat', 'Grain'
      ],
      show: true
  }),
  methods: {
    onSubmit() {
      console.log('i am being called')
      console.log(this.form)
      const data = this.form
      fetch('http://localhost:3000/api/v1/newitem', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data),
        mode: 'cors',
      })
      .then(res => res.json())
      .then(res => console.log(res))
    },
    // onSubmit (evt) {
    //   evt.preventDefault()
    //   formPost()
    // }
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  align-items:center;
}

.form-container {
  background-color: rgba(0, 0, 0, 0.5);
  width: inherit;
  padding-bottom: 5%;
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

b-form-group[label="Food Name:"] {
  background-color: rgba(255, 255, 255, 0.5)
}

</style>
