
function getArrayOfYears(inventory){
    var yearArray=[];
    for (i=0;i<Object.keys(inventory).length;i++){
        yearArray.push(inventory[i].car_year);
    }

     return yearArray.sort();


    

}

module.exports =getArrayOfYears;