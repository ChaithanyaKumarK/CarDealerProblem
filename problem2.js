
function findLastCar(inventory){

    var lastIndex = (Object.keys(inventory).length) - 1;
    return "Last car is a "+ inventory[lastIndex].car_make+" "+inventory[lastIndex].car_model;
    
}

module.exports =findLastCar;