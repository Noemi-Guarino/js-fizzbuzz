const target = document.getElementById('target');

for (let i = 1; i < 101; i++){

    let div = document.createElement("div");
    div.classList.add("square");

    if (i % 3 == 0 && i % 5 == 0 ){
        console.log("FizzBuzz");
        div.append("FizzBuzz");
        div.classList.add("pink");
    }
    else if (i % 3 == 0){
        console.log("Fizz");
        div.append("Fizz");
        div.classList.add("acquamarine");
    }   
    else if (i % 5 == 0){
        console.log("Buzz");
        div.append("Buzz");
        div.classList.add("yellow");
    }    
    else {
        console.log(i);
        div.append("i");
        div.classList.add("blue");
    } 
    
    target.append(div);

}

