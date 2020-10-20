import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js";
import JerbController from "./Controllers/JerbController.js";
import "./sweetalert2.all.min.js"

class App {
  carController = new CarController();
  houseController = new HouseController();
  jerbController = new JerbController();
}

window["app"] = new App();
// @ts-ignore
window["swal"] = Swal