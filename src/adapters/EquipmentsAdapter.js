class EquipmentsAdapter {
    constructor(){
        this.baseURL = "http://localhost:3000/api/v1/equipments"
    }

    getEquipments(){
        return fetch(this.baseURL).then(response => response.json()
        )
    }
}