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
    }
  },
  props: {
    allUsers: Array,
    getUser: Function,
    matchedUser: Function
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
