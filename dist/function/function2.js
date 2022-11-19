// 다형성(Poly / morphism) -> 많은 / 구조
//-> generic - 타입의 placeholder(인수의 타입에 따라 타입이 변하는) => 타입을 추론해서 사용
//any와 차이 - generic처럼 받았던 인수들의 타입 정보를 활용 X -> 타입 보호 X
const superPrint = (arr) => (arr[0]);
superPrint([1, 2, 3], "x");
superPrint(["1", "2", "3"], 5);
superPrint([1, 2, true, false], false);
const nico = { name: "nico", info: 4234 };
