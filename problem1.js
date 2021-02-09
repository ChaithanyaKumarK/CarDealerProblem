
function searchById(inventory,id){
    var idObject;
    var idExistFlag= false;
    for (i=0;i<Object.keys(inventory).length;i++){
        if((id-1)==inventory[i].id){
        idObject=inventory[i];
        idExistFlag=true;
        break;
        }
    }
    if(idExistFlag==false){
        return "";
    }
    return "Car "+id+" is a "+idObject.car_year+" "+idObject.car_make+" "+idObject.car_model;
}

module.exports =searchById;