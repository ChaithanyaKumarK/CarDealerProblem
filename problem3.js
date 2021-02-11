
function getOrderedCarList(inventory){
    var carArray=[];
    if(inventory==undefined||inventory.length===0){
        return carArray;
    }
    
    for (let i=0;i<Object.keys(inventory).length;i++){
        carArray.push(inventory[i].car_model);
    }

    return carArray.sort();
}

module.exports = getOrderedCarList;