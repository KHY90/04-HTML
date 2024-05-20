var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = 'unnamed.png';

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, this.width, this.height)
    }
}
var img1 = new Image();
img1.src = 'png-transparent-game-off-game-jam-gamedev-net-video-game-cactus-game-angle-text.png';

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y, this.width, this.height)
    }
}

var timer = 0;
var cacti = [];
var jumptimer = 0;
var animation;

function runEveryFrame() {
    animation = requestAnimationFrame(runEveryFrame);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 200 === 0) {
        var cactus = new Cactus();
        cacti.push(cactus);
    }

    cacti.forEach((a, i, o) => {
        // x좌표가 0미만이면 제거
        if (a.x < 0) {
            o.splice(i, 1)
        }
        a.x--;

        checkCollision(dino, a);

        a.draw();
    })

    // 점프기능
    if (isJumping == true) {
        dino.y--;
        jumptimer++;
    }
    if (isJumping == false) {
        if (dino.y < 200) {
            dino.y++;
        }
    }
    if (jumptimer > 100) {
        isJumping = false;
        jumptimer = 0
    }

    dino.draw();
}

runEveryFrame();

// 충돌확인
function checkCollision(dino, cactus) {
    var xDifference = cactus.x - (dino.x + dino.width);
    var yDifference = cactus.y - (dino.y + dino.height);
    if (xDifference < 0 && yDifference < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}

var isJumping = false;
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        isJumping = true;
    }
});