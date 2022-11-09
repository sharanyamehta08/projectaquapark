class Form{
    constructor(){
        this.title = createElement("h1");
        this.description1 = createElement("h2");
        this.description2 = createElement("h2");
        this.input = createInput("").attribute("placeholder","Enter your Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h2")
    }
    setElementPosition(){

        this.greeting.position(width/5-35, height/4+100)
        this.title.html("AQUAPARK");
        this.title.position(width/3- 175, 60);
        this.description1.html("Reach to the end of the water slide, try to be the first!",)
        this.description1.position(width/5-35, height/4+100);
        this.description2.html("Use Arrow keys to move")
        this.description2.position(width/3, height/4+175);
        this.input.position(width/3+100,height/4+300);
        this.button.position(width/3+110,height/4+400);
    }
    
    setElementStyle(){
        this.title.class("title");
        this.description1.class("description");
        this.description2.class("description");
        this.input.class("inputBox");
        this.button.class("button");
    }

    display(){
        this.setElementStyle();
        this.setElementPosition();
        this.handleMousePressed();
    }

   handleMousePressed(){
        this.button.mousePressed(()=> {
            this.input.hide()
            this.button.hide()
            this.description1.hide()
            this.description2.hide()
            var message = `hello ${this.input.value()} waiting for another player to join`
            this.greeting.html(message)
            playerCount+= 1
            player.name = this.input.value()
            player.index = playerCount 
            player.addPlayer()
            player.updateCount(playerCount)
            
        })
   }
}