// "data": [
//   {
//   "_id": "5f4ec18d9d87ed001709821d",
//   "bedrooms": 1,
//   "bathrooms": 1,
//   "year": 1,
//   "levels": 1,
//   "price": 2004000,
//   "description": "a",
//   "imgUrl": "https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg",
//   "__v": 0
//   },



export default class House {
  constructor(data) {
    this._id = data._id 
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms 
    this.year = data.year 
    this.levels = data.levels 
    this.price = data.price 
    this.description = data.description
    this.imgUrl = data.imgUrl 
  }

  get Tempalte() {
    return /*html*/ `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.description}</h5>
          <h6 class="card-subtitle">${this.price}</h6>
          <h6 class="card-subtitle">${this.year}</h6>
          <h6 class="card-subtitle">${this.bedrooms}</h6>
          <h6 class="card-subtitle">${this.bathrooms}</h6>
          <h6 class="card-subtitle">${this.levels}</h6>
        </div>
      </div>
    </div>
    `
  }
}