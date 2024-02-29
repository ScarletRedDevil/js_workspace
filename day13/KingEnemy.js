// 이미 적군 클래스를 가지고 있음에도 별도로 만드는 이유 : 오버라이딩
// 메서드명을 부모, 자식 둘다 보유하고 있으므로 호출시엔
// 자식 메서드가 최신이므로 자식메서드를 최우선호출
class KingEnemy extends GameObject {
    constructor(container, src, x, y, width, height, velX, velY, r, velR) {
        super(container, src, x, y, width, height, velX, velY)
        //r, velR은 super에 넘길 필요가 없음. 여기서만쓸거라

        this.r = r;//객체의 로테이트
        this.velR = velR;//각도크기

        this.img.style.transform=`rotate(${this.r}deg)`
    }
    move() {
        //물리량
        this.r+=this.velR
        this.x += this.velX;
        this.y += this.velY;
        //랜더링
        this.img.style.transform=`rotate(${this.r}deg)`
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

    }
}