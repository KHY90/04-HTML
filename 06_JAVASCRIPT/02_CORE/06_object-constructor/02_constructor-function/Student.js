class Sutdent{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    getinfo(){
        return `${this.name}의 나이는 ${this.age}입니다.`
    }

}

export default Sutdent;