class BaseClass {
    constructor(x, y,w,h,angle) {
      var options = {
        'density':1,
        'friction': 1,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.image = loadImage("sprites/base.png")
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,0, 0,this.width,this.height);
      pop();
    };
  };
  