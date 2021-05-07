class VideoGame{
    title:string; 
    price:number; 
    rating:string; 
    isDigitOnly:boolean; 
}



window.onload = function(){
    let addBtn = 
                <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame; 
}

function addVideoGame(){

    if(isAllDateValid()){
        let game = getVideoGame();
        displayGame(game); 
    }
}

function isAllDateValid(){
    let errorDiv = $("validation");
    let titleError = <HTMLInputElement> $("title");
    let ratingError = <HTMLInputElement> $("rating");
    let priceError = <HTMLInputElement> $("price");
    if(titleError.value == ""){
        let titleDisplay = document.createElement("p");
        titleDisplay.innerText = "Must enter the title of your game";
        errorDiv.appendChild(titleDisplay); 
        return false;
    }
    if(isNaN(parseInt(priceError.value))){
        var priceDisplay = document.createElement("p");
        priceDisplay.innerText = "Must enter a price for your game";
        errorDiv.appendChild(priceDisplay);
        return false;
    }
    if(ratingError.value == "Please choose a rating"){
        let ratingDisplay = document.createElement("p");
        ratingDisplay.innerText = "Must select a rating for your game";
        errorDiv.appendChild(ratingDisplay);
        return false; 
    }

    return true; 
}

function $(id:string){
    return document.getElementById(id); 
}

function getVideoGame():VideoGame{
    let game = new VideoGame();  
    // Populate the data from a video game 
    let titleInput = <HTMLInputElement> $("title");
    game.title = titleInput.value; 
     

    let priceInput = 
        <HTMLInputElement> $("price");
    game.price = parseFloat(priceInput.value); 

    let ratingInput = <HTMLSelectElement> $("rating");
    game.rating = ratingInput.value; 

    let digitalOnly = <HTMLInputElement> $("online");
    // I like the way that the decision looks as 
    // apposed to the other way we covered in lectures
    if(digitalOnly.checked){
        game.isDigitOnly = true; 
    }
    else{
        game.isDigitOnly = false; 
    }
    console.log(game); 
    return game; 

    // TODO: Return the video game 

}

function displayGame(myGame:VideoGame):void{
    //TODO: Display video game below the form 
    let displayDiv = $("display");

    //Create an h2 with the game title 
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title; 

    let gameInfo = document.createElement("p");

    let notDigitalDisplay = ""; 
    if(myGame.isDigitOnly){
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + 
                        myGame.rating + ". It costs " + myGame.price 
                        + ". It is " + notDigitalDisplay + " digital only";
    
    console.log(gameHeading);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo); 
}