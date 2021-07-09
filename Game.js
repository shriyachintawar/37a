class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = db.ref('gameState');
        gameStateRef.on("value",function(data){
            gamestate = data.val();
        })
    }
    update(state){
        db.ref('/').update({
            gameState: state
        });
    }
    start(){
        if(gamestate === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            
        }
    }
}