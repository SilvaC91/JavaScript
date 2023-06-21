let car = {
    'name' : 'Mini',
    'color' : 'grey'

}

for(const key in car){
    console.log(car[key]);
}


// extra, stampa nomi chiavi
for(const key in car){
    console.log(key);
}

