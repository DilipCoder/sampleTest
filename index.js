// constants
const STRING = 'string';
const NUMBER = 'number';
const BOOLEAN = 'boolean';

// functions
function validate(data, Schema){
   let keys = Object.keys(data);
   for(let i =0; i< keys.length; i++){
       if(typeof(Schema[keys[i]]) == 'function'){
           let enumValidate = Schema[keys[i]];
           let res = enumValidate(data[keys[i]])
           if(!res){
               return false
           }
       }
    else if(typeof(data[keys[i]]) !== Schema[keys[i]]){
        return false;
    }
   }
   return true;
}

function Enum(data){
    return function en(d){
        if(!data.includes(d)){
            return false
        } else {
            return true;
        }
    }
}


module.exports = {
    validate,
    STRING,
    NUMBER,
    BOOLEAN,
    Enum
};

