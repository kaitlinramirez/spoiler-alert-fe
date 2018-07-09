<template>
  <div id="app">
    <Header
      :getUser="getUser"/>
    <router-view
      :user-name="userInput"
      :user-id="userId"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      userInput: null,
      userId: null
    }
  },
  methods: {
    getUser(username) {
      this.userInput = username;
      this.findUser(username);
    },
    findUser(username) {
      const apiUrl =  `https://g-spoiler-alert.herokuapp.com/api/v1/users/${this.userInput}`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.userId = Response.user[0].id;
          this.userInput = Response.user[0].username
        })
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  /* min-height: 87vh; */
  min-height:100%;
  position:relative;
}
</style>
