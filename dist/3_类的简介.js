class Person {
    constructor() {
        // 定义实例属性
        this.name = '孙悟空';
        this.age = 18;
    }
    // 实例方法
    sayHello() {
        console.log("hello 大家好！");
    }
}
// 在属性前使用static关键字定义类属性（静态属性）
// 无需创建，直接访问
Person.age = 18;
const per = new Person();
console.log(Person.age);
console.log(per);
console.log(per.name, per.age);
per.sayHello();
//# sourceMappingURL=3_%E7%B1%BB%E7%9A%84%E7%AE%80%E4%BB%8B.js.map