import { ProxyState } from "../AppState.js"
import { carService } from "../Services/CarService.js"


// Private
let _draw = () => {
  let template = ''
  ProxyState.cars.forEach(c => {template += c.Template})
  document.getElementById('cars').innerHTML = template
}


// Public
export default class CarController {
  constructor() {
    ProxyState.on("cars", _draw)
  }
}