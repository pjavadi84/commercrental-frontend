class Equipment {
    constructor(EquipmentJSON){
        this.id = EquipmentJSON.id 
        this.name = EquipmentJSON.attributes.name
        this.item_id = EquipmentJSON.attributes.item_id
    }
}