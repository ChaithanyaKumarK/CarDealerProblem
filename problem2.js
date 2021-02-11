
function findLastCar(inventory){
    var result =[];
    if(inventory==undefined||inventory.length===0){
        return result;
    }

    var lastIndex = (Object.keys(inventory).length) - 1;
    return inventory[lastIndex];
    
}

module.exports =findLastCar;