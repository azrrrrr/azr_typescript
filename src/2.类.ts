/*
* TS中基本类的实现
* 1. 和ES6不同的是，TS中属性必须声明，需要指定类型
* 2. 声明好属性之后，属性必须赋值一个默认值或者在构造函数中进行初始化
*/
class Person{
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        return "hi,My name is"+this.name+",My age is"+this.age
    }
}

let Jack = new Person('Jack',20);
console.log(Jack.sayHi());


/*
 * TS中类的继承
 * 1. 出现同名的属性和方法则以子类的为准  但是可以通过super.对应名的方式调用父类的内容
 * 2. 在子类的构造函数中用super()可以直接继承父类的构造函数
 */
class Animal{
    age: number
    constructor(age: number) {
        this.age = age;
    }
    eat() {
        console.log('吃点❓')
    }
}

class Dog extends Animal {
    type: string
    constructor(type: string, age: number) {
        // 在子类的构造函数中用super()可以直接继承父类的构造函数
        super(age);
        this.type = type;
    }
    eat() {
        console.log('狗吃❓')
    }
    eats() {
        // 可以通过super.对应名的方式调用父类的内容
       return super.eat();
    }
}

var seven = new Dog('seven', 1);
// 出现同名的属性和方法则以子类的为准
seven.eat();
seven.eats();


/*
* TS中基本类的成员的访问修饰符
* 1. 访问修饰符：指的就是可以在类的成员前通过添加关键字来设置当前成员的访问权限
* 2. public: 公开的，默认   所有人都可以进行访问
* 3. private： 私有的， 只能在当前类中进行访问
* 4. protected： 受保护的，这能在当前类或者子类中进行访问
*/
enum Color{
    red,
    yellow,
    blue
}

class Car{
    // 如果不加访问修饰符 则当前成员默认是公开的 所有人都可以访问的
    // 添加 public  效果是一样的。
    public color: Color
    constructor() {
        this.color = Color.red;
    }
}
let baoma = new Car();
// baoma.color


class Aodi extends Car {
    sayHi(){
        console.log(this.color)
    }
}
let aodi = new Aodi();
// aodi.color

/*
 * TS中基本类的成员的访问修饰符
 * 加了private之后，当前成员就只能在当前类中使用了
 */

class Food {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

// let egg = new Food("egg").name; // 错误: 'name' 是私有的.



/*
* 比较带有private或protected成员的类型
*/

class A {
    // 只能在A中使用
private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class B extends A {
    // 继承A
    constructor() {
        super("b");
    }
}

class C {
    // 只能在C中使用
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let a = new A("a");
let b = new B();
let c = new C("c");

a = b; // 是兼容的
// a = c; // 错误: Animal 与 Employee 不兼容.


/*
 * TS中基本类的成员的访问修饰符
 * 加了protected之后，当前成员就只能在当前类或者子类中使用
 */

class Apple {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Computer extends Apple{
    private type: string;
    constructor(name: string, type: string) {
        super(name)
        this.type = type;
    }
    sayHi() {
        console.log( `this ${this.name} is ${this.type} `)
    }
}
let mac = new Computer('mac pro','computer');
mac.sayHi();

// 在外部无法使用
// console.log(mac.name);
// console.log(mac.type);// 报错


/*
 * TS中基本类的成员的访问修饰符
 * 加了protected的构造函数，本身无法被实例化，但是继承其class的子类，可以实例化。
 */

class Apple1 {
    protected name: string;
    //  protected   构造函数
    protected constructor(theName: string) {
        this.name = theName;
    }
}
class Computer1 extends Apple{
    private type: string;
    constructor(name: string, type: string) {
        super(name)
        this.type = type;
    }
    sayHi() {
        console.log( `this ${this.name} is ${this.type} `)
    }
}
let mac1 = new Computer1('mac pro','computer');
// let iphone = new Apple1('iphoneX','cellphone'); // 报错


/*
* TS中的只读属性和参数属性
* 1. readonly 只读属性
*    1.1  必须在声明/构造函数中被赋值
*    1.2  readonly后续无法赋值
* 2. 参数属性
*    2.1 构造函数中给参数前面加上修饰符，就相当于声明了一个属性
*    2.2 可以是public   private  protected
*/

class Cat{
    // 如果给属性添加了readonly修饰 则这个属性无法被赋值
    // 而且属性必须在声明的时候或者在构造函数中被赋值！
    readonly name: string
    // type: string
    // 构造函数中给参数前面加上修饰符，就相当于声明了一个属性！
    constructor(public type: string) {
        this.name = "加菲"
        // this.type = type
    }
}

var cat = new Cat("橘猫");
// readonly
// cat.name = "123"
// 参数属性
// cat.type;


/*
* TS中的存储器
*/

class People{
    // 用来保存数据
    private _name: string = ""
    // 属性的存取器
    get name(): string{
        return this._name;
    }

    set name(value: string) {
        // 设置器中可以添加相关的校验逻辑
        if (value.length < 2 || value.length > 5) {
            throw new Error("名字不合法，不许使用！")
        }
        this._name = value;
    }
}

var p = new People();
p.name = "的司法考试来得及"

console.log(p.name);
