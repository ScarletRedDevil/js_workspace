class Hero{
    constructor(container,src,x,y,width,height,velX,velY){
        //객체가 보유한 변수를 멤버변수라고 함.
        //let a ; -> 이렇게 선언하면 괄호 내에서만 존재하는 지역변수가 되기때문에
        //this.b 처럼 멤버로 데려가야함.

        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;

        this.width =width;
        this.height=height;
        this.velX = velX;
        this.velY = velY;

        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.top=this.y+"px"
        this.img.style.left=this.x+"px"

        this.img.style.width=this.width+"px"
        this.img.style.height=this.height+"px"

        this.container.appendChild(this.img);
    }

    move(){
        //물리량 변화
        this.x+=this.velX;
        this.y+=this.velY;

        //랜더링(화면에 보여주기)
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}