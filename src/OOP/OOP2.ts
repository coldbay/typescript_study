class Words {
    [key: string]: string //property의 이름은 정해지지 않았지만 타입만 알때 -> key를 활용
}

class Dict {
    private words: Words // 인스턴스가 의무적으로 constructor로 두고 싶지 않을때
    constructor() { // 수동으로 초기화
        this.words = {}
    }

    public add(word: Word) { //특정 클래스를 가진 인스턴스를 타입처럼 파라미터로 받을 수 있음
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    public def(word: Word) {
        return this.words[word.term]
    }
    public update(word: Word, def: string) {
        word.def = def
        this.words[word.term] = word.def
    }
    public rmv(word: Word) {
        if (this.words[word.term]) {
            delete this.words[word.term]
        }
    }
    static hello(){ //인스턴스 생성 없이 클래스 이름으로 바로 호출하는 메서드
        return "hello"
    }
}

class Word {
    constructor(
        public readonly term: string,
        public def: string
    ) { }
}

const kimchi = new Word("kimchi", "한국의 대표음식")

const dict = new Dict()

dict.add(kimchi)
dict.def(kimchi)
dict.update(kimchi, "best")
dict.rmv(kimchi)

Dict.hello()