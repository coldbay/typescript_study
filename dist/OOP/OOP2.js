class Words {
}
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(word) {
        return this.words[word.term];
    }
    update(word, def) {
        word.def = def;
        this.words[word.term] = word.def;
    }
    rmv(word) {
        if (this.words[word.term]) {
            delete this.words[word.term];
        }
    }
    static hello() {
        return "hello";
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "한국의 대표음식");
const dict = new Dict();
dict.add(kimchi);
dict.def(kimchi);
dict.update(kimchi, "best");
dict.rmv(kimchi);
Dict.hello();
