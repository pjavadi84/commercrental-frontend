class Equipments {
    constructor(){
        this.equipments = []
        this.adapter = new EquipmentsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadEquipments()
    }

    initBindingsAndEventListeners(){
        this.equipmentsContainer = document.getElementById('equipments-container')
        this.equipmentsForm = document.getElementById("new_equipment_form")
        this.newEquipmentName = document.getElementById("equipment-name")
        this.newEquipmentInventoryNumber = document.getElementById("form-inventory-number")
        this.newEquipmentCategory = document.getElementById("category-selection")
        this.newEquipmentAvailable = document.getElementById("available")
        this.newEquipmentNotAvailable = document.getElementById("unavailable")
        this.newEquipmentImageLink = document.getElementById("equipment-image")
        this.equipmentsForm.addEventListener('submit', this.createEquipment.bind(this))
    }

    createEquipment(e){
        e.preventDefault()
        const newEquipmentNameValue = this.newEquipmentName.value
        const newEquipmentInventoryNumberValue = this.newEquipmentInventoryNumber.value
        const newEquipmentCategoryValue = this.newEquipmentCategory.value
        const newEquipmentAvailableValue = this.newEquipmentAvailable.value
        const newEquipmentImageValue = this.newEquipmentImageLink.value
        
        this.adapter.createEquipment(newEquipmentNameValue)
        this.adapter.createEquipment(newEquipmentInventoryNumberValue)
        this.adapter.createEquipment(newEquipmentCategoryValue)
        this.adapter.createEquipment(newEquipmentAvailableValue)
        this.adapter.createEquipment(newEquipmentImageValue)
        debugger
    }

    fetchAndLoadEquipments(){
        this.adapter.getEquipments()
        .then
        (equipments => {
            console.log(equipments)
            equipments.data.forEach(equipment => {
                this.equipments.push(new Equipment(equipment))
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
