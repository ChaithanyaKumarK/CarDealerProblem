var arrayOfYearsFn = require ("./problem4");


function getCarOlderYear(inventory,year){
    
    var yearArray=[];
    if(inventory==undefined||inventory.length===0){
        return yearArray;
    }

    var arrayOfYears = arrayOfYearsFn(inventory);

    if(year>=arrayOfYears[0]&&year<=arrayOfYears[arrayOfYears.length-1]){
        for (let i=0;i<arrayOfYears.length;i++){
            if(year<=arrayOfYears[i])break;
            yearArray.push(arrayOfYears[i]);
         }
    }
    return yearArray;
}
module.exports =getCarOlderYear;