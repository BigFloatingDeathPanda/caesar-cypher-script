const caesar = function(myString, myShift) {
    let alphabetCaps = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

    let alphabetLower = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

    let caesarCaps = [...alphabetCaps];
    let caesarLower = [...alphabetLower];

    if (myShift >= 0) {
        //find and save first element.
        //remove first element
        //add saved first element to the end
        //Do this for both upper and lower case arrays.  This will be your shifted caesar array
        for (let i = 0; i < myShift; i++) {
            let caesarCurrentCap = caesarCaps[0]; 
            caesarCaps.shift(); 
            caesarCaps.push(caesarCurrentCap); 
            
            let caesarCurrentLower = caesarLower[0]; 
            caesarLower.shift(); 
            caesarLower.push(caesarCurrentLower); 
        };
    } else {
        //if the shift is less than 0, I want to shift the other way.
        //find and save last element.
        //remove last element. (pop)
        //add remov'd last element to front. (unshift)
        //(could almost certainly do this in 2 lines instead of 3)
        //Do this for both upper and lower case arrays.  This will be your shifted caesar array
        for (let i = myShift; i < 0; i++) {
            let caesarCurrentCap = caesarCaps[caesarCaps.length-1];
            caesarCaps.pop();
            caesarCaps.unshift(caesarCurrentCap);

            let caesarCurrentLower = caesarLower[caesarLower.length-1];
            caesarLower.pop();
            caesarLower.unshift(caesarCurrentLower);
        }
    };




    let arrayedMyString = Array.from(myString);

    let finalCaesarCypher = [];
    let index = 0;

    for (let i = 0; i < arrayedMyString.length; i++) {
        if (isThisALetter(alphabetLower, arrayedMyString[i])) {
            //then this current letter is a lower case letter
            //So, find the alphabet index of this letter.
            index = alphabetLower.indexOf(arrayedMyString[i]);
            //And add the cyphered letter to the final cypher
            finalCaesarCypher.push(caesarLower[index]);
        } else if (isThisALetter(alphabetCaps, arrayedMyString[i])) {
            //then this current letter is upper case
            index = alphabetCaps.indexOf(arrayedMyString[i]);
            finalCaesarCypher.push(caesarCaps[index]);
        } else {
            index = 0;
            finalCaesarCypher.push(arrayedMyString[i]);
        };
    };

    return(finalCaesarCypher.join(""));


    
    //.map maybe looking good here
    //Pseudocode:
    // Array called ceasarCaps and cesarLower.  Just the alphabet.  loop over number and remove from front and add to end to create cypher.
            //DID THIS
    // Then, replace array[i].alphabet with caesar[i].caesarCaps (or whatever);
    // somehow .map is giong to help here.
}

function isThisALetter(arr, val) {
    return arr.some(function(arrVal) {
        return val == arrVal;
    });
}


//caesar('Hello, World!', -29);


module.exports = caesar
