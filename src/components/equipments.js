class Equipments {
    constructor(){
        this.equipments = []
        this.adapter = new EquipmentsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadEquipments()
    }

    fetchAndLoadEquipments(){
        this.adapter.getEquipments()
        .then
        (equipments => {equipments.data.forEach(equipment => 
            this.equipments.push(equipment))
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const equipmentContainer = document.getElementById('equipments-container')
        equipmentContainer.innerHTML = "my equipments are: "
        console.log("my equipmnts are: ", this.equipments)
    }
}
