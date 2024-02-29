class Ball {

    constructor(container, bg, x, y, width, height, velX, velY, text) {
        this.container = container;
        this.div = document.createElement("div");
        this.bg = bg;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.tex = text;//공의 좌표 출력을 위한 텍스트 

        this.div.style.background = this.bg;
        this.div.style.borderRadius = 50 + "%";
        //포지션
        this.div.style.position = "absolute";
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
        //크기
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        this.container.appendChild(this.div);

    }
    move() {
        this.x += this.velX
        this.y += this.velY

        //공의 현재 x값이 우측 벽(900)-width에 도달하면 velX부호를 -1 곱해서 반전
        //공의 현재 x값이 좌측벽(0)에 도달하면 velX의 부호를 반대로 전환
        //공의 현재 y값이 위쪽 벽에 도달하면 velY부호를 반대로 전환
        //공의 현재 y값이 바닥(900)+height에 도달하면 velY부호를 반대로 전환

        if (this.x >= (900 - this.width) || this.x <= 0) {
            this.velX *= -1;
        }
        if (this.y >= (900 - this.height) || this.y <= 0) {
            this.velY *= -1;
        }
        //현재 움직이고 있는 공 인스턴스에 , 정보를 출력해보자  <div></div>
        let str = "x:" + this.x + "\n";
        str = str + "y:" + this.y;

        this.div.innerText = str;
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
    }
}