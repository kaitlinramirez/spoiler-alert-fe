<template>
  <div class="login">
    <b-nav-form>
      <b-form-input
        v-model="userName"
        size="sm"
        class="mr-sm-2"
        type="text"
        placeholder="User Name"/>
      <b-button
        type="submit"
        size="sm"
        class="my-2 my-sm-0"
        @click.prevent="submitUser">Login</b-button>
    </b-nav-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userTable: null
    }
  },
  mounted: function () {
    this.getUsers();
  },
  methods: {
    submitUser() {
      console.log(this.userName);
    },
    getUsers() {
      const apiUrl =  'https://g-spoiler-alert.herokuapp.com/api/v1/users';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.userTable = Response.users;
        })
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
