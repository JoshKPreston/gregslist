import Car from "../Models/Car.js"
import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class CarService {
  constructor() {
    this.getCars()
  }


  // read
  getCars() {
    api.get("cars").then(res => {
      ProxyState.cars = res.data.data.map(rawData => new Car(rawData))
    }).catch(err => console.log(err))
  }

  // create


  // update


  // delete

  
}


export const carService = new CarService()
