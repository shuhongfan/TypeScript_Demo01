(function () {
    // 定义一个Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫~~~');
        }
    }
    // 定义一个表示狗的类
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪汪！');
        }
        run() {
            console.log(`${this.name}在跑`);
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵喵！');
        }
    }
    let d = new Dog('旺财', 20);
    console.log(d);
    d.run();
    let c = new Cat('喵喵喵', 2);
    console.log(c);
})();
//# sourceMappingURL=5_%E7%BB%A7%E6%89%BF.js.map