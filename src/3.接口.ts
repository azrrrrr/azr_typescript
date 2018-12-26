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
