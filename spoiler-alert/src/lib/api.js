const API_URL = 'https://g-spoiler-alert.herokuapp.com/api/v1/pantry'

export default {
  async getFood() {
    const res = await fetch(API_URL)
    return res.json()
  }
}
