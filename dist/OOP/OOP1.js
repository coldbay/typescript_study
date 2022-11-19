//추상메서드 자체로는 새 인스턴스를 생성 X, 오로지 다른 클래스가 상속
//private는 선언한 클래스 내에서만 접근가능하지만, protected는 자식 클래스 내에서도 접근가능하다
class User {
    constructor(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class PlayerClass extends User {
    getNickName() {
        console.log(this.nickName);
    }
}
const nene = new PlayerClass("nene", "momo", "orange"); //인스턴스 생성
nene.getFullName();
