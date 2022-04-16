function fn<T>(a:T):T {
    return a
}

let result = fn(10)
let result2 = fn<string>('hello')

function fn2<T,K>(a:T,b:K):T {
    console.log(b)
    return a
}

fn2<number,string>(123,'hello')

interface Inter{
    length: number
}

// 表示泛型T必须是Inter实现类
function fn3<T extends Inter>(a: T):number {
    return a.length
}
fn3('123')
