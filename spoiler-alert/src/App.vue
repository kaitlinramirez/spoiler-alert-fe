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

    // getStats() {
    //   const apiUrl = 'http://localhost:3000/api/v1/pantry'
    //   fetch(apiUrl)
    //     .then(resp => resp.json())
    //     .then(console.log(resp))
    //     .then(resp.items.filter(type) {
    //       if(data.labels.filter(type)toLowerCase()=== type) {
    //         data.data = resp.items.length
    //       }
    //     })
    // },

    // getType(item) {
    //   return item.type === data.label.toLowerCase()
    // },

    // getNumOfType(type) {

    //   return type.length
    // }

    // getUsers() {
    //   const apiUrl =  'http://localhost:3000/api/v1/users';
    //   fetch(apiUrl)
    //     .then(Response => Response.json())
    //     .then(Response => {
    //       this.userTable = Response.users;
    //     })
    // },
    // getUser(username) {
    //   return this.userInput = username;
    // },
    
    matchUserId(username) {
      const filterUsers = this.userTable.filter(user => user.username === username)[0]
      this.userId = filterUsers;
      if (this.userId === undefined) {
          this.createNewUser(this.userInput);
        }
        else if (this.userId.length > 0) {
          return this.userId = filterUsers[0].id;
        }
    },
    createNewUser(username) {
      const data = {
          'username': username
        };
      fetch('http://localhost:3000/api/v1/newuser', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors',
      })
      .then(res => res.json())
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
