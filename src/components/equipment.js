class Equipment {
    constructor(EquipmentJSON){
        this.id = EquipmentJSON.id 
        this.name = EquipmentJSON.attributes.name
        this.item_id = EquipmentJSON.attributes.item_id
        this.category = EquipmentJSON.attributes.category
        this.availability = EquipmentJSON.attributes.availability
        this.price_per_hour = EquipmentJSON.attributes.price_per_hour
        this.price_per_day = EquipmentJSON.attributes.price_per_day
        this.price_per_month = EquipmentJSON.attributes.price_per_month
        this.pickup = EquipmentJSON.attributes.pickup
        this.delivery = EquipmentJSON.attributes.delivery
        this.additional_comments = EquipmentJSON.attributes.additional_comments
        this.customer_id = EquipmentJSON.attributes.customer_id
        this.vendor_id = EquipmentJSON.attributes.vendor_id
        this.image = EquipmentJSON.attributes.image
    }

    renderLi() {
        return `
        <div equipment-id=${this.id}>
            <ul>
                <img src="${this.image}" width="128" height="128">
                <br>

                <h3>${this.name}</h3>
        
                <li><strong>Inventory_Id#: </strong>${this.id}</li>
                <li><strong>Category: </strong>${this.category}</li>
                <li><strong>available?</strong>${this.availability}</li>
                <li><strong>price/hour: </strong>$ ${this.price_per_hour}</li>
                <li><strong>price/day: </strong>$ ${this.price_per_day}</li>
                <li><strong>price/month: </strong>$ ${this.price_per_month}</li>
                <li><strong>available for pickup? </strong>${ this.pickup ? 'yes' : 'no'}</li>
                <li><strong>available for delivery?</strong>${this.delivery ? 'yes' : 'no'}</li>
                <li><strong>remarks:</strong>${this.additional_comments}</li>
                <button equipment-id= ${this.id}>Edit</button>
                <button equipment-id= ${this.id}>Rent</button>

            </ul>
        </div>
    `
    }
}