
var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var score = 0

console.log(scoreboard)
function setup() {
    createCanvas(600, 300);
    paddle_h = 16;
    paddle_w = 6 * paddle_h;
    paddle_x = width / 2;
    paddle_y = height - paddle_h;
    paddle_step = 0;
    ball_r = 13;
    reset();
}

function draw() {
    background(200);

    paddle_x = paddle_x + paddle_step;

    if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
	ball_x_step = -ball_x_step;
    }


    if (ball_y - ball_r < 0) {
	ball_y_step = -ball_y_step;
    }


    if (ball_y + ball_r > paddle_y) {
	if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
	    ball_y_step = -ball_y_step;
	    ball_y = paddle_y - ball_r;
	}
	else if (ball_y + ball_r > paddle_y){
	    reset();
	}
    }

  
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;


    noStroke();
    fill(0, 255, 0);
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

  
    stroke(24);
    fill(64);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);

    textSize(24)
    text(`score: ${score}`, 10, 24)
    score++;

}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
    
    document.getElementById("scoreboard").innerHTML +=  `[score: ${score}]=>`
    score = 0;
}d

function keyTyped() {
    if (key === 's') {
	paddle_step = -3;
    } else if (key ==='d') {
	paddle_step = 3;
    } else if (key == ' ') {
	reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}

