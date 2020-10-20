import House from "../Models/House.js"
import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class HouseService {
  constructor() {
    
  }

  getHouses() {
    api.get("houses").then(res => {
      console.log(res.data);
    })
  }

}


export const houseService = new HouseService()
