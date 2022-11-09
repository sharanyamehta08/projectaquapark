class Game {
    constructor (){}

    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState = data.val()
        })
    }

    updateState(gameState){
        database.ref("gameState").update({
            gameState: gameState
        })
    }

    start(){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount(); 
    }
}