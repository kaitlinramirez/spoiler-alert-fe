const API_URL = 'https://g-spoiler-alert.herokuapp.com/api/v1/pantry'

export default {
  getFood() {
    return fetch(API_URL).then(res => res.json())
  }
}
