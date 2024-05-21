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
    draw() { // ctx는 <canvas> 요소의 드로잉 컨텍스트로, 다양한 그래픽 작업을 수행할 수 있는 메서드를 제공합니다. 이 컨텍스트를 사용하여 도형, 이미지 등을 화면에 그릴 수 있습니다. 
        ctx.fillStyle = 'green'; //ctx.fillStyle = 'red';처럼 사용하여 도형을 채울 때 사용할 색상을 설정합니다.
        ctx.fillRect(this.x, this.y, this.width, this.height); //ctx.fillRect(x, y, width, height);를 사용하여 (x, y) 위치에 지정된 크기(width, height)의 직사각형을 그립니다.
        ctx.drawImage(img2, this.x, this.y, this.width, this.height) // drawImage(image, x, y, width, height);를 사용하여 (x, y) 위치에 이미지를 그립니다.
    }
}
var img1 = new Image();
img1.src = 'png-transparent-game-off-game-jam-gamedev-net-video-game-cactus-game-angle-text.png';

class Cactus {
    constructor() {  // constructor : 객체 생성자
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
        cacti.forEach((a, i, o) => { // a: 현재 배열 요소 / i: 현재 요소의 인덱스 / o: 호출된 배열 (즉, cacti 배열 자체)
            // forEach 메서드는 배열의 각 요소에 대해 한 번씩 제공된 함수를 호출합니다. 함수는 세 가지 인수를 받을 수 있습니다:
            //currentValue (a): 현재 처리 중인 요소. / index (i): 현재 처리 중인 요소의 인덱스. / array (o): forEach 메서드를 호출한 배열.
        // x좌표가 0미만이면 제거
        if (a.x < 0) {
            o.splice(i, 1) // 인덱스 i에서 요소를 제거
        }
        a.x--; // 요소의 x 좌표를 감소시킴

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
document.addEventListener('keydown', function (e) { // e.code는 JavaScript에서 키보드 이벤트 객체 e의 속성으로, 
    // 사용자가 누른 키를 식별하는 문자열 값을 제공합니다. 
    // e는 이벤트 객체로, keydown, keyup, keypress와 같은 키보드 이벤트가 발생할 때 브라우저에 의해 생성됩니다.
    if (e.code === 'Space') { //document.addEventListener('keydown', function (e) { ... });는 사용자가 키를 누를 때마다 실행될 함수를 설정합니다. 
                            // 이 함수는 키보드 이벤트 객체 e를 인자로 받습니다.
        isJumping = true;
    }
});

//e.code vs e.key:
// e.code: 키보드의 물리적 위치를 기반으로 키를 식별합니다. 예: 'Space', 'KeyA', 'ArrowUp'.
// e.key: 사용자가 실제로 누른 키의 값에 따라 키를 식별합니다. 예: ' ', 'a', 'A', 'ArrowUp'.