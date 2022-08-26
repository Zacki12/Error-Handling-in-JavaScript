

//Assignment No1:  Error Handling//
//Muzammil Idrees Code//

//x^2+5y

function myCalc(){
    try{


        // let x = (2*2);
        // let y = (3*5);
        // let z = x+y;

        const x = 2*2;
        const y = 3*5;

        const sum = x+y;
        // myCalc(x,y);
        // myCalc(2,3);

        console.log('The sum of ' + x + ' and ' + y + ' is: ' + sum);

    }catch(err){
        console.log("Error:"+err)
    }
   
}

myCalc()