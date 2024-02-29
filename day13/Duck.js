class Duck extends Bird{
    constructor(color,age){
        // 만약super이전에 작성된 코드가 있다면, 이는 인정받지 못함.
        super(color,age,"오리"); //부모인 bird를 먼저 생성함 
        console.log("I Duck")
    }
}