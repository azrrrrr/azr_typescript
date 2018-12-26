/*
* TS中的接口
* 1. 接口可以理解为一个约定/一个规范。
* 2. 接口的作用就是，帮助我们去限制用户传入的参数类型是什么。
 */

// 想要使用aiax函数 在option参数中 需要包含 url type data success
// function ajax(options) {
//
// }


// 在TS中   接口使用interface进行声明
interface AjaxOptions{
    url: string,
    type: string,
    data: object,
    success(data: object): void
}

// 使用AjaxOptions来约束options
function ajax(options: AjaxOptions) {

}

ajax({
    url: "http://www.baidu.com",
    type: "get",
    data: {},
    success(data) {
    }
})

/*
*  只读属性 + 额外属性
*/
interface Point{
    // 只读属性
    readonly x: number,
    y: number,
    //  额外属性
    [propName: string]: any
}

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!


let p2: Point = {
    x: 10,
    y: 10,
    z: 100
}

/*
* 函数类型
*/
// 1. 想要在TS中实现sum这个函数。
// let sum = function(a, b) {
//     return a + b;
// }

/// 2.定义一个调用签名  这样参数列表和返回值类型的函数定义。每个参数都需要名字和类型。
interface SumInterFace{
    (a: number,b :number): number
}
// 3.像使用接口一样使用这个函数类型的接口。
let sum: SumInterFace = function(a: number, b: number){
    return a + b;
}


/*
*  类类型
*/
interface PersonInterFace{
    name: string,
        age: number,
        eat():void
}

//  实现接口使用implements关键字，继承 使用extends关键字

class XiaoMing implements PersonInterFace{
    name: string = "小明";
    age: number = 18;
    eat() {
    }
}


class XiaoHong implements PersonInterFace{
    name: string = "小红";
    age: number = 28;
    eat() {
    }
}

// var xh = new XiaoHong();
// xh.name;
// xh.age;
// xh.eat();


// 数据访问层代码的
// mysql orcal mssql mongodb
// dbinteface CRUD


/*
* 继承接口
* */

// 从一个复制到另一个
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 多个接口

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


/*
* 接口继承类
* */

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() {}
}

class Location {}
