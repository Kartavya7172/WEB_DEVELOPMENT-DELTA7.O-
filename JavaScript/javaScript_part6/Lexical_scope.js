function outerFunc(){
    let x= 5;
    let y = 6;
    function innerfunc(){
        console.log(x);
    }

    innerfunc();
}

outerFunc();