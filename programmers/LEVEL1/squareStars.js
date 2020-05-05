function star(a, b){

    if(a === 0 || b === 0) return;

    let rowPrint = '';
    for(let j = 0; j < a; j++) {
        rowPrint += '*';
    }

    for(let i = 0; i < b; i++) {
        console.log(rowPrint);
    }

}

star(5, 3);
star(2, 2);
star(0, 0);
star(0, 3);
star(3, 0);