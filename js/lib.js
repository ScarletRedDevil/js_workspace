// 앞으로 유용하고, 재사용성 높은 복잡한 로직을 함수로 정의하여
// 이 파일 안에 모을 것.
function dan(n) {
    for (let i = 1; i <= 9; i++) {
        document.write(`${n}*${i} = ${n * i}<br>`);
    }
}

// 랜덤값 반환하기 
// max 지정 후 max까지의 랜덤 값 구하기

function getRandomFloat(max) {
    let n = (max + 1) * Math.random(); // 1보다 작은 실수 발생
    n = parseFloat(n);
    //console.log(n);
    return n;
}

function getRandomInt(max) {
    let n = (max + 1) * Math.random(); // 1보다 작은 실수 발생
    n = parseInt(n);
    //console.log(n);
    return n;
}

// 최소값, 최대값 지정하여 반환되는 랜덤 함수
function getRandomByRange(min, max) {
    let result = min + getRandomInt(max - min);
    //console.log(result);
    return result;
}
function moveSoft() {
    chng.style.left = parseFloat(chng.style.left) + a * (targetX - parseFloat(chng.style.left)) + "px";
    chng.style.top = parseFloat(chng.style.top) + a * (targetY - parseFloat(chng.style.top)) + "px";
    //chng 자리를 사용 시에 코드단에서 움직이고 싶은 주체로 변경해서 쓸것
}
function collisionCheck(box1, box2) {
    //좌상단 모서리 
    let side1 = ((box1.x + box1.width) >= box2.x) && ((box1.y + box1.height) >= box2.y)
    //우상단 모서리
    let side2 = (box1.x <= (box2.x + box2.width)) && ((box1.y + box1.height) >= box2.y)
    //우하단 모서리
    let side3 = (box1.x <= (box2.x + box2.width)) && (box1.y <= (box2.y + box2.height))
    //좌하단 모서리
    let side4 = ((box1.x + box1.width) >= box2.x) && (box1.y <= (box2.y + box2.height))
    //모든 사분면이 true 일때 전체를 true 즉 충돌로 인식
    return (side1 && side2 && side3 && side4);
}

function filterLang(lang,badArray,goodArray){
    let str = lang;

    for (i = 0; i < badArray.length; i++) {
        str = str.replace(badArray[i], goodArray[i]);
    }
    return str;
}