import axios from 'axios'

export default async function getPosts() {
  const response = await axios('https://jsonplaceholder.typicode.com/todos', {
    params: {
      _limit: 5
    }
  })
  return response.data
}