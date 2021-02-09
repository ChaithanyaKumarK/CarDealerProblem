
function getAudiBmw(inventory){
    var audiBmwArr=[];
    for (i=0;i<Object.keys(inventory).length;i++){
        if(inventory[i].car_make=="Audi"||inventory[i].car_make=="BMW"){
        audiBmwArr.push(inventory[i]);
        }
    }
    
    return JSON.stringify(audiBmwArr);
    
}

module.exports =getAudiBmw;