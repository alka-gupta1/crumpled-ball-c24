class Ground{
    constructor(x,y,w){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,20,options)
        this.w = w
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,20)
    }
}