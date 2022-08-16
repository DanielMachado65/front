import axios from 'axios'

export default class UserService {
    static all() {
        return axios.post(`${process.env.VUE_APP_BASE_API_URL}/users`)
    }
}