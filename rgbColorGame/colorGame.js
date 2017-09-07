var numSquare=6;
var color=generateColors(numSquare)
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay")
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1")
var resetBtn=document.querySelector("#reset")
var easyModeBtn=document.querySelector("#easyMode")
var hardModeBtn=document.querySelector("#hardMode")

resetBtn.textContent="New Colors"
resetBtn.addEventListener("click",function () {
    resetBtn.textContent="New Colors"
    h1.style.backgroundColor="steelblue"
    messageDisplay.textContent=""
    color=generateColors(numSquare)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(squares[i]){
            squares[i].style.backgroundColor=color[i]
        }
    }

})

easyModeBtn.addEventListener("click",function () {
    hardModeBtn.classList.remove("selected")
    easyModeBtn.classList.add("selected")
    h1.style.backgroundColor="steelblue"

       numSquare=3
    color=generateColors(numSquare)

    pickedColor=pickColor()

    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){

             if(color[i]){
                 squares[i].style.backgroundColor=color[i]
             }

             else{
                 squares[i].style.display="none"    //start from here
             }



    }

})
hardModeBtn.addEventListener("click",function () {
    hardModeBtn.classList.add("selected")
    easyModeBtn.classList.remove("selected")
    h1.style.backgroundColor="steelblue"

    numSquare=6
        color=generateColors(numSquare)

         pickedColor=pickColor()

         colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
           squares[i].style.backgroundColor=color[i]
           squares[i].style.display="block"

    }

})



var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){

            squares[i].style.backgroundColor=color[i];
            squares[i].addEventListener("click",function () {

                var clickedColor=this.style.backgroundColor;
                if(clickedColor===pickedColor){
                    messageDisplay.textContent="Correct :)"
                    resetBtn.textContent="Play Again?"
                    fillAllSquare();
                    colorDisplay.textContent=pickedColor
                    h1.style.backgroundColor=clickedColor

                }
                else{
                    this.style.background="#232323"
                    messageDisplay.textContent="Try Again"

                }
            });


    }

function generateColors(numSquare) {
    var arr=[];
    for(var i=0;i<numSquare;i++){
        arr[i]=fillColor()
    }
    return arr
}
function fillColor() {
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    return "rgb("+r+", "+g+", "+b+")"
}
//function for picking the resulting color
function pickColor() {
    var index=Math.floor(Math.random()*color.length)
    var Color=color[index]
    return Color
}
//function to fill all square with the correct one
function fillAllSquare() {
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=pickedColor;
    }
}