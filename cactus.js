class cactus{
    var grd=30;
    construcutor(size, x){
        var cac=new Image();
        if(size==1){
            cac.src="cactus1.png";
        }
        else if(size==2){
            cac.src="cactus2.png";
        }
        else{
            cac.src="cactus3.png";
        }
        this.sprite=cac;
        this.width=cac.width;
        this.height=cac.height;
        this.x=x;
    }
    show(){
        image(this.sprite, this.x, this.height+30);
    }
    update(){
        this.x-=panSpeed;
    }
    collided(p){
        if(p.x+p.length)
    }
}