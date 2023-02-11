function greeting(){
    let userName = 'Leonel';
    console.log(userName);

    if(userName === 'Leonel'){
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName); //error de referencia, tiene solo Function Scope



