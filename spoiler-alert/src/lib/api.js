const API_URL = 'http://localhost:3000'

export default {
  getFood() {
    return fetch(API_URL).then(res => res.json())
  }
}
