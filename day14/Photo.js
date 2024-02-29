class Photo { //썸네일과 큰 이미지에 사용될 포토객체
    constructor(container, src, x, y, width, height) {
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.img.src = this.src;
        //style
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px"
        this.img.style.top = this.y + "px"

        this.img.style.width = this.width + "px"
        this.img.style.height = this.height + "px"

        //이미지에 테두리 적용(box에 의하여 border, margin, padding 등 크기에 영향)
        this.img.style.border = "2px solid yellow";
        this.img.style.boxSizing = "border-box"

        this.container.appendChild(this.img);

        //이미지에 클릭이벤트
        $(this.img).click(() => {
            //이벤트 처리영역에서의 this의scope는 이벤트를 일으킨 객체를 의미
            //화살표함수를 사용 시 바깥쪽(상위) scope를 접근 가능함
            //aside 내 pic 이미지객체의 src를 현재 클릭한 썸네일과 동일처리

            //현재 클릭된 객체가 배열의 어디에 존재하는지 알 수 있다면 
            //해당 movie.marvel 배열로부터 같은 index를 갖는 각종 정보를 가져올 수 있음 
            let index = thumbArray.indexOf(this);
            console.log("선택한 photo의 배열의 인덱스는", index)

            let obj = movie.marvel[index];// 마블 배열내의 영화 객체하나 추출
            //aside 안에 있는 pic 이라는 이미지객체의 src를 현재 클릭한 썸네일과 동일하게 처리
            $("#pic").attr("src", this.src); //큰 이미지
            let tag="개봉일 : " + obj.release_year+"<br>"; //여기는 html 적용이니 br태그
            tag+="부제 : "+obj.phase;
            $("#content").html(tag)
        });
    }
}