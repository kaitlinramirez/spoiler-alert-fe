<template>
  <div id="app">
    <Header
      :allUsers="userTable"
      :getUser="getUser"
      :matchedUser="matchUserId"/>
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
      userTable: null,
      userInput: '',
      userId: this.matchUsernameToId
    }
  },
  mounted: function () {
    this.getUsers();
  },
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    getUsers() {
      const apiUrl =  'http://localhost:3000/api/v1/users';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.userTable = Response.users;
        })
    },
    getUser(username) {
      return this.userInput = username;
    },
    // matchUserId(userInput) {
    //   const filterUsers = this.userTable.filter(user => user.username === userInput)[0]
    //   this.userId = filterUsers;
    //   if (!this.userId) {
    //       this.createNewUser(this.userInput);
    //     }
    //   return this.userId = filterUsers[0].id;
    // },
    createNewUser(username) {
      const data = {
          'username': username
        };
      fetch('http://localhost:3000/api/v1/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors',
      })
      .then(res => res.json())
    }
  },
  computed: {
    matchUsernameToId() {
      return this.userId = this.userTable.filter(user => user.username === this.userInput)[0].id;
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
