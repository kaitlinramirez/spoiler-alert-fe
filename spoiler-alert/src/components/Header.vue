<template>
  <header>
    <div>
      <b-navbar
        class="navbar"
        type="light"
        variant="light"
        fixed="top">
        <h1>Spoiler Alert!</h1>
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
              @click.prevent="getUser(userName) && matchedUser(userName)">Login</b-button>
          </b-nav-form>
        </div>
      </b-navbar>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      userName: "",
<<<<<<< HEAD
    }
  },
  props: {
    allUsers: Array,
    getUser: Function,
    matchedUser: Function
=======
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
>>>>>>> a5fc45f... remove login componenent and add to header component
  }
}
</script>

<style>
b-navbar {
    display: flex;
    flex-direction: row;
}

@media (max-width: 500px) {

}
</style>
