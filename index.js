console.log("Ansh Sharma");
console.log("Here, I have started to finish this ");

const myArray = [1, 2, 6, 5, 4, 3];
let randomElement;

const boxArray = ["second_box", "box", "third_col", "third_col1"];

//  the variable color is changing the previous turn color of boxArray 

const colors = { second_box: "yellow", box: "aqua", third_col: "purple", third_col1: "red" };

console.log("You have an access to select the gotties", 'yellow turn');
let currentTurn = 0;
document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray";

// This is for finding the current position of the images 

const objectp = { p1: 'Token_moving15', p2: '', p3: '', p4: '' };
const objecty = { y1: 'Token_moving41', y2: '', y3: '', y4: '' };
const objectr = { r1: 'Token_moving28', r2: '', r3: '', r4: '' };
const objectb = { b1: 'Token_moving2', b2: '', b3: '', b4: '' };

// button function  on clicking the dice

document.getElementById('my-button').addEventListener('click', (e) => {
    randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    // console.log(randomElement, "---randomElement----");
    console.log(e.target.src);
    e.target.src = `./images/${randomElement}.png`;
    console.log(randomElement);

    // if (randomElement === 6) {
    //     return randomElement;
    // // } else {
    // //     document.querySelector('my-button').disabled == true; // Disable the 'my-button' if it's not a 6
    // // }
    if(randomElement == 6){
        let recall =  document.getElementById('my-button')
        console.log(recall);
    }
    else if(randomElement != 6){
        document.getElementById('my-button').disable == true;s
    }





    const currentBox = boxArray[currentTurn];
    const currentColor = colors[currentBox];
    document.getElementById(currentBox).style.backgroundColor = currentColor;

    if (currentTurn > 0) {
        const previousBox = boxArray[currentTurn - 1];
        document.getElementById(previousBox).style.backgroundColor = "";
    }
    currentTurn = (currentTurn + 1) % boxArray.length;
    document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray";



});

// --------------------------------------------------------------this is for blue token ------------------------------------------------------------------------------


let blueOneRound = 0;
document.getElementById('first_blueimage').addEventListener('click', blue_gitti)
function blue_gitti() {

    let arr = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5']
    let number = +objectb.b1.match(/\d+/)[0];

    if (number > 44 && number < 52) {
        blueOneRound = 2;
    }

    if (blueOneRound == 0) {
        newNum = 2; blueOneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((blueOneRound == 2) && (newNum > 52)) {
        newNum = `blue_${newNum - 52}`

    }
    // if (arr.length > 0) {
    //     // if (arr1.length - 1 !== null) {
    //         document.getElementsByClassName('ludohome')[0].appendChild(document.getElementById('second_redimage'));
    //     // }
    // } else {
    //     document.getElementById('second_redimage').appendChild(document.getElementsByClassName('ludohome')[0]);
    // }
    // console.log(blueOneRound, newNum);
    let newStr = objectb.b1.replace(/\d+/, newNum);
    // console.log(document.getElementsByClassName('blue4')[0]);

    console.log(newStr);
    console.log('=============', document.getElementsByClassName(newStr)[0]);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('first_blueimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    console.log(className)
    objectb.b1 = className
}


//  ---------------------------------------------------------------this is  gotti is for purple color---------------------------------------------------------------------------------

let purpleOneRound = 0;
document.getElementById('first_purpleimage').addEventListener('click', purple_gitti)
function purple_gitti() {
    let arr1 = ['purple1', 'purple2', 'purple3', 'purple4', 'purple5']
    let number = +objectp.p1.match(/\d+/)[0];

    if (number > 5 && number < 13) {
        purpleOneRound = 2;
    }

    if (purpleOneRound == 0) {
        newNum = 15; purpleOneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((purpleOneRound == 2) && (newNum > 13)) {
        newNum = `purple_${newNum - 13}`

    }
    // if (arr1.length > 0) {
    //     // if (arr1.length - 1 !== null) {
    //         document.getElementsByClassName('ludohome')[0].appendChild(document.getElementById('second_redimage'));
    //     // }
    // } else {
    //     document.getElementById('second_redimage').appendChild(document.getElementsByClassName('ludohome')[0]);
    // }

    console.log({ round: purpleOneRound, currentPosition: number, newPosition: newNum });

    if (newNum > randomElement2 && purpleOneRound == 1) {
        newNum = newNum - randomElement2;
    }
    let newStr = objectp.p1.replace(/\d+/, newNum);

    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('first_purpleimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    console.log(className)
    objectp.p1 = className




}
//  ---------------------------------------------------------------this is  gotti is for red color----------------------------------------------------------------------

let redOneRound = 0;
document.getElementById('second_redimage').addEventListener('click', red_gitti)
function red_gitti(e) {
    let arr1 = ['red1', 'red2', 'red3', 'red4', 'red5']
    let number = +objectr.r1.match(/\d+/)[0];
    console.log(objectr.r1);


    if (number > 18 && number < 27) {
        redOneRound = 2;
    }

    if (redOneRound == 0) {
        newNum = 28; redOneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((redOneRound == 2) && (newNum > 26)) {
        newNum = `red_${newNum - 26}`

    }
    if (arr1.length > 0) {
        if (arr1.length - 1 !== null) {
            document.getElementsByClassName('ludohome')[0].appendChild(document.getElementById('second_redimage'));
        }
    } else {
        document.getElementById('second_redimage').appendChild(document.getElementsByClassName('ludohome')[0]);
        document
    }



    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: redOneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectr.r1.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('second_redimage'));
    objectr.r1 = newStr
}


//  ----------------------------------------------------------------this is  gotti is for yellow color --------------------------------------------------------------------------------------------------------------------------------------
let yellowOneRound = 0;
document.getElementById('fourthyellowimg').addEventListener('click', yellow_gitti)
function yellow_gitti(e) {
    // let arr = ['red1', 'red2', 'red3', 'red4', 'red5']
    let number = +objecty.y1.match(/\d+/)[0];
    // console.log(objectr.r1);

    if (number > 33 && number < 40) {
        yellowOneRound = 2;
    }

    if (yellowOneRound == 0) {
        newNum = 41; yellowOneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((yellowOneRound == 2) && (newNum > 39)) {
        newNum = `yellow_${newNum - 39}`

    }
    // if (arr1.length > 0) {
    //     if (arr1.length - 1 !== null) {
    //         document.getElementsByClassName('ludohome')[0].appendChild(document.getElementById('second_redimage'));
    //     }
    // } else {
    //     document.getElementById('second_redimage').appendChild(document.getElementsByClassName('ludohome')[0]);
    // }

    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: yellowOneRound, currentPosition: number, newPosition: newNum });
    let newStr = objecty.y1.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('fourthyellowimg'));
    objecty.y1 = newStr
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
}