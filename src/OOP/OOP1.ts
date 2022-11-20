//추상메서드 자체로는 새 인스턴스를 생성 X, 오로지 다른 클래스가 상속 -> 청사진
//private는 선언한 클래스 내에서만 접근가능하지만, protected는 자식 클래스 내에서도 접근가능하다
abstract class User {
    constructor(
        protected firstName : string,
        protected lastName : string,
        protected nickName : string

    ) {}
    abstract getNickName() : void // 자식 메서드는 반드시 구현 필요
    public getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

class PlayerClass extends User {
    getNickName() {
        console.log(this.nickName)
    }
}

const nene = new PlayerClass("nene", "momo", "orange") //인스턴스 생성
nene.getFullName()