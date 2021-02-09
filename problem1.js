
function searchById(inventory,id){
    return "Car "+id+" is a "+inventory[id-1].car_year+" "+inventory[id-1].car_make+" "+inventory[id-1].car_model;
}

module.exports =searchById;