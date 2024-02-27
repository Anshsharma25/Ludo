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
        var newNumber = number + 6;
        var newString = objectb.b1.replace(/\d+/, newNumber);

        console.log(newString);

        console.log(document.getElementById("first_blueimage"))
        let data = false
        if (data) {
            document.getElementsByClassName(objectb.b1)[0].removeChild(document.getElementById("first_blueimage"))
        }
        document.getElementsByClassName(newString)[0].appendChild(document.getElementById("first_blueimage"));
        const className = document.getElementsByClassName(newString)[0].className
        console.log(className)
        object.p1 = className
        console.log(objectb.b1, "p11")
        data = true
    })

//  this is  gotti is for purple color
console.log("=========================================");
document.getElementById('first_purpleimage').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        var number = +object.p1.match(/\d+/)[0];


        var newNumber = number + 5;
        var newString = +object.p1.replace(/\d+/, newNumber);

        console.log(newString);
        // debugger
        console.log(document.getElementById("first_purpleimage"))
        let data = false
        if (data == true) {
            document.getElementsByClassName(object.p1)[0].removeChild(document.getElementById("first_purpleimage"))
        }
        document.getElementsByClassName(newStrixng)[0].appendChild(document.getElementById("first_purpleimage"));
        const className = document.getElementsByClassName(newString)[0].className
        console.log(className)
        object.p1 = className
        console.log(object.p1, "p11")
        data = true

        // document.getElementById('move').append(document.getElementById("image3"));
    })

//  this is  gotti is for red color-------------------------

console.log("=========================================");
document.getElementById('second_redimage').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        // document.getElementById('redimage').append(document.getElementById("first_redimage"));
        // document.getElementById('move').append(document.getElementById("image3"));
        var number = +objectr.r1.match(/\d+/)[0];


        var newNum = number + 5;
        var newStr = objectr.r1.replace(/\d+/, newNum);

        console.log(newStr);
        // debuggers
        console.log(document.getElementById("second_redimage"))
        let data = false
        if (data == true) {
            document.getElementsByClassName(objectr.r1)[0].removeChild(document.getElementById("second_redimage"))
        }
        document.getElementsByClassName(newStr)[0].appendChild(document.getElementById("second_redimage"));
        const className = document.getElementsByClassName(newStr)[0].className
        console.log(className)
        object.p1 = className
        console.log(objectr.r1, "r11")
        data = true
    })
//  this is  gotti is for yellow color
console.log("=========================================");
document.getElementById('fourthyellowimg').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        var number = +objecty.y1.match(/\d+/)[0];
        var newNum = number + 5;
        var newStr = objecty.y1.replace(/\d+/, newNum);

        console.log(newStr);
        console.log(document.getElementById("fourthyellowimg"))
        document.getElementsByClassName(newStr)[0].appendChild(document.getElementById("fourthyellowimg"));
        const className = document.getElementsByClassName(newStr)[0].className
        console.log(className)
        objecty.y1 = className
        console.log(objecty.y1, "y11")
        data = true

        let arr = ['Token_moving53', 'Token_moving54', 'Token_moving55', 'Token_moving56', 'Token_moving57', 'blue']
        console.log(arr.includes(newStr))
        if (arr == true) {
            return document.getElementById('fourthyellowimg').appendChild(document.getElementsByClassName('Token_moving1'))
        }
    })