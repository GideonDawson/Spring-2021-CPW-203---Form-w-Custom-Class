class VideoGame {
    title: string;
    price: number;
    rating: string;
    isDigitOnly: boolean;
}



window.onload = function () {
    let addBtn =
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

//Clears all previous errors 
function clearAllErrors() {
    let errorSummery = $("validation");
    errorSummery.innerText = "";

}

function addVideoGame() {

    clearAllErrors();

    if (isAllDateValid()) {
        let game: VideoGame = getVideoGame();
        displayGame(game);
    }
}

function getInputById(id: string): HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

function isAllDateValid() {
    let isValid = true;

    let title = getInputById("title").value;
    if (title == "") {
        isValid = false;

        addErrorMessage("Title is required");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number"); 
    }

    let rating = (<HTMLOptionElement>$("rating")).value; 
    if(rating == ""){
        isValid = false; 
        addErrorMessage("You must choose a rating"); 
    }
    return isValid;
}

function addErrorMessage(errorMessage:string){
    let errorSummery = $("validation");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;

    errorSummery.appendChild(errorItem);
}

function $(id: string) {
    return document.getElementById(id);
}

function getVideoGame(): VideoGame {
    let game = new VideoGame();
    // Populate the data from a video game 
    let titleInput = <HTMLInputElement>$("title");
    game.title = titleInput.value;


    let priceInput =
        <HTMLInputElement>$("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>$("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>$("online");
    // I like the way that the decision looks as 
    // apposed to the other way we covered in lectures
    if (digitalOnly.checked) {
        game.isDigitOnly = true;
    }
    else {
        game.isDigitOnly = false;
    }
    console.log(game);
    return game;

    // TODO: Return the video game 

}

function displayGame(myGame: VideoGame): void {
    //TODO: Display video game below the form 
    let displayDiv = $("display");

    //Create an h2 with the game title 
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    let gameInfo = document.createElement("p");

    let notDigitalDisplay = "";
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