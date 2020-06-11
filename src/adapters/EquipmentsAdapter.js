class EquipmentsAdapter {
    constructor(){
        this.baseURL = "http://localhost:3000/api/v1/equipments"
    }

    getEquipments(){
        return fetch(this.baseURL).then(response => response.json()
        )
    }

    postEquipment(newEquipmentName,newEquipmentInventoryNumberValue,newEquipmentCategoryValue,newEquipmentAvailableValue,newEquipmentNotAvailableValue,newEquipmentImageValue,newEquipmentHourlyRateValue, newEquipmentDailyRateValue, newEquipmentMonthlyRateValue,newEquipmentHoursNeededValue,newEquipmentDaysNeededValue,newEquipmentMonthsNeededValue,newEquipmentAdditionalComment){
        // debugger
        const equipment = {
            name: newEquipmentName,
            item_id: newEquipmentInventoryNumberValue,
            category: newEquipmentCategoryValue,
            availability: newEquipmentAvailableValue ? true : newEquipmentNotAvailableValue,
            image: newEquipmentImageValue,
            price_per_hour: newEquipmentHourlyRateValue,
            price_per_day: newEquipmentDailyRateValue,
            price_per_month: newEquipmentMonthlyRateValue,
            hours_required: newEquipmentHoursNeededValue,
            days_required: newEquipmentDaysNeededValue,
            montths_required: newEquipmentMonthsNeededValue,
            additional_comments: newEquipmentAdditionalComment

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