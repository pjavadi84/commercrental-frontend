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
        
        // const newEquipmentName = 
        // {name: this.newEquipmentName.value,
        // item_id: this.newEquipmentInventoryNumber.value,
        // category: this.newEquipmentCategory.value,
        // availability: this.newEquipmentAvailable.value,
        // unavailable: this.newEquipmentNotAvailable.value,
        // image: this.newEquipmentImageLink.value}

        // this.adapter.postEquipment(newEquipmentName)
        // .then(equipment => {
        //     console.log(equipment);
        //     debugger
        // })

        const newEquipmentName = this.newEquipmentName.value
        const newEquipmentInventoryNumber = this.newEquipmentInventoryNumber.value
        const newEquipmentCategoryValue = this.newEquipmentCategory.value
        const newEquipmentAvailableValue = this.newEquipmentAvailable.value
        const newEquipmentNotAvailableValue = this.newEquipmentNotAvailable.value
        const newEquipmentImageValue = this.newEquipmentImageLink.value
    
        
        this.adapter.postEquipment(newEquipmentName,newEquipmentInventoryNumber,newEquipmentCategoryValue,newEquipmentAvailableValue, newEquipmentNotAvailableValue,newEquipmentImageValue)
        .then(equipment => {
            this.equipments.push(new Equipment(equipment))
            this.render()
        })
        
    }

    fetchAndLoadEquipments(){
        this.adapter.getEquipments()
        .then
        (equipments => {
            // console.log(equipments)
            equipments.data.forEach(equipment => {
                debugger
                const newEquipment = {...{id: equipment.id}, ...{type: equipment.type}, ...equipment.attributes}
                // debugger
            // this.equipments.push(new Equipment(equipment))
                this.equipments.push(new Equipment(newEquipment))
            }
        )
            // console.log(this.equipments)
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        this.equipmentsContainer.innerHTML = this.equipments.map(equipment => equipment.renderLi()).join('')
    }
}
