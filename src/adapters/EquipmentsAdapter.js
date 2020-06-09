class EquipmentsAdapter {
    constructor(){
        this.baseURL = "http://localhost:3000/api/v1/equipments"
    }

    getEquipments(){
        return fetch(this.baseURL).then(response => response.json()
        )
    }

    createEquipment(e){
        const equipment = {
            // body: value
            newEquipmentNameValue: e,
            newEquipmentInventoryNumberValue: e
        }
        
        return fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({equipment})
        })
    }
}