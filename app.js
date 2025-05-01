console.log ("hello world")

var ball_element = document.getElementById("ball")
var score_element = document.getElementById("score")
var try_again_element = document.getElementById("try-again-container")
var grey_container = document.getElementById("grey_thing")
var High_Score = document.getElementById("high_score")
var dist = 0
var score = 0
var ball_speed = 1
var game_running = true
var dev_tools1 = false
var dev_tools2 = false
var high_score = localStorage.getItem("high_score")
High_Score.innerText = "High Score: " + high_score
function bounce_ball() {
    var dist_up=0
    setInterval(() => {
        if (dist_up < 200) {
            dist = dist - 3
            dist_up = dist_up + 3
        }
    }, 1)
}

function random_position() {
 var right=grey_container.getBoundingClientRect().right-120
 var left=grey_container.getBoundingClientRect().left-30
 var top=grey_container.getBoundingClientRect().top-30
 var bottom=grey_container.getBoundingClientRect().bottom-120

    x = Math.floor(Math.random()* (right - left) + (left))
    y = Math.floor(Math.random()* (bottom - top) + top)
    console.log("x=" + x)
    console.log("y=" + y)
}

function handle_click_button() {
    bounce_ball()
    // if (dev_tools1=false) {
    //     random_position()
    // }
    ball_speed = ball_speed + 0.05
    random_position()
    // if (dev_tools=true) {
    //     score=score*999999999999999999999
    // }
}

function reset_game() {
    score=0
    ball_speed=1
    dist=1
    game_running=true
    try_again_element.style.display = "none";
}
if (score>high_score) {
   localStorage.setItem("score", (score))
}
// function dev_tools() {
//     setInterval(() => {
//         dev_tools2=true
//         if(dev_tools2==true){}
//         console.log ("You have activated dev tools!")
//         console.log ("Click on the button to make your score just a bit higher")
//         dev_tools1=true
//         dist=300
//     }, 100);
// }
function off(){
    dev_tools2=false
}
document.getElementById("button").addEventListener("click", handle_click_button);
document.getElementById("try-again-btn").addEventListener("click", reset_game)


reset_game()

random_position()
setInterval(() => {
    if (game_running == true) {
        dist = dist + ball_speed;
        score = score + 1
        score_element.innerText = "SCORE: " + score
        ball_element.style.top = dist + "px"
        if (score>high_score) {
        high_score=score
        }
        High_Score.innerText = "High Score: " + high_score
        button.style.top  = y + "px"
        button.style.left = x + "px"
        if (dist>586) {
            // alert("You lose!") 
            game_running=false
            // grey_thing.element.style.top = 100 + "px"
            try_again_element.style.display = "flex"
            if (score>=high_score) {
                localStorage.setItem("high_score", (score))
             }
        }
    }
}, 1)
