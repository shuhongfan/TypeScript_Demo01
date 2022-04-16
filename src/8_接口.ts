(function () {
   // 描述一个对象的类型
   type myType={
       name: string,
       age: number
   }

   // 接口用来定义一个类结构,用来定义类中应该包含哪些属性和方法
   // 同时接口也可以当成类型什么去使用
   interface myInterface {
      name: string,
      age: number
   }

   /**
    * 接口可以在定义类的时候去限制类的结构
    * 接口中的所有属性都不能有实际的值
    * 接口只定义对象的结构,而不考虑实际值
    *    在接口中所有的方法都是抽象方法
    */
   interface myInterface{
      gender:string

      sayHello() :void
   }

   const obj: myInterface = {
      sayHello(): void {
         console.log('大家好-----')
      },
      name: 'sss',
      age: 111,
      gender:'男'
   }
   console.log(obj)


})()
