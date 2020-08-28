class Player{
    constructor(){

        this.spot=0;
    }
    rollDice(tiles){
       
        var rand=Math.round(random(1,6));
    }
    roll(){
        this.spot=this.spot+rand;
       
        var tile=tiles[this.spot];
        if(tile){
        this.spot=this.spot+tile.SorL;
        }
    }
    display(tiles){
        //console.log(this.spot);
      // console.log(tiles[this.spot]);
       var currentTile=tiles[this.spot];
       if(!currentTile) return;
      var pose= currentTile.getCentre();
     //s console.log(pose);
      ellipse(pose[0],pose[1],15,15);

    }
    reset(){
        this.spot=0;
        this.roll=-1;
        this.next=-1;
    }
    showEffect(tiles){
        var start=max(0,this.spot);
        var end=min(this.next,tiles.length-1);
        
        for(var i=start;i<=end;i++){
            tiles[i].highlight();
        }
    }
    move(){
        this.spot=this.next;
    }
}