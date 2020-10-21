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

  get Template() {
    return /*html*/ `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.description}</h5>
          <h6 class="card-subtitle">$${this.price}</h6>
          <h6 class="card-subtitle">Year: ${this.year}</h6>
          <h6 class="card-subtitle">Beds: ${this.bedrooms}</h6>
          <h6 class="card-subtitle">Baths:${this.bathrooms}</h6>
          <h6 class="card-subtitle">Levels: ${this.levels}</h6>
        </div>
      </div>
    </div>
    `
  }


  get Form() {
    return /*html*/ `
      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Post a new car</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="newListingForm" onsubmit="app.postListing(event)">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="imgUrl">ImgUrl</label>
                            <input class="form-control" type="text" name="imgUrl" id="dataimgUrl">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input class="form-control" type="text" name="description" id="dataDescription">
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input class="form-control" type="number" name="price" id="dataPrice">
                        </div>
                        <div class="form-group">
                            <label for="year">Year</label>
                            <input class="form-control" type="number" min="1886" max="" name="year"
                                id="dataYear">
                        </div>
                        <div class="form-group">
                            <label for="make">#Beds</label>
                            <input class="form-control" type="text" name="make" id="dataMake">
                        </div>
                        <div class="form-group">
                            <label for="model">#Baths</label>
                            <input class="form-control" type="text" name="model" id="dataModel">
                        </div>
                        <div class="form-group">
                            <label for="model">#Levels</label>
                            <input class="form-control" type="number" name="levels" id="dataLevels">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    `
  }


  
}