var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDateValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDateValid() {
    return true;
}
function $(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = $("title");
    game.title = titleInput.value;
    var priceInput = $("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = $("value");
    game.rating = ratingInput.value;
    var digitalOnly = $("online");
    if (digitalOnly.checked) {
        game.isDigitOnly = true;
    }
    else {
        game.isDigitOnly = false;
    }
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = $("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitOnly) {
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " has a rating of " +
        myGame.rating + ". It costs " + myGame.price
        + ". It is " + notDigitalDisplay + " digital only";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
