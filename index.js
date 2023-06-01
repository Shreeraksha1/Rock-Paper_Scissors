//img for the bot

function play_bot() {
  var num = Math.floor(Math.random() * 3);

  var a = ["rock", "paper", "scissor"];

  var bot_pick = a[num];

  bot = bot_pick;

  var bot_imgscr = "img/" + bot_pick + ".png";

  document.querySelector(".bot_pk").setAttribute("src", bot_imgscr);
}

// img for user

var all_button = document.querySelectorAll(".but").length;

for (var i = 0; i < all_button; i++) {
  document.querySelectorAll(".but")[i].addEventListener("click", function () {
    var user_pick = this.getAttribute("moveType");

    user = user_pick;
    console.log(user_pick);
    play_bot();

    var user_imgscr = "img/" + user_pick + ".png";

    document.querySelector("#user_img").setAttribute("src", user_imgscr);

    result();
  });
}

var user, bot;

var user_score = 0;
var bot_score = 0;

function result (){
 
    if (
        (user === "rock" && bot === "scissor") ||
        (user === "scissor" && bot === "paper") ||
        (user === "paper" && bot === "rock")
      ) {
        user_score = ++user_score;
        document.querySelector("h2").innerHTML = "YOU WIN!!!";
        document.querySelector(".point").innerHTML = user_score + " - " + bot_score;        
      } else if (
        (bot === "rock" && user === "scissor") ||
        (bot === "scissor" && user === "paper") ||
        (bot === "paper" && user === "rock")
      ) {
        bot_score = ++bot_score;
        document.querySelector("h2").innerHTML = "YOU LOOSE...";
        document.querySelector(".point").innerHTML = user_score + " - " + bot_score;  
      } else {
        document.querySelector("h2").innerHTML = "DRAW!!";
        document.querySelector(".point").innerHTML = user_score + " - " + bot_score;  
      }
}

document.querySelector(".set").onclick = function click(){
  user_score = 0;
  bot_score = 0;
  document.querySelector(".point").innerHTML = user_score + " - " + bot_score;

  document.querySelector(".bot_pk").setAttribute("src", "img/bot.png");
  document.querySelector("#user_img").setAttribute("src", "img/user.png");

}

