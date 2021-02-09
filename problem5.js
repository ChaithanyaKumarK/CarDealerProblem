var arrayOfYearsFn = require ("./problem4");


function getCarOlderYear(inventory,year){
    var arrayOfYears = arrayOfYearsFn(inventory);
    var yearArray=[];
    if(year>=arrayOfYears[0]&&year<=arrayOfYears[arrayOfYears.length-1]){
    for (i=0;i<arrayOfYears.length;i++){
        if(year<=arrayOfYears[i])break;
        yearArray.push(arrayOfYears[i]);
    }
    
    return yearArray.length;
    }else{
        return "";
    }
}
module.exports =getCarOlderYear;