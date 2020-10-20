// "data": [
//   {
//   "_id": "5f4ec55a9d87ed001709822a",
//   "make": "Areial ",
//   "model": "Atom",
//   "year": 2017,
//   "price": 74700,
//   "description": "scary fast",
//   "imgUrl": "https://i.pinimg.com/originals/3e/96/3b/3e963b2b60d41bf55ef0ecc3fa021ffb.jpg",
//   "__v": 0
//   },

export default class Car {
  constructor(data) {
    this._id = data._id
    this.make = data.make
    this.model = data.model 
    this.year = data.year 
    this.price = data.price 
    this.description = data.description 
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return /*html*/ `
      <div class="col-4">
        <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.year} ${this.make} ${this.model}</h5>
            <h6 class="card-subtitle">${this.price}</h6>
            <p class="card-text">${this.description}</p>
          </div>
        </div>
      </div>
    `
  }
}