// 1. Number
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制

// 2. string
let color: string = "blue";
color = 'red';

let myName: string = 'Jack';
let age: number = 12;
let int: string = `My name is  ${myName}.
I am now ${age} years old`;

// 3. Boolean
let bool: boolean = false;

// 4. Array
// Array<T类型>
let arr: Array<number> = [1,2,3];
// 数据类型[]
let arr1: number[] = [1,2,3];

// 5. Tuple
let yz:[number, string];
yz = [1,'asdf'];
yz = ['asdf', 2];// 报错
console.log(yz[1].substr(1));
console.log(yz[0].substr(1)); // 报错

// 6. Any
let Ath: any = ['123',123];

// 7. 空值
function warnUser(): void {
    alert("This is my warning message");
}
let res: void = undefined;

//  8. null
let res1: null = null;

// 9. undefined
let res2: undefined = undefined;

// 10. nerver
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// 11. Object
// object类型
let o: object = {};
let o1: object = [];

// 对象类型
let o2: { name: string, age: number } = { name: "张学友", age: 18 };

// 12. Enum
// gender: 0  1  -1
enum Gender{
    male = 1,
    female = 0,
    unknow = -1
}

let gender: Gender = Gender.male;

let obj = {
    gender: Gender.male
}


// 13. 类型断言
// “尖括号”语法
let stri: any = "abc";
let len: number = (<string>stri).length;
// as语法
let stri: any = "abc";
let len1: number = (stri as string).length;
