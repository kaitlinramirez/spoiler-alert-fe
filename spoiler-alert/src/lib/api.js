const api_url = 'http://localhost:8080'

export default {
  getFood() {
    return fetch(api_url).then(res => res.json())
  }
}
