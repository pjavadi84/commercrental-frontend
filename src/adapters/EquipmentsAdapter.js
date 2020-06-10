class EquipmentsAdapter {
    constructor(){
        this.baseURL = "http://localhost:3000/api/v1/equipments"
    }

    getEquipments(){
        return fetch(this.baseURL).then(response => response.json()
        )
    }

    postEquipment(newEquipmentNameValue,newEquipmentInventoryNumberValue,newEquipmentCategoryValue,newEquipmentAvailableValue,newEquipmentNotAvailableValue,newEquipmentImageValue){
        // debugger
        const equipment = {
            // body: value
            // newEquipmentNameValue: value,
            name: newEquipmentNameValue,
            item_id: newEquipmentInventoryNumberValue,
            category: newEquipmentCategoryValue,
            availability: newEquipmentAvailableValue ? true : newEquipmentNotAvailableValue,
            image: newEquipmentImageValue
        }
        
        return fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(equipment)
        })
        .then(response => response.json())

        
    }
    
}