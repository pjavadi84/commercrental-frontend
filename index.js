const equipmentEndPoint = "http://localhost:3000/api/v1/equipments"

document.addEventListener('DOMContentLoaded', () => {
    getEquipment();
})

function getEquipment(){
    fetch(equipmentEndPoint)
    .then(response => response.json())
    .then(equipments => {
        equipments.data.forEach(equipment => {
            const equipmentInformation = `
            <div equipment-id=${equipment.id}>
                <h3>${equipment.attributes.name}</h3>
                <ul>
                    <img src="${equipment.attributes.image} alt="${equipment.attributes.name}">
                    <br>
                    <li><strong>Inventory_Id#: </strong>${equipment.attributes.id}</li>
                    <li><strong>price/hour: </strong>${equipment.attributes.price_per_hour}</li>
                    <li><strong>price/day: </strong>${equipment.attributes.price_per_day}</li>
                    <li><strong>price/month: </strong>${equipment.attributes.price_per_month}</li>
                    <li><strong>available for pickup? </strong>${equipment.attributes.pickup}</li>
                    <li><strong>available for delivery?</strong>${equipment.attributes.delivery}</li>
                    <li>Provided by: ${equipment.attributes.vendor.business_name}</li>
                <button equipment-id= ${equipment.id}>Edit</button>
                <button equipment-id= ${equipment.id}>Rent</button>
                </ul>
            </div>
            <br><br>`;
            

            document.querySelector("#equipment-container").innerHTML += equipmentInformation;
        });
    })
}