type Player = { //타입 Alias -> 객체에 별칭
    readonly name: string // 수정불가  
    age?: number  //선택적 타입
}

const playerMaker = (name:string) : Player => ({name}) // : Player, 리턴값 타입 지정

const mike = playerMaker("Mike")
mike.age= 16

const sandy = playerMaker("sandy")
//sandy.name= "coco" <- readonly로 인해 수정불가