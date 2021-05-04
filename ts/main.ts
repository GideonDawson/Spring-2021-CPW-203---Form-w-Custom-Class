class VideoGame{
    title:string; 
    price:number; 
    rating:string; 
    isDigitOnly:boolean; 
}

// Test code
let myGame = new VideoGame();
myGame.title = "mario";
myGame.rating = "E";
myGame.isDigitOnly = true; 


window.onload= function(){
    let addBtn = 
                <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame; 
}

function addVideoGame(){
    console.log("Add video game was called"); 

    if(isAllDateValid()){
        let game = getVideoGame();
        displayGame(game); 
    }
}

function isAllDateValid(){
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

    let ratingInput = <HTMLInputElement>$("value");
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
}