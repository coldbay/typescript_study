// 다형성(Poly / morphism) -> 많은 / 구조(타입들)
//-> generic - 타입의 placeholder(인수의 타입에 따라 타입이 변하는) => 타입을 추론해서 사용
//any와 차이 - generic처럼 받았던 인수들의 타입 정보를 활용 X -> 타입 보호 X

type SuperPrint = {
    <T,M>(arr: T[], b: M): T // M은 그냥 다중으로 사용가능하다는 예시 
}

const superPrint: SuperPrint = (arr) => (
    arr[0]
)

superPrint([1, 2, 3],"x")
superPrint(["1", "2", "3"],5)
superPrint([1, 2, true, false],false)


type GenericPlayer<E> = {
    name:string
    info:E
}

const nico : GenericPlayer<number> = {name:"nico", info:4234}
