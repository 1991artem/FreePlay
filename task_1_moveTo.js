class MoveObject {
    constructor(elementId, acceleration){
        this.element = document.querySelector(`#${elementId}`);
        this.acceleration = acceleration;
    }
    moveTo(from, direction, duration, speed){
        if(this.element.getBoundingClientRect().left <= (window.screen.width) / 2){
            this.acceleration+= 1;
        } else if(this.element.getBoundingClientRect().left > (window.screen.width) / 2) this.acceleration-= 1;
        let moveX = this.acceleration * speed * duration/1000;
        let moveY = from[1] + direction * moveX;
        this.setPoint(from[0] + moveX, moveY);
        return [from[0] + moveX, moveY];
    }
    direction(deg){
        let rad = deg * Math.PI/180;
        return Math.tan(rad)
    }
    setPoint(X, Y){
        this.element.setAttribute(
            "style",
            `left:${X}px;
              top:${Y}px;`
          );
          console.log(`x:${X}; y:${Y}`);
    }
}

let acceleration = 1;
const moveMyObj = new MoveObject('ball', acceleration); // choise element
let deg = 0; // choise rotate deg
let from = [100, window.screen.height / 2]; // [X, Y]
let duration = 500; // ms
let speed = 10; // px/s
moveMyObj.setPoint(from[0], from[1]);

const interval = setInterval(()=>{
      from = moveMyObj.moveTo(from, moveMyObj.direction(deg), duration, speed);
      if(from[0] >= window.screen.width - 50 || from[1] >= window.screen.height - 50) clearInterval(interval);
},100)
