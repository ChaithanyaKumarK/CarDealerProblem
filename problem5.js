var arrayOfYearsFn = require ("./problem4");


function getCarOlderYear(inventory,year){
    var arrayOfYears = arrayOfYearsFn(inventory);
    var yearArray=[];
    
    for (i=0;i<arrayOfYears.length;i++){
        if(year<=arrayOfYears[i])break;
        yearArray.push(arrayOfYears[i]);
    }
    
    return yearArray.length;
    
}
module.exports =getCarOlderYear;