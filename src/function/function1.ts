//call signature- 함수의 인수,리턴값 타입을 담고 있는 타입을 선언
type Add = (a: number, b: number) => number

const add: Add = (a, b) => a + b

//overloading - 여러 call signature 가지는 함수 ,nextJS push - 경로이동 기능

type Config = {
    path: string,
    state: object
}

type Push = {   //파라미터 타입에 따른 overloading을 야기하는 call signature
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config)
    }
    else console.log(config.path)
}


type Add2 = (a: number, b: number, c?: number) => number

const addr: Add2 = (a, b, c) => {
    if (c) return a + b + c
    return a + b
}


