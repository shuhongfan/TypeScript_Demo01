class Person{
    // 定义实例属性
    name: string='孙悟空'
    age:number=18

    // 在属性前使用static关键字定义类属性（静态属性）
    // 无需创建，直接访问
    static age:number = 18

    // 实例方法
    sayHello(){
        console.log("hello 大家好！")
    }
}

const per = new Person()

console.log(Person.age)
console.log(per)
console.log(per.name,per.age)
per.sayHello()
