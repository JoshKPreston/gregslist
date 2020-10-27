import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { carService } from "../Services/CarService.js"


// Private
let _draw = () => {
  let template = ''
  ProxyState.cars.forEach(c => {template += c.Template})
  document.getElementById('cars').innerHTML = template
}

let _drawForm = () => {
  document.getElementById('newListingFormContainer').innerHTML = ProxyState.cars[0].Form
}


// Public
export default class CarController {
  constructor() {
    ProxyState.on("cars", _draw)
    _draw()
  }

  getNewForm() {
    _drawForm()
  }

  create(e) {
    e.preventDefault()
    let form = e.target

    console.log(form);
  }


}