//unknown 타입 형태가 정해지지 않았을 때

let un : unknown

if(typeof un === "number"){  // 타입체크
    let check = un + 1
}

if(typeof un === "string"){
    let check = un + "mae"
}

//void 리턴값이 없는 함수
function cc(){
    console.log("s")
}

//never - 절대 return을 하지 않을 때 -> 예외상황
function error() : never{
    throw new Error("xxx")
}