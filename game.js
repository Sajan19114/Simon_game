// buttonColours=["red","blue","green","yellow"];
// gamePattern=[];
// userClickedPattern=[];

// var started=false;
// var level=0;
// $(document).keypress(function()
// {
//     if(!started)
//     {
//          $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//     }
// })

// $(".btn").click(function(){
//     var userChosenColour=$(this).attr("id");
//     userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour);
//     animatePress(userChosenColour);
// })

// function nextSequence()
// {
//     level++;
//     $("#level-title").text("Level "+level);

//     var randomNumber=Math.floor(Math.random()*4);  
//     var randomChosenColour=buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
//     $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColour);

   

// }


// function playSound(name)
// {
//     var audio=new Audio(name+".mp3");
//     audio.play();
// }

// function animatePress(currentColor){

//     $("#"+currentColor).addClass("pressed");

//     setTimeout(function(){
//         $("#"+currentColor).removeClass("pressed");
//     },100);

// }

// here is sajan self try but with length trick help



buttonColours=["red","blue","green","yellow"];
gamePattern=[];
userClickedPattern=[];

var started=false;
var level=0;

// yaha game start hoga agar user input keyboard se deta hai to 
$(document).keypress(function()
{
    if(!started)
    {
         $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
})

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function nextSequence()
{

    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);

    var randomNumber=Math.floor(Math.random()*4);  
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


}


function playSound(name)
{
    var audio=new Audio(name+".mp3");
    audio.play();
}

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);

}


// condition of the user and systum for the pattrn
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {    
       console.log("sucess");
       if(userClickedPattern.length===gamePattern.length)
       {
           setTimeout(function()
           {
            nextSequence();
           },1000);
       }

    } 
    else{
        $("h1").text("you lose For Restart press Any Key").fadeOut(100).fadeIn(100);

        playSound("wrong");
        $("body").addClass("game-over");
       setTimeout(function()
       {
        $("body").removeClass("game-over");
       })
       startOver();
        
        

    }
    function startOver()
    {
        started=false;
        level=0;
        gamePattern=[];
    }
    

}
