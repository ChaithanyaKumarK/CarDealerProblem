
function getOrderedCarList(inventory){
    var carArray=[];
    for (i=0;i<Object.keys(inventory).length;i++){
        carArray.push(inventory[i].car_model.toString());
    }

    return carArray.sort();
}

module.exports = getOrderedCarList;