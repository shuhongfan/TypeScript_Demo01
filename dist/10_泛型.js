function fn(a) {
    return a;
}
let result = fn(10);
let result2 = fn('hello');
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
// 表示泛型T必须是Inter实现类
function fn3(a) {
    return a.length;
}
fn3('123');
//# sourceMappingURL=10_%E6%B3%9B%E5%9E%8B.js.map