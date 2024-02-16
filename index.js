console.log("ansh sharma");
console.log("here , I am start to finish this ");

const myArray = ["images/dice_2.png", "images/dice_2.png", "images/dice_6.png", "images/dice_5.png", "images/dice_4.png", "images/dice_3.png"];

document.getElementById('my-button').addEventListener('click', () => {
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];

    console.log(randomElement, "---randomElement----");
    document.getElementById('image').src = randomElement
});
// document.getElementsByClassName("second_box").

// let color = document.getElementsByClassName("second_box");
// var changeBorder = document.getElementsByClassName("changeBorder");
// changeBorder.addEventListener("click", ()=> {
//     color.style.border = "3px solid green";
// });  

document.getElementById("second_box").style.backgroundColor = "gray";


console.log("=========================================");
document.getElementById('gitti_down4').addEventListener('click', 
function move_gitti() {
    // if ("gitti_down4" = true) {
    //     return document.getElementById('g1').append(document.getElementById("move"));
    // }
    // else {
    //     return 0;
    // } 
    console.log("----ekfmkdmss")
    document.getElementById('move').append(document.getElementById("gitti_down4"));
})
console.log(move_gitti);

