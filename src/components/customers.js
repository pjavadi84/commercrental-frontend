class Customers {
    constructor(){
        this.customers = []
        this.adapter = new customersAdapter()
        this.customerInitBindingsAndEventListeners()
        this.fetchAndLoadCustomers()
    }

    customerInitBindingsAndEventListeners(){
        this.equipmentsContainer = document.getElementById('equipments-container')
        this.equipmentsForm = document.getElementById("new_equipment_form")

        this.newEquipmentName = document.getElementById("equipment-name")
        this.newEquipmentInventoryNumber = document.getElementById("form-inventory-number")
        this.newEquipmentCategory = document.getElementById("category-selection")
        this.newEquipmentHourlyRate = document.getElementById("hourly-rate")
        this.newEquipmentDailyRate = document.getElementById("daily-rate")
        this.newEquipmentMonthlyRate = document.getElementById("monthly-rate")
        this.newEquipmentHoursNeeded = document.getElementById("rental_hours_needed")
        this.newEquipmentDaysNeeded = document.getElementById("rental_days_needed")
        this.newEquipmentMonthsNeeded = document.getElementById("rental_months_needed")
        this.newEquipmentAdditionalComment = document.getElementById("additional_comments")
        this.newEquipmentAvailable = document.getElementById("available")
        this.newEquipmentNotAvailable = document.getElementById("unavailable")
        this.newEquipmentImageLink = document.getElementById("equipment-image")
        this.newEquipmentCustomer = document.getElementById("customer_full_name")
        this.newEquipmentVendor = document.getElementById("vendor_business_name")
        this.equipmentsForm.addEventListener('submit', this.createEquipment.bind(this))
    }

    createEquipment(e){
        e.preventDefault()

        const newEquipmentName = this.newEquipmentName.value
        const newEquipmentInventoryNumberValue = this.newEquipmentInventoryNumber.value
        const newEquipmentCategoryValue = this.newEquipmentCategory.value
        const newEquipmentHourlyRateValue = this.newEquipmentHourlyRate.value
        const newEquipmentDailyRateValue = this.newEquipmentDailyRate.value
        const newEquipmentMonthlyRateValue = this.newEquipmentMonthlyRate.value
        const newEquipmentHoursNeededValue = this.newEquipmentHoursNeeded.value
        const newEquipmentDaysNeededValue = this.newEquipmentDaysNeeded.value
        const newEquipmentMonthsNeededValue = this.newEquipmentMonthsNeeded.value
        const newEquipmentAdditionalComment = this.newEquipmentAdditionalComment.value
        const newEquipmentAvailableValue = this.newEquipmentAvailable.value
        const newEquipmentNotAvailableValue = this.newEquipmentNotAvailable.value
        const newEquipmentImageValue = this.newEquipmentImageLink.value
        const newEquipmentCustomerValue = this.newEquipmentCustomer.value
        const newEquipmentVendorValue = this.newEquipmentVendor.value
    
        
        this.adapter.postEquipment(newEquipmentVendorValue,newEquipmentCustomerValue,newEquipmentName,newEquipmentInventoryNumberValue,newEquipmentCategoryValue,newEquipmentHourlyRateValue,newEquipmentDailyRateValue, newEquipmentMonthlyRateValue,newEquipmentAdditionalComment,newEquipmentAvailableValue,newEquipmentNotAvailableValue,newEquipmentImageValue,newEquipmentHoursNeededValue,newEquipmentDaysNeededValue,newEquipmentMonthsNeededValue)
        .then(equipment => {
            this.equipments.push(new Equipment(equipment))
            this.render()
        })
        
    }

    fetchAndLoadCustomers(){
        this.adapter.getEquipments()
        .then
        (equipments => {
            console.log(equipments)
            equipments.data.forEach(equipment => {
                const newEquipment = {...{id: equipment.id}, ...{type: equipment.type}, ...equipment.attributes}
                this.equipments.push(new Equipment(newEquipment))
            }
        )
            console.log(this.equipments)
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        this.equipmentsContainer.innerHTML = this.equipments.map(equipment => equipment.renderLi()).join('')
    }
}