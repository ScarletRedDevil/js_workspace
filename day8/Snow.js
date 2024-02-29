class Snow {
    constructor(container, x, y, width, height, velX, velY, blur) {
        this.container = container;
        this.div = document.createElement("div");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.blur = blur;

        this.div.style.background = "#ffffff"
        this.div.style.borderRadius = 30 + "px"
        this.div.style.filter = `blur(${this.blur}px)`

        this.div.style.position = "absolute";
        this.div.style.top = this.y + "px"
        this.div.style.left = this.x + "px"

        this.div.style.width = this.width + "px"
        this.div.style.height = this.height + "px"

        this.container.appendChild(this.div);
    }

    move() {

        this.x += this.velX;
        this.y += this.velY;

        //화면에 보여질 처리 ( 랜더링 )
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
    }
}