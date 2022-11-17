const playerMaker = (name) => ({ name }); // : player, 리턴값 타입 지정
const mike = playerMaker("Mike");
mike.age = 16;
const sandy = playerMaker("sandy");
