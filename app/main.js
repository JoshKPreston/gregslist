import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js";
import JerbController from "./Controllers/JerbController.js";
import "./sweetalert2.all.min.js"

class App {
  carController = new CarController();
  houseController = new HouseController();
  jerbController = new JerbController();

    
  showContent = (content) => {
    document.querySelectorAll('.stage-content').forEach(e => {
      e.classList.add('hidden')
    })
    document.getElementById(content).classList.remove('hidden')
  }

}

window["app"] = new App();
// @ts-ignore
window["swal"] = Swal
