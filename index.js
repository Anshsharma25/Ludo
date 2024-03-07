console.log("Ansh Sharma");
console.log("Here, I have started to finish this");

let yellowOneRound = 0;

const myArray = [1, 2, 6, 5, 4, 3];
let randomElement;
const boxArray = ["second_box", "box", "third_col", "third_col1"];

//  changing the previous turn color of boxArray 
const colors = { second_box: "yellow", box: "aqua", third_col: "purple", third_col1: "red" };
console.log("You have an access to select the gotties", 'yellow turn');
let currentTurn = 0;
document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray";

// This is representing of  starting position of the images 
const objectp = { p1: 'Token_moving15', p2: 'Token_moving15', p3: 'Token_moving15', p4: 'Token_moving15' };
const objecty = { y1: 'Token_moving41', y2: 'Token_moving41', y3: 'Token_moving41', y4: 'Token_moving41' };
const objectr = { r1: 'Token_moving28', r2: 'Token_moving28', r3: 'Token_moving28', r4: 'Token_moving28' };
const objectb = { b1: 'Token_moving2', b2: 'Token_moving2', b3: 'Token_moving2', b4: 'Token_moving2' };

// button function  on clicking the dice
document.getElementById('my-button').addEventListener('click', (e) => {
    randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(e.target.src);
    e.target.src = `./images/${randomElement}.png`;
    console.log(randomElement);

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
// ********************************************************************************************************************************************
function cuttingtoken(newPosition) {
    let bluePosition = parseInt(objectb.b1.match(/\d+/)[0]);
    let purplePosition = parseInt(objectp.p1.match(/\d+/)[0]);
    let redPosition = parseInt(objectr.r1.match(/\d+/)[0]);
    let yellowPosition = parseInt(objecty.y1.match(/\d+/)[0]);

    console.log({newPosition, bluePosition , yellowPosition});
    if (newPosition === purplePosition) {
        let cuttingb = document.getElementById('gitti_1').appendChild(document.getElementById('first_purpleimage'));
        objectp.p1 = "Token_moving15";
        console.log("Blue and purple tokens collided!");
        console.log(cuttingb)
    }
    if (newPosition === redPosition) {
        let cuttingr = document.getElementById('gitti-1').appendChild(document.getElementById('first_redimage'));
        objectr.r1 = "Token_moving28";
        console.log(cuttingr);
        console.log("Blue and red tokens collided!");
    }
    if (newPosition === yellowPosition) {
        let cuttingy = document.getElementById('gitti_down4').appendChild(document.getElementById('fourthyellowimg'));
        objecty.y1 = 'Token_moving41';
        console.log(cuttingy);
        console.log("Blue and yellow tokens collided!");
    }
    if (newPosition === bluePosition) {
        let cuttingy = document.getElementById('gitti').appendChild(document.getElementById('first_blueimage'));
        objectb.b1 = "Token_moving2"
        console.log(cuttingy);
        console.log("Blue and yellow tokens collided!");
    }
}
// --------------------------------------------------------------this is for blue token ------------------------------------------------------------------------------
let blueOneRound = 0;
document.getElementById('first_blueimage').addEventListener('click', blue1)
function blue1() {
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
    let newStr = objectb.b1.replace(/\d+/, newNum);
    cuttingtoken(newNum);
    console.log(newStr);
    console.log('=============', document.getElementsByClassName(newStr)[0]);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('first_blueimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    console.log(className)
    objectb.b1 = className
}
let blue2OneRound = 0;
document.getElementById('second_blueimage').addEventListener('click', blue2)
function blue2() {
    let number = +objectb.b2.match(/\d+/)[0];
    if (number > 44 && number < 52) {
        blue2OneRound = 2;
    }
    if (blue2OneRound == 0) {
        newNum = 2; blue2OneRound = 1;
    } else {
        newNum = number + randomElement;
    }
    if ((blue2OneRound == 2) && (newNum > 52)) {
        newNum = `blue_${newNum - 52}`
    }
    let newStr = objectb.b2.replace(/\d+/, newNum);
    console.log(newStr);
    console.log('=============', document.getElementsByClassName(newStr)[0]);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('second_blueimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    console.log(className)
    objectb.b2 = className
}
let blue3OneRound = 0;
document.getElementById('third_blueimage').addEventListener('click', blue3)
function blue3() {
    let number = +objectb.b3.match(/\d+/)[0];
    if (number > 44 && number < 52) {
        blue3OneRound = 2;
    }

    if (blue3OneRound == 0) {
        newNum = 2; blue3OneRound = 1;
    } else {
        newNum = number + randomElement;
    }
    if ((blue3OneRound == 2) && (newNum > 52)) {
        newNum = `blue_${newNum - 52}`
    }
    let newStr = objectb.b3.replace(/\d+/, newNum);
    console.log(newStr);
    console.log('=============', document.getElementsByClassName(newStr)[0]);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('third_blueimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    console.log(className)
    objectb.b3 = className
}
let blue4OneRound = 0;
document.getElementById('fourth_blueimage').addEventListener('click', blue4)
function blue4() {
    let number = +objectb.b4.match(/\d+/)[0];
    if (number > 44 && number < 52) {
        blue4OneRound = 2;
    }
    if (blue4OneRound == 0) {
        newNum = 2; blue4OneRound = 1;
    } else {
        newNum = number + randomElement;
    }
    if ((blue4OneRound == 2) && (newNum > 52)) {
        newNum = `blue_${newNum - 52}`
    }
    let newStr = objectb.b4.replace(/\d+/, newNum);
    console.log(newStr);
    console.log('=============', document.getElementsByClassName(newStr)[0]);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('fourth_blueimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    console.log(className)
    objectb.b4 = className
}
//  ---------------------------------------------------------------this is  gotti is for purple color---------------------------------------------------------------------------------
let purpleOneRound = 0;
document.getElementById('first_purpleimage').addEventListener('click', purple_gitti)
function purple_gitti() {
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
    if (newNum > 52 && purpleOneRound == 1) {
        newNum = newNum - 52;
    }
    console.log({ round: purpleOneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectp.p1.replace(/\d+/, newNum);
    cuttingtoken(newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('first_purpleimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    objectp.p1 = newStr;
}
let purple2OneRound = 0;
document.getElementById('second_purpleimage').addEventListener('click', purple1)
function purple1() {
    // let arr1 = ['purple1', 'purple2', 'purple3', 'purple4', 'purple5']
    let number = +objectp.p2.match(/\d+/)[0];
    if (number > 5 && number < 13) {
        purple2OneRound = 2;
    }
    if (purple2OneRound == 0) {
        newNum = 15; purple2OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((purple2OneRound == 2) && (newNum > 13)) {
        newNum = `purple_${newNum - 13}`

    }
    if (newNum > 52 && purple2OneRound == 1) {
        newNum = newNum - 52;
    }
    console.log({ round: purple2OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectp.p2.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('second_purpleimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    objectp.p2 = newStr;

}
let purple3OneRound = 0;
document.getElementById('third_purpleimage').addEventListener('click', purple3)
function purple3() {
    let arr1 = ['purple1', 'purple2', 'purple3', 'purple4', 'purple5']
    let number = +objectp.p3.match(/\d+/)[0];
    if (number > 5 && number < 13) {
        purple3OneRound = 2;
    }
    if (purple3OneRound == 0) {
        newNum = 15; purple3OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((purple3OneRound == 2) && (newNum > 13)) {
        newNum = `purple_${newNum - 13}`
    }
    if (newNum > 52 && purple3OneRound == 1) {
        newNum = newNum - 52;
    }
    console.log({ round: purple3OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectp.p3.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('third_purpleimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    objectp.p3 = newStr;
}
let purple4OneRound = 0;
document.getElementById('fourth_purpleimage').addEventListener('click', purple4)
function purple4() {
    let number = +objectp.p4.match(/\d+/)[0];
    if (number > 5 && number < 13) {
        purple4OneRound = 2;
    }
    if (purple4OneRound == 0) {
        newNum = 15; purple4OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((purple4OneRound == 2) && (newNum > 13)) {
        newNum = `purple_${newNum - 13}`
    }
    if (newNum > 52 && purple4OneRound == 1) {
        newNum = newNum - 52;
    }
    console.log({ round: purple4OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectp.p4.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('fourth_purpleimage'));
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
    objectp.p4 = newStr;
}
//  ---------------------------------------------------------------this is  gotti is for red color----------------------------------------------------------------------

let redOneRound = 0;
document.getElementById('first_redimage').addEventListener('click', red_gitti)
function red_gitti(e) {
    let number = +objectr.r1.match(/\d+/)[0];
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
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: redOneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectr.r1.replace(/\d+/, newNum);
    cuttingtoken(newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('first_redimage'));
    objectr.r1 = newStr;
}
let red2OneRound = 0;
document.getElementById('second_redimage').addEventListener('click', red2)
function red2(e) {
    let number = +objectr.r2.match(/\d+/)[0];
    if (number > 18 && number < 27) {
        red2OneRound = 2;
    }

    if (red2OneRound == 0) {
        newNum = 28; red2OneRound = 1;
    } else {
        newNum = number + randomElement;
    }
    if ((red2OneRound == 2) && (newNum > 26)) {
        newNum = `red_${newNum - 26}`
    }
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: red2OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectr.r2.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('second_redimage'));
    objectr.r2 = newStr;
}
let red3OneRound = 0;
document.getElementById('third_redimage').addEventListener('click', red3)
function red3(e) {
    let number = +objectr.r3.match(/\d+/)[0];
    if (number > 18 && number < 27) {
        red3OneRound = 2;
    }
    if (red3OneRound == 0) {
        newNum = 28; red3OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((red3OneRound == 2) && (newNum > 26)) {
        newNum = `red_${newNum - 26}`
    }
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: red3OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectr.r3.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('third_redimage'));
    objectr.r3 = newStr;
}
let red4OneRound = 0;
document.getElementById('fourth_redimage').addEventListener('click', red4)
function red4(e) {
    let number = +objectr.r4.match(/\d+/)[0];
    console.log(objectr.r4);
    if (number > 18 && number < 27) {
        red4OneRound = 2;
    }

    if (red4OneRound == 0) {
        newNum = 28; red4OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((red4OneRound == 2) && (newNum > 26)) {
        newNum = `red_${newNum - 26}`

    }
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: red4OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objectr.r4.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('fourth_redimage'));
    objectr.r4 = newStr;
}
//  ----------------------------------------------------------------this is  gotti is for yellow color --------------------------------------------------------------------------------------------------------------------------------------
document.getElementById('fourthyellowimg').addEventListener('click', yellow_gitti)
function yellow_gitti(e) {
    let number = +objecty.y1.match(/\d+/)[0];
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
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: yellowOneRound, currentPosition: number, newPosition: newNum });
    let newStr = objecty.y1.replace(/\d+/, newNum);
    cuttingtoken(newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('fourthyellowimg'));
    objecty.y1 = newStr
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
}
//  third image 
let yellow3OneRound = 0;
document.getElementById('thirdyellowimg').addEventListener('click', yellow3)
function yellow3(e) {
    // let arr = ['yellow1', 'yellow2', 'yellow3', 'yellow4', 'yellow5']
    let number = +objecty.y3.match(/\d+/)[0];
    // console.log(objectr.r1);

    if (number > 33 && number < 40) {
        yellow3OneRound = 2;
    }

    if (yellow3OneRound == 0) {
        newNum = 41; yellow3OneRound = 1;
    } else {
        newNum = number + randomElement;
    }
    if ((yellow3OneRound == 2) && (newNum > 39)) {
        newNum = `yellow_${newNum - 39}`
    }
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: yellow3OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objecty.y3.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('thirdyellowimg'));
    objecty.y3 = newStr
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
}

let yellow2OneRound = 0;
document.getElementById('secondyellowimg').addEventListener('click', yellow2)
function yellow2(e) {
    let number = +objecty.y2.match(/\d+/)[0];
    if (number > 33 && number < 40) {
        yellow2OneRound = 2;
    }

    if (yellow3OneRound == 0) {
        newNum = 41; yellow2OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((yellow2OneRound == 2) && (newNum > 39)) {
        newNum = `yellow_${newNum - 39}`

    }
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: yellow2OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objecty.y2.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('secondyellowimg'));
    objecty.y2 = newStr
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
}

let yellow1OneRound = 0;
document.getElementById('firstyellowimg').addEventListener('click', yellow1)
function yellow1(e) {
    let number = +objecty.y4.match(/\d+/)[0];
    if (number > 33 && number < 40) {
        yellow2OneRound = 2;
    }

    if (yellow1OneRound == 0) {
        newNum = 41; yellow1OneRound = 1;
    } else {
        newNum = number + randomElement;
    }

    if ((yellow1OneRound == 2) && (newNum > 39)) {
        newNum = `yellow_${newNum - 39}`

    }
    if (newNum > 52) {
        newNum = newNum - 52;
    }
    console.log({ round: yellow1OneRound, currentPosition: number, newPosition: newNum });
    let newStr = objecty.y4.replace(/\d+/, newNum);
    document.getElementsByClassName(newStr)[0].appendChild(document.getElementById('firstyellowimg'));
    objecty.y4 = newStr;
    const className = (document.getElementsByClassName(newStr)[0].className).split(' ')[1]
}