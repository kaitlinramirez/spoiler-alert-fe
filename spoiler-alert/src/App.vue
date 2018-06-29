<template>
  <div id="app">
    <Header
      :getUser="getUser"/>
    <router-view
      :userName="userInput"
      :userId="userId"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  data () {
    return {
      userInput: null,
      userId: null
    }
  },
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    getUser(username) {
      this.userInput = username;
      this.findUser(username);
    },
    findUser(username) {
      const apiUrl =  `http://localhost:3000/api/v1/users/${this.userInput}`;
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
