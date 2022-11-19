type Team = "R" | "G" | "B"
type Health = number

interface UserInterface{ //type 기능 중 일부인 객체의 모양을 선언
    nickname: string
    team: Team
    health: Health
}

interface PlayerInterface extends UserInterface{ //type에 비해 OOP 문법과 유사

}

const nenechi : PlayerInterface = {
    nickname:"nene",
    team: "B",
    health: 5
}