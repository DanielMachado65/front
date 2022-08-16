import axios from 'axios'

export default class UserService {
    static create(user) {
        return axios.post(`${process.env.VUE_APP_BASE_API_URL}/users`, { ...user })
    }

    static all() {
        return axios.get(`${process.env.VUE_APP_BASE_API_URL}/users`)
    }

    static get(user_id) {
        return axios.get(`${process.env.VUE_APP_BASE_API_URL}/users/${user_id}`)
    }
}