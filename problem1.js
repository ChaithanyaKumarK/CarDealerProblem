const { push } = require("./inventory");

function searchById(inventory,id){
    var result =[];
    if(inventory==undefined||id==undefined){
        return result;
    }
    
    var idObject;
    var idExistFlag= false;
    for (let i=0;i<Object.keys(inventory).length;i++){
        if(id==inventory[i].id){
            idObject=inventory[i];
            idExistFlag=true;
            break;
        }
    }
    if(idExistFlag==false){
        return result;
    }
    return idObject;
}

module.exports =searchById;