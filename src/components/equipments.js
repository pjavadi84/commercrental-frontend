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
        const equipmentsContainer = document.getElementById('equipments-container')
        equipmentsContainer.innerHTML = this.equipments.map(equipment => 
            `
            <div equipment-id=${equipment.id}>
                <ul>
                    <img src="${equipment.image} alt="${equipment.name}">
                    <br>
                    <li><strong>Inventory_Id#: </strong>${equipment.id}</li>
                    <li><strong>price/hour: </strong>${equipment.price_per_hour}</li>
                    <li><strong>price/day: </strong>${equipment.price_per_day}</li>
                    <li><strong>price/month: </strong>${equipment.price_per_month}</li>
                    <li><strong>available for pickup? </strong>${equipment.pickup}</li>
                    <li><strong>available for delivery?</strong>${equipment.delivery}</li>
                    <li>Provided by: ${equipment.business_name}</li>
                    <button equipment-id= ${equipment.id}>Edit</button>
                    <button equipment-id= ${equipment.id}>Rent</button>

                    <li>${equipment.name}</li>
                    <li>${equipment.item_id}</li>
                </ul>
            </div>
        `
    ).join('')
       
    }
}
