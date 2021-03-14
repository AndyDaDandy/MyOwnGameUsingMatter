class Box {
    //constructor is used for intializing the properties 
    constructor(x, y, width, height) {
      this.visibility = 255
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic: true
          

      }
      //create the body
      this.body = Bodies.rectangle(x, y, width, height, options);
      //define a way to change the width,color, and height, these are properties
      this.width = width;
      this.height = height;
      this.color = "blue"
      this.image = loadImage("unnamed.png")
      //add into world
      World.add(world, this.body);
      
    }
    //create a function to display
    display(){
      //create a shortcut to access position and angle of the body
      var pos =this.body.position;
      var angle = this.body.angle
      rect(pos.x, pos.y, this.width, this.height);
      rectMode(CENTER);
      fill(this.color);
  
      
      
    //   if(this.body.speed<10){
    //     push();
    //     translate(this.body.position.x, this.body.position.y);
    //     rotate(angle);
    //     imageMode(CENTER);
    //     image(this.image, 0, 0, this.width, this.height);
    //     pop();      
    //   }
      
    //   else{
    //     push()
    //   World.remove(world,this.body)
    //   tint(255, this.visibility)
    //   image(this.image,this.body.position.x, this.body.position.y,50,50)
    //   this.visibility = this.visibility-5
    //   }
    //   pop()
    }
  };
  

  