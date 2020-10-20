import House from "../Models/House.js"
import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class HouseService {
  constructor() {
    this.getHouses()
  }

  getHouses() {
    api.get("houses").then(res => {
      ProxyState.houses = res.data.data.map(rawData => new House(rawData))
    }).catch(err => console.log(err))
  }

}


export const houseService = new HouseService()
