import axios from "axios";

export default async function getUser() {
    const response = await axios("https://jsonplaceholder.typicode.com/users", {
        params: {
            _limit: 7
        }
    })
    return response.data
}