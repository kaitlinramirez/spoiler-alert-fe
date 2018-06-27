<template>
    <div class="login">
      <b-nav-form>
        <b-form-input v-model="userName" size="sm" class="mr-sm-2" type="text" placeholder="User Name"/>
        <b-button @click.prevent="submitUser" size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
      </b-nav-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ""
    }
  },
  methods: {
    submitUser() {
      console.log(this.userName);
    }
  }
}
</script>
  
<style>
  .nav-form {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
