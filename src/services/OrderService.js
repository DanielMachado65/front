import axios from "axios";

export default class OrderService {
  static create(customer) {
    return axios.post(`${process.env.VUE_APP_BASE_API_URL}/orders`, {
      name: customer.name,
      email: customer.email,
    });
  }

  // static create(customer) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(customer);
  //     }, 3000);
  //   });
  // }
}
