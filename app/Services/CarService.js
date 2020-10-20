import Car from "../Models/Car.js"
import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class CarService {
  constructor() {

  }

  getCars() {
    api.get("cars").then(res => {
      console.log(res.data);
    })
  }

}


export const carService = new CarService()
