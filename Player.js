class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }

    getCount(){
        var playerCountRef = db.ref('playerCount');
        playerCountRef.on("value",function(data){
            playercount = data.val();
        });
    }

    updateCount(count){
        db.ref('/').update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "playerinfo/player" + this.index;
        db.ref(playerIndex).set({
            name : this.name,
            Distance: this.distance
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = db.ref('playerinfo');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}