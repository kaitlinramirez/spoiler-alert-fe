<template>
  <div id="app">
    <Header
      :allUsers="userTable"
      :getUser="getUser"
      :matchedUser="matchUserId"/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import HomePage from '@/views/HomePage'
import Footer from '@/components/Footer'

export default {
  data () {
    return {
      userTable: null,
      userInput: '',
      userId: null
    }
  },
  mounted: function () {
    this.getUsers();
  },
  name: 'App',
  components: {
    Header,
    HomePage,
    Footer
  },
  methods: {
    getUsers() {
      const apiUrl =  'https://g-spoiler-alert.herokuapp.com/api/v1/users';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.userTable = Response.users;
        })
    },
    getUser(username) {
      return this.userInput = username;
    },
    matchUserId(username) {      
      return this.userId = this.userTable.filter(user => user.username === username)[0].id;
    }
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
