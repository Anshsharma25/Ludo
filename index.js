console.log("Ansh Sharma");
console.log("Here, I have started to finish this ");

const myArray = ["images/dice_1.png", "images/dice_2.png", "images/dice_6.png", "images/dice_5.png", "images/dice_4.png", "images/dice_3.png"];
let randomElement;

const boxArray = ["second_box", "box", "third_col", "third_col1"];

const colors = { second_box: "yellow", box: "aqua", third_col: "purple", third_col1: "red" };

console.log("You have an access to select the gotties", 'yellow turn');
let currentTurn = 0;
document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray";
const object = { p1: 'Token_moving15', p2: '', p3: '', p4: ''};

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

    //  this is  gotti is for yellow color
    console.log("=========================================");
    document.getElementById('gitti_down4').addEventListener('click',
        function move_gitti() {
            console.log("----ekfmkdmss")
            document.getElementsByClassName("Token_moving41").append(document.getElementById("image4 "));
            // document.getElementById('move').append(document.getElementById("image3"));
        })


    //     document.getElementById('image4').addEventListener('click', () => {
    //         console.log("----ekfmkdmss");
    //         const currentPosition = object['b1'];
    //         const diceRoll = randomElement;
    //         let newPosition = object[currentPosition];
    //         for (let i = 0; i < diceRoll; i++) {
    //             newPosition = object[newPosition];
    //             if (!newPosition) break; }
    //         if (newPosition) {
    //             document.getElementsByClassName(newPosition).append(document.getElementById("first_blueimage"));
    //             object['b1'] = newPosition;
    //         }
    //     });'
        
    // let currentPosition = 0;
    // console.log(currentPosition);
    // function moveImage(randomElement) { 
    //     let newPosition = currentPosition + randomElement;
    //     currentPosition = newPosition;
    //     console.log('newPosition:', currentPosition)

    //     // Move the image to the new position on the board
    //    document.getElementById('image').style.left = newPosition ;
    // }
    //     const image = document.getElementById('image_dice');
    //     const spaceWidth = 50; 
    //     updatedpositon = documentg.getElementById('image4').style.left = newPosition;
    //     moveImage(randomElement);








    // document.addEventListener("DOMContentLoaded", function() {
    //     var image = document.querySelector('Token_moving2  imageblue' );
    //     var updatedpositon = document.querySelector('Token_moving3');
    //     container2.appendChild(image);
    // });




});

document.getElementById('gitti').addEventListener('click',
    function move_gitti() {
        document.getElementById('blueimage').append(document.getElementById("first_blueimage"));
        // document.getElementById('move').append(document.getElementById("image3"));

    })


document.getElementById('gitti').addEventListener('click',
    function move_gitti() {
        document.getElementById('blueimage').append(document.getElementById("first_blueimage"));
        // document.getElementById('move').append(document.getElementById("image3"));

    })

//  this is  gotti is for purple color
console.log("=========================================");
document.getElementById('first_purpleimage').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        var number = +object.p1.match(/\d+/)[0]; // Implicit conversion to number

// Adding 5 to the number
var newNumber = number + 5;

// Constructing the new string
var newString = object.p1.replace(/\d+/, newNumber);

console.log(newString);
debugger
console.log(document.getElementById("first_purpleimage"))
let data = false
if(data==true){
    document.getElementsByClassName(object.p1)[0].removeChild(document.getElementById("first_purpleimage"))
}      
    document.getElementsByClassName(newString)[0].appendChild(document.getElementById("first_purpleimage"));
            const className = document.getElementsByClassName(newString)[0].className
            console.log(className)
            object.p1 = className
            console.log(object.p1,"p11")    
            data = true

        // document.getElementById('move').append(document.getElementById("image3"));
    })


//  this is  gotti is for red color

console.log("=========================================");
document.getElementById('gitti-1').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        document.getElementById('redimage').append(document.getElementById("first_redimage"));
        // document.getElementById('move').append(document.getElementById("image3"));
    })