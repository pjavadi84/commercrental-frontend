class Equipment {
    constructor(equipment){
        // this.id = EquipmentJSON.id 
        // this.name = EquipmentJSON.attributes.name
        // this.item_id = EquipmentJSON.attributes.item_id
        // this.category = EquipmentJSON.attributes.category
        // this.availability = EquipmentJSON.attributes.availability
        // this.price_per_hour = EquipmentJSON.attributes.price_per_hour
        // this.price_per_day = EquipmentJSON.attributes.price_per_day
        // this.price_per_month = EquipmentJSON.attributes.price_per_month
        // this.pickup = EquipmentJSON.attributes.pickup
        // this.delivery = EquipmentJSON.attributes.delivery
        // this.additional_comments = EquipmentJSON.attributes.additional_comments
        // this.customer_id = EquipmentJSON.attributes.customer_id
        // this.vendor_id = EquipmentJSON.attributes.vendor_id
        // this.image = EquipmentJSON.attributes.image
        this.id = equipment.id 
        this.name = equipment.name
        this.item_id = equipment.item_id
        this.category = equipment.category
        this.availability = equipment.availability
        this.price_per_hour = equipment.price_per_hour
        this.price_per_day = equipment.price_per_day
        this.price_per_month = equipment.price_per_month
        this.pickup = equipment.pickup
        this.delivery = equipment.delivery
        this.additional_comments = equipment.additional_comments
        this.customer_id = equipment.customer_id
        this.vendor_id = equipment.vendor_id
        this.image = equipment.image
        this.hours_required = equipment.hours_required
        this.days_required = equipment.days_required
        this.montths_required = equipment.montths_required
    }

    renderLi() {
        return `
        <div equipment-id=${this.id}>
            <ul>
                <img src="${this.image}" width="128" height="128">
                <br>

                <h3>${this.name}</h3>
        
                <li><strong>Inventory_Id#: </strong>${this.item_id}</li>
                <li><strong>Category: </strong>${this.category}</li>
                <li><strong>price/hour: </strong>$ ${this.price_per_hour}</li>
                <li><strong>price/day: </strong>$ ${this.price_per_day}</li>
                <li><strong>price/month: </strong>$ ${this.price_per_month}</li>
                <li><strong>available for pickup? </strong>${ this.pickup ? 'yes' : 'no'}</li>
                <li><strong>available for delivery?</strong>${this.delivery ? 'yes' : 'no'}</li><br>
                <p><strong>Rental Duration</strong></p>
                <li><strong>Rent per hour:</strong>${this.hours_required}</li>
                <li><strong>Rent per day:</strong>${this.days_required}</li>
                <li><strong>Rent per month:</strong>${this.montths_required}</li>
                <li><strong>remarks:</strong>${this.additional_comments}</li>
                <button equipment-id= ${this.id}>Edit</button>
                <button equipment-id= ${this.id}>Delete</button>

            </ul>
        </div>
    `
    }
}