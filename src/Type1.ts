type Player = { //Alias 타입
    readonly name: string // 수정불가  
    age?: number  //선택적 타입
}

const playerMaker = (name:string) : Player => ({name}) // : player, 리턴값 타입 지정

const mike = playerMaker("Mike")
mike.age= 16

const sandy = playerMaker("sandy")
//sandy.name= "coco" <- readonly로 인해 수정불가