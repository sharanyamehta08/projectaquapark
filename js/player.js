class Player{
    constructor(){
        this.name = null; 
        this.index = null; 
        this.positionX = 0; 
        this.positonY = 0; 
    }

    addPlayer(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            positionX: this.positionX, 
            positionY: this.positionY,
            name: this.name
        })
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref("playerCount").update({
            playerCount: count
        })
    }
}