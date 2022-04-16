// 声明一个变量a，同时指定它的类型是number
let a:number;

// a的类型设置为number，在以后的使用过程中值只能是数字
a=10;
a=33;
// a='hello'


function sum(a: number,b: number) {
    return a+b
}
sum(123,59)


let c: boolean | string
c=true
c='hello'


function fn():void{
    return undefined;
}

let b:{name:string,age?:number}
b={name:'sfds'}

let d:{name:string,[propName: string]:any}
d={name:'fsd'}

let e:(a:number,b:number) =>number
e=function (n1,n2):number {
    return 11
}

let f:string[]

type myType = 1|2|3|4|5
let k:myType

