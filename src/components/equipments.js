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
        (equipments => {
            console.log(equipments)
            equipments.data.forEach(equipment => 
            this.equipments.push(new Equipment(equipment)))
            console.log(this.equipments)
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const equipmentsArray = this.equipments.map(equipment => `<li>${equipment.name}</li>`)
        console.log(equipmentsArray);
        const equipmentsContainer = document.getElementById('equipments-container')
       
    }
}
