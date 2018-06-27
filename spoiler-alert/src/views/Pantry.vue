<template>
    <div class="parallax" id="pantry">
      <div class="welcome">
        <h3>Welcome to your pantry, {username}!</h3>
      </div>
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
  props: {
    userName: String,
    userId: Number
  },
  async mounted() {
    this.foods = await API.getFood()
  }
}
</script>

<style>
#pantry {
    background-image: url(https://cdn-images-1.medium.com/max/2000/1*wfoo4AtOkOWSUq-7rIT53Q.jpeg);
    min-height: 87vh;
    color: white;
    text-shadow: 1px 1px black;
    padding-top: 2%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.welcome {
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: -.8%;
  padding-top: .5em;
  padding-bottom: .5em;
}
 
 @media (max-width: 500px) {
   .welcome {
     margin-top: 14.5%;
   }

   .guide-img {
     
   }
}

</style>

