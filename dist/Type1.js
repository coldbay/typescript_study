const playerMaker = (name) => ({ name }); // : player, 리턴값 타입 지정
const mike = playerMaker("Mike");
mike.age = 16;
const sandy = playerMaker("sandy");
//sandy.name= "coco" <- readonly로 인해 수정불가
