//Written by Beng Hui

//Global variables
function randomNum(){
    return Math.ceil(Math.random() * 21);
}
var rows = 30;
var columns = 60;
var bird = 12; //initial bird position
var obsPosition = [[columns, randomNum()], [columns + 30, randomNum()]]

var score = 0;

//position of 1 obstacle
var obs = [obsPosition[0][0], obsPosition[0][1]];




//20x40 grid
var gameLoop = setInterval(function(){
    //collision check (including out of bounds check)
    //document.getElementById("flap").style.color = "red";
    if((obs[0] <= 12 && obs[0] >= 1 && (bird <= obs[1] || (bird >= obs[1] + 10))) || bird <= 0 || bird >= 30){
    clearInterval(gameLoop),
    alert("Game over. Score: " + score),
    location.reload();
}
    document.getElementById("flap").style.color = "white",
    document.getElementById("flap").innerHTML = "";
    for(var i = 0; i < rows; i++) {
        arr = "";

        for(var j = 0; j < columns; j++) {
            //obstacle of opening 7 & width 9
            if (((j >= obsPosition[0][0] && j <= obsPosition[0][0] + 10) && (i <= obsPosition[0][1] || i >= obsPosition[0][1] + 10)) || ((j >= obsPosition[1][0] && j <= obsPosition[1][0] + 10) && (i <= obsPosition[1][1] || i >= obsPosition[1][1] + 10)))
                arr += "x";
            //bird position
             else if(j == 10 &&  i == bird)
                arr += "b";
            //default print
            else
            arr += ".";
        }
    document.getElementById("flap").innerHTML += arr + "\n";

    }

    obs[0]--; //loop through the entire array to get obstacle position of every frame
//console.log(s);
//console.log(obsPosition[0]);


    if (obsPosition[0][0]-- < -9){
        obs = [obsPosition[1][0], obsPosition[1][1]],
        obsPosition[0] = [columns, randomNum()],
        score++;
    }
    if (obsPosition[1][0]-- < -9){
        obs = [obsPosition[0][0], obsPosition[0][1]],
        obsPosition[1] = [columns, randomNum()],
        score++;
    }
        bird++;
}, 90);

//upon releasing up arrow key the bird moves upwards by one block (row)
document.onkeyup = function(){
    bird -= 3;
    return false;
}


