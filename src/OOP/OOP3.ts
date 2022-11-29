//Interface
type Team = "R" | "G" | "B"
type Health = number

interface UserInterface{ //type 기능 중 일부인 객체의 모양을 선언
    nickname: string
    team: Team
    health: Health
}

interface PlayerInterface extends UserInterface{ //차이점- type에 비해 OOP 문법과 유사, 재선언으로 프로퍼티 추가 가능
    backnumber:number
}
/*기존 타입 방식
type PlayerType = UserType && {

}
*/

const nenechi : PlayerInterface = {
    nickname:"nene",
    team: "B",
    health: 5,
    backnumber: 77
}

//인터페이스는 추상클래스처럼 사용 가능 but, public으로만 프로퍼티를 선언가능,  js에서 interface는 컴파일(표현) X -> 코드가 간결해짐 
//OOP1.ts의 abstarct class와 비교

interface UserAbstract{
    firstname:string,
    lastname:string,
    sayHi(name:string):string
    fullName():string
}


class PlayerAbstract implements UserAbstract{
    constructor(
        public firstname:string,
        public lastname:string
    ){}
    sayHi(name:string){
        return `Hello ${name}!`
    }
    fullName(){
        return`${this.firstname} ${this.lastname}`
    }
}

