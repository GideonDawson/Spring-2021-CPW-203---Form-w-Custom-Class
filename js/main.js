var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearAllErrors() {
    var errorSummery = $("validation");
    errorSummery.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllDateValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatingsLink();
    }
}
function displayRatingsLink() {
    var ratingsElements = document.querySelectorAll(".rating-error");
    for (var i = 0; i < ratingsElements.length; i++) {
        var currentElement = ratingsElements[i];
        currentElement.onclick = goToRatingsPage;
    }
}
function goToRatingsPage() {
    window.open("https://www.esrb.org/", "_blank");
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDateValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }
    var rating = $("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating", "rating-error");
    }
    return isValid;
}
function addErrorMessage(errorMessage) {
    var errorSummery = $("validation");
    var errorItem = document.createElement("li");
    errorItem.classList.add("myclass");
    errorItem.innerText = errorMessage;
    errorSummery.appendChild(errorItem);
}
function addErrorMsgWithCustomClass(errorMessage, cssClass) {
    var errorSummery = $("validation");
    var errorItem = document.createElement("li");
    errorItem.classList.add(cssClass);
    errorItem.innerText = errorMessage;
    errorSummery.appendChild(errorItem);
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
