let variabile = 10;

// if (typeof(variabile) == "number") {
//     console.log("È un numero");
    
// } else if (typeof(variabile) == "string") {
//     console.log("È una stringa");
    
// }   else if (typeof(variabile) == "boolean") {
//         console.log("È un booleano");
    
// }


switch (typeof(variabile)) {
    case 'number':
        console.log("È un numero");  
        break;
    
    case 'string':
        console.log("È un stringa");  
        break;    

    case 'boolean':
        console.log("È un booleano");  
        break;    

    default:
        console.log("Indefinito");
        break;
}