console.log("Ansh Sharma");
console.log("Here, I have started to finish this ");
const myArray = ["images/dice_1.png", "images/dice_2.png", "images/dice_6.png", "images/dice_5.png", "images/dice_4.png", "images/dice_3.png"];
let randomElement;

const boxArray = ["second_box","box", "third_col", "third_col1"]
const newcolor = ["yellow","aqua","rgb(229, 22, 229)",'red']
console.log("You have an access to select the gotties", 'yellow turn')
let currentTurn = 0
document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray"; 

document.getElementById('my-button').addEventListener('click', () => {
     randomElement = myArray[Math.floor(Math.random() * myArray.length)];

    console.log(randomElement, "---randomElement----");
    document.getElementById('image_dice').src = randomElement

    document.getElementById(boxArray[currentTurn]).style.backgroundColor = newcolor[currentTurn];  //x add to nerw block
    currentTurn++;
    document.getElementById(boxArray[currentTurn]).style.backgroundColor = "gray";  // reomve from previous block
    

    
    // +
    // if(randomElement == "images/dice_6.png"){
    //     yellow_player(arr)
    // }
    // }
    // yellow_player(arr)


});



console.log("=========================================");
document.getElementById('gitti_down4').addEventListener('click',
    function move_gitti() {
        console.log("----ekfmkdmss")
        document.getElementById('move').append(document.getElementById("image4"));
        // document.getElementById('move').append(document.getElementById("image3"));
    })
console.log('---------------------------')




















// document.addEventListener('DOMContentLoaded', function() {
    
//     document.getElementById('gitti_down4').addEventListener('click', function() {
//         console.log('---------------------------==============================');
//         document.getElementById('move2').append(document.getElementById('image4'));
//     });
// });


// document.getElementById('gitti_down4').addEventListener('click', function() {
//     console.log('---------------------------==============================');
//     document.getElementById('move3').append(document.getElementById('image4'));
// });

// document.getElementById('image4').addEventListener('click', function() {
//     console.log('---------------------------==============================');
//     document.getElementById('move4').append(document.getElementById('image4'));
// });