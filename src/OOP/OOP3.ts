type Team = "R" | "G" | "B"
type Health = number

interface UserInterface{ //type 기능 중 일부인 객체의 모양을 선언
    nickname: string
    team: Team
    health: Health
}

interface PlayerInterface extends UserInterface{ //type에 비해 OOP 문법과 유사
    backnumber:number
}
//타입도 구현

const nenechi : PlayerInterface = {
    nickname:"nene",
    team: "B",
    health: 5,
    backnumber: 77
}

//인터페이스는 추상클래스처럼 사용 가능 but, js에서 interface는 컴파일 X -> 코드가 간결해짐 