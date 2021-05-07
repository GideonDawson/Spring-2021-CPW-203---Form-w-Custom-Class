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
    var errorDiv = $("validation");
    var titleError = $("title");
    var ratingError = $("rating");
    var priceError = $("price");
    if (titleError.value == "") {
        var titleDisplay = document.createElement("p");
        titleDisplay.innerText = "Must enter the title of your game";
        errorDiv.appendChild(titleDisplay);
        return false;
    }
    if (isNaN(parseInt(priceError.value))) {
        var priceDisplay = document.createElement("p");
        priceDisplay.innerText = "Must enter a price for your game";
        errorDiv.appendChild(priceDisplay);
        return false;
    }
    if (ratingError.value == "Please choose a rating") {
        var ratingDisplay = document.createElement("p");
        ratingDisplay.innerText = "Must select a rating for your game";
        errorDiv.appendChild(ratingDisplay);
        return false;
    }
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
    var ratingInput = $("rating");
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
    console.log(gameHeading);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
