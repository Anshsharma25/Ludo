console.log("Ansh Sharma");
console.log("Here, I have started to finish this ");

const myArray = ["images/dice_1.png", "images/dice_2.png", "images/dice_6.png", "images/dice_5.png", "images/dice_4.png", "images/dice_3.png"];
let randomElement;

const boxArray = ["second_box", "box", "third_col", "third_col1"];

const colors = { second_box: "yellow", box: "aqua", third_col: "purple", third_col1: "red" };

console.log("You have an access to select the gotties", 'yellow turn');
let currentTurn = 0;
document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray";
const object = { p1: 'Token_moving15', p2: '', p3: '', p4: '' };
const objecty = { y1: 'Token_moving41', y2: '', y3: '', y4: '' };
const objectr = { r1: 'Token_moving28', r2: '', r3: '', r4: '' };
const objectb = { b1: 'Token_moving2', b2: '', b3: '', b4: '' };


document.getElementById('my-button').addEventListener('click', () => {
    randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(randomElement, "---randomElement----");
    document.getElementById('image_dice').src = randomElement;

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



document.getElementById('first_blueimage').addEventListener('click',
    function move_gitti() {
        var number = +objectb.b1.match(/\d+/)[0];
        var newNum = number + 5;
        var newStr = objectb.b1.replace(/\d+/, newNum);

        console.log(newStr);
        console.log(document.getElementById("first_blueimage"))



        var elements = document.getElementsByClassName(newStr);
        if (elements.length > 0) {
            var firstElement = elements[0];
            firstElement.appendChild(document.getElementById("first_blueimages"));
            console.log(firstElement.className);
            objectb.b1 = firstElement.className;
        } else {
            console.log("No element found with class name", newStr);
        }


        // when it moves another home thats why we create the arr of middle once
        // let arr = ['Token_moving13', 'Token_moving26', 'Token_moving51'];
        // if (arr.includes(newStr)) {
        //     document.getElementsByClassName('Token_moving1')[0].appendChild(document.getElementById('fourthyellowimg'));
        // }
    })


//  this is  gotti is for purple color

document.getElementById('first_purpleimage').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        var number = +object.p1.match(/\d+/)[0];
        var newNumber = number + 5;
        var newString = +object.p1.replace(/\d+/, newNumber);

        console.log(newString);
        // debugger
        console.log(document.getElementById("first_purpleimage"))
        document.getElementsByClassName(newString)[0].appendChild(document.getElementById("first_purpleimage"));
        const className = document.getElementsByClassName(newString)[0].className
        console.log(className)
        object.p1 = className
        console.log(object.p1, "p11")
        data = true

        // document.getElementById('move').append(document.getElementById("image3"));
    })

//  this is  gotti is for red color-------------------------

document.getElementById('second_redimage').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        // document.getElementById('redimage').append(document.getElementById("first_redimage"));
        // document.getElementById('move').append(document.getElementById("image3"));
        var number = +objectr.r1.match(/\d+/)[0];
        var newNum = number + 5;
        var newStr = objectr.r1.replace(/\d+/, newNum);
        console.log(newStr);
        console.log(document.getElementById("second_redimage"))
        document.getElementsByClassName(newStr)[0].appendChild(document.getElementById("second_redimage"));
        const className = document.getElementsByClassName(newStr)[0].className
        console.log(className)
        object.p1 = className
        console.log(objectr.r1, "r11")
    })
//  this is  gotti is for yellow color
let yellowOneRound = 0;

document.getElementById('fourthyellowimg').addEventListener('click',
    function move_gitti() {
        // let round1 = document.getElementsByClassName("Token_moving39")
        // let round2 = document.getElementsByClassName("Token_moving34")
        let arr = ['yellow1', 'yellow2', 'yellow3', 'yellow4', 'yellow5']
        let newy = arr;
        // if (round1 || round2) {
        //     console.log('9999999999999999999s')
        //     document.getElementsByClassName(newy[0])[0].appendChild(document.getElementById("fourthyellowimg"));
        // }

        var number = +objecty.y1.match(/\d+/)[0];
        
        if (number > 31 && number < 40) {
            yellowOneRound = 2;
        }
        
        if (yellowOneRound == 0) {
            newNum = 41; yellowOneRound = 1;
        }else {
            newNum = number + 5;
        }

        if ((yellowOneRound == 2) && (newNum > 38)) {
            newNum = `yellow_${newNum - 38}`
        }
        console.log(yellowOneRound, newNum);
        if (newNum > 52) {
            newNum = newNum - 52;
        }
        var newStr = objecty.y1.replace(/\d+/, newNum);
        console.log(document.getElementsByClassName('Token_movingyellow_4')[0]);
        console.log('________________', newStr);
        console.log('=============', document.getElementsByClassName(newStr)[0]);
        document.getElementsByClassName(newStr)[0].appendChild(document.getElementById("fourthyellowimg"));
        const className = document.getElementsByClassName(newStr)[0].className
        console.log(className)
        objecty.y1 = className
        console.log(objecty.y1, "y11")

        // when it moves another home thats why we create the arr of middle once

    })