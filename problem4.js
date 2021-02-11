
function getArrayOfYears(inventory){
    var yearArray=[];
    if(inventory==undefined||inventory.length===0){
        return yearArray;
    }
    for (let i=0;i<Object.keys(inventory).length;i++){
        yearArray.push(inventory[i].car_year);
    }

     return yearArray.sort();


    

}

module.exports =getArrayOfYears;