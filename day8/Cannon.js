// 클래스 정의 시 반드시 클래스명은 대문자로 함.
// 합성어의 경우 단어마다 첫 철자가 대문자가 됨. (myserver = MyServer)
class Cannon {
    // 생성자 메서드란 객체를 탄생시키는 시점에 관여되는 초기화 코드를
    // 작성할 수 있느 함수를 말함. 주로 어떤 스타일로 생성되는지 결정함.
    // 예> 공장에서 자동차 생산 시 색상, 옵션장착 등을 결정 

    constructor(src, x, y, width, height, velX, velY) {
        this.img = document.createElement("img");
        this.src = src;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        this.width = width;
        this.height = height;

        //멤버변수로 스타일 지정하기
        this.img.src = this.src;
        this.img.style.position = "absolute"
        this.img.style.top = this.y + "px"
        this.img.style.left = this.x + "px"
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        document.body.appendChild(this.img); //이미지를 body 태그인 부모에 부착
    }
    //대포알 움직임 정의

    move() {
        this.x += this.velX
        this.y += this.velY

        this.img.style.top = this.y + "px";
        this.img.style.left = this.x + "px";
    }
}
