//Tuple
const player : readonly [string, number, boolean] = ["me", 77, false]
// player[0] = 1 string이 들어갈 자리이고 readonly라 에러

//any 타입스크립트의 보호장치 무시 -> 기존의 자바스크립트처럼
const a : any[] = [1,2,3,4]
const b : any = false

a + b

