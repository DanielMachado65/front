import axios from "axios";

export default class OrderService {
  static create(customer) {
    return axios.post(`${process.env.VUE_APP_BASE_API_URL}/orders`, {
      ...customer,
    });
  }
}
