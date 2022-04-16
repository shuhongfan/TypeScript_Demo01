
abstract class Animal{
    name:string;

    constructor(name:string) {
        this.name = name
    }

    // 定义一个抽象方法
    // 抽象方法只能定义在抽象类中,子类必须对对象进行重写
    abstract sayHello();
}


class Dog extends Animal{
    sayHello() {

    }

}
