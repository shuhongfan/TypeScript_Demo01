(function () {
   class Person {
      private _name: string
      private _age: number

      constructor(name: string, age: number) {
         this._name = name
         this._age = age
      }

      getName(){
         return this._name
      }

      setName(name: string){
         this._name = name
      }

      getAge() {
         return this._age
      }

      setAge(age: number){
         if (age>=0)
            this._age=age
      }

      // get name(){
      //    return this._name
      // }
      // set name(name: string){
      //    this._name = name
      // }
      // get age() {
      //    return this._age
      // }
      // set name(name: string){
      //    this._name=name
      // }
   }

   const per = new Person('孙悟空', 18)
   console.log(per)
   // per._name='dsf'/**/
   // per._age=565
   console.log(per)
})()
