// Ball  - ball.js

function   Ball (width,height){

    this.width = width;
    this.height = height;


    this.x = parseInt(Math.random() * width) ;
    this.y = parseInt(Math.random() * height) ;
    this.radius = 5 + parseInt(Math.random() * 15) ;
    this.color = "#00f";
    
    this.x_speed = 2 + parseInt(Math.random()*3);  
    this.y_speed = this.x_speed;
    
    
    
    
    this.update= function(){
        if(mouseX>0 && mouseY >0){ 
        if(Math.abs(mouseX -this.x ) < this.radius  && Math.abs(mouseY -this.y ) < this.radius  ){
            if(this.radius <50 )
                this.radius +=5;            
        }else{
            if(this.radius >10 )
                this.radius +=-1;            
        }
    }


        if(this.x>(this.width-this.radius) )
            this.x_speed = this.x_speed * -1;
        if(this.x<this.radius)
            this.x_speed = this.x_speed * -1;
        this.x+=this.x_speed;

        if(this.y>(this.height-this.radius) )
            this.y_speed = this.y_speed * -1;
        if(this.y<this.radius)
            this.y_speed = this.y_speed * -1;
        this.y+=this.y_speed;
    }

    this.draw = function (ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle= this.color; 
        ctx.fill();
    }

}
