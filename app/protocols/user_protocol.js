class UserProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.name | element.Name;
      this._organizerId = element.organizerId | element.OrganizerId | element.organizerID;
    }

    get primaryKey() {
      return this._primaryKey;
    }

    get id() {
      return this._id;
    }
    
    get name() {
      return this._name;
    }

    get organizerId() {
      if(this._organizerId == undefined || typeof(this._organizerId) == "undefined") {
        return JSON.parse(sessionStorage.getItem('data')).organizer.ID;
      }
      
      return this._organizerId;
    }

    toJson() {
      return {
        ID: this.id,
        name: this.name,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        organizerID: this.organizerId
      }
    }
  }
  
  export default UserProtocol;