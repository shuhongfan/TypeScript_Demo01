(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        getName() {
            return this._name;
        }
        setName(name) {
            this._name = name;
        }
        getAge() {
            return this._age;
        }
        setAge(age) {
            if (age >= 0)
                this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get age() {
            return this._age;
        }
        set name(name) {
            this._name = name;
        }
    }
    const per = new Person('孙悟空', 18);
    console.log(per);
    per._name = 'dsf';
    per._age = 565;
    console.log(per);
})();
//# sourceMappingURL=9_%E5%B1%9E%E6%80%A7%E7%9A%84%E5%B0%81%E8%A3%85.js.map