//로컬스토리지 API 디자인
interface SStorage<T>{
    [key:string]:T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage={}
    }
}

const NumberStorage = new LocalStorage<Number>()

NumberStorage.set("messi", 10)
NumberStorage.get("messi")