# JaveScript的超集--TypeScript



> TypeScript是JaveScript的超集，可以编译纯JaveScript。可以在任何浏览器哦，任何计算机和任何系统上运行，并且是开源的。

## 参考Link

* [官方Link](http://www.typescriptlang.org/docs/handbook/basic-types.html)
* [非官方中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/)
* [TypeScript 入门教程](https://ts.xcatliu.com/)
* [从 JavaScript 到 TypeScript](https://tasaid.com/Blog/20171011231943.html?sgs=sf)

## TypeScript

* TypeScript是微软公司开发的一款开源的JavaScript超集语言！

* JavaScript超集：当前任何JavaScript都是合法的TypeScript代码！

* TypeScript主要为JavaScript提供了类型系统和ES6语法的支持！

* Flow是一个类型检查工具，TypeScript是一种开发语言！

* TypeScript有自己的编译工具，写好的TypeScript代码最终会通过编译器编译成JavaScript代码进行运行！
* TypeScript从出现至今已经成为了前端领域中不可忽视的技术，各大流行框架都已经支持使用 TypeScript 作为开发语言。

## 简单使用

### 安装

TypeScript 最终要运行起来，我们需要将 TypeScript 代码转换成对应的 JavaScript 代码，那么 TypeScript 的命令行工具就可以帮我们完成这件事情。

TypeScript 的命令行工具安装方法如下：

```bash
$ npm i -g typescript
```

以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了。

编译一个 TypeScript 文件很简单：

```bash
$ tsc hello.ts
```

我们约定使用 TypeScript 编写的文件以 .ts 为后缀。

### 体验

只需要看 TypeScript 给我们带来的功能体验。

文件 `hi.ts`

```ts
function hi(name: string) {
  return "Hello, " + name;
}

let str = "World";
console.log(hi(str));
```

这个代码就是TypeScript，在这里规定了函数`hi`中传入参数必须`string`类型。

接下来我们在命令行中执行

```bash
tsc greeter.ts
```

这个命令会将我们写好的 ts 文件转换成相应的 JavaScript 代码文件

```js
function hi(name) {
    return "Hello, " + name;
}
var str = "World";
console.log(hi(str));

```

**TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错**

下面尝试把这段代码编译一下：

```ts
function hi(msg: string) {
  return "Hello, " + msg;
}

let str = [0, 1, 2];
console.log(hi(str));
```

编辑器中会提示错误，控制台显示如下。

```bash
➜  ts tsc hi.ts
hi.ts:14:16 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

14 console.log(hi(str));
                  ~~~


Found 1 error.
```

但是还是生成了 js 文件：

```js
function hi(msg) {
    return "Hello, " + msg;
}
var str = [0, 1, 2];
console.log(hi(str));
```

**TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。**

### 配置文件

1.  创建配置文件

   ```bash
   $ tsc --init 
   ```

2. 生成一个配置文件`tsconfig.json`

   ```json
   {
     "compilerOptions": {
       // 要转换为哪个版本的JS  e.g.ES6
       "target": "es5",   
       // 使用的模块标准化   e.g.common.js
       "module": "commonjs", 
       // 存放JS代码的路径
       "outDir": "./dist",
       // 存放TS代码的路径
       "rootDir": "./src",
       // 自动转换为严格模式的JS代码形式
       "strict": true,      
       // 引入第三方文件 默认自动寻找导出项
       "esModuleInterop": true
     }
   }
   ```

3. 使用配置文件

   ```bash
   $ tsc -p ./tsconfig.json
   ```

##  数据类型

### 介绍

为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。TypeScript 支持与 JavaScript 几乎相同的数据类型，还提供了实用的枚举类型方便使用。


###Number 数字

支持十进制和十六进制字面量，还支持 ES6中的二进制和八进制字面量。

```ts
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制
```

### String 字符串

可以使用双引号（`"`）或单引号（`'`）表示字符串。

```ts
let color: string = "blue";
color = 'red';
```

也可以使用*模版字符串*，可以定义多行文本和内嵌表达式。 

被反引号包围（`'``'`），并且以`${ expr }`这种形式嵌入表达式

```ts
let myName: string = 'Jack';
let age: number = 12;
let int: string = `My name is  ${myName}.
I am now ${age} years old`;
```

这与下面效果相同.

```ts
var myName = 'Jack';
var age = 12;
var int = "My name is  " + myName + ".\nI am now " + age + " years old";
```

### Boolean 布尔值

`boolean`的值是 true/false

```ts
let bool: boolean = false;
```


### Array 数组

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。

 第一种，可以在元素类型后面接上`[]`，表示由此类型元素组成的一个数组。

```ts
let arr: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`。

```ts
let arr: Array<number> = [1, 2, 3];
```

### Tuple 元组 

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

 比如，你可以定义一对值分别为`string`和`number`类型的元组。

```ts
let yz:[number, string];
yz = [1,'asdf'];
yz = ['asdf', 2];// Error
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
console.log(yz[0].substr(1)); // number没有substr的方法
console.log(yz[1].substr(1));
```

###Any 任意值

用来表示任意类型。有时候，在编程阶段还不清楚类型的变量指定一个类型，这个值可能是来自用户输入/第三方库。不需要通过检查器对这些值进行检查就让他们通过编译的阶段。

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

在对现有代码进行改写的时候，`any`类型是十分有用的，允许在编译时可选择地包含或移除类型检查。

> 与`Object的`区别：
>
> `Object`类型的变量只是允许赋任意值 - 但是却不能够在它上面调用任意的方法。

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

当你只知道一部分数据的类型时，`any`类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

### Void 空值

有点和 `any` 类型相反，意思为没有任何类型；当一个函数没有返回值时，通常会返回值类型`void`

```ts
function warnUser(): void {
  alert("This is my warning message");
}
```

不适合用来声明变量，因为只能用来声明`undefined`和`null`

```ts
let unusable: void = undefined;
```

###Null 和 Undefined

`null`和`undefined`有它们各自的类型，就是`null`和`undefined`。

只能用来声明自己。

```ts
//  null
let res1: null = null;

// undefined
let res2: undefined = undefined;
```

默认情况下，`null`和`undefined`是所有类型的子类型。

指定了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们自己。

> 注意：尽可能地使用`--strictNullChecks`。

### Never

`never`类型表示永不存在的值的类型。 

>  例如，`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
>
>  变量也可能是`never`类型，当它们被永不为真的类型保护所约束时。

`never`类型是任何类型的子类型，也可以赋值给任何类型.

*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 

>  注意： 即使`any`也不可以赋值给`never`。

下面是一些返回`never`类型的函数：

```ts
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
  while (true) {}
}
```

###Object

```ts
// object类型
let o: object = {};
let o1: object = [];

// 对象类型
let o2: { name: string, age: number } = { name: "张学友", age: 18 };
```


### Enum 枚举

`enum`类型是对 JavaScript 标准数据类型的一个补充。是一种更友好的名称数值集。

```ts
// 默认情况下，从0开始为元素编号。
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
```

###类型断言

*类型断言*在没有运行时的影响，只是在编译阶段起作用。 

1. “尖括号”语法

```ts
// “尖括号”语法
let stri: any = "abc";
let len: number = (<string>stri).length;
```

2. `as`语法

```ts
// as语法
let stri: any = "abc";
let len1: number = (stri as string).length;
```

> 使用JSX的时候，尽量使用`as`语法。

### 关于`let`

尽可能地使用`let`来代替`var`。

## 类

### 介绍

从ES6开始开始使用基于类的面向对象的方式，来创建类。在TS中现在就可以使用这些特性，并且编译后的 JS 可以在所有主流浏览器和平台上运行，而不需要等到下个 JS 版本。

### 类

使用类

```ts
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
```

声明一个`Person`类。这个类有 3 个成员：一个叫做`name`和`age`的属性，一个构造函数和一个`sayHi`方法。

在引用任何一个类成员的时候都用了`this`。 表示我们访问的是类的成员。

使用`new`构造了`Person`类的一个实例。 它会调用之前定义的构造函数，创建一个`Person`类型的新对象，并执行构造函数初始化它。

1. 和ES6不同的是，TS中属性必须声明，需要指定类型
2. 声明好属性之后，属性必须赋值一个默认值或者在构造函数中进行初始化

###继承

 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

继承类

```ts
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
seven.eats()；

```

类从基类中继承了属性和方法。`Dog`是一个*派生类*，它派生自`Animal`*基类*，通过`extends`关键字。 `派生类通常被称作*子类*，基类通常被称作*超类*。

1. 出现同名的属性和方法则以子类的为准  但是可以通过`super.`对应名的方式调用父类的内容
2. 在子类的构造函数中用`super()`可以直接继承父类的构造函数

### 公共，私有与受保护的修饰符

访问修饰符：指的就是可以在类的成员前通过添加关键字来设置当前成员的访问权限。

```javascript
enum Color{
    red,
    yellow,
    blue
}
// 如果不加访问修饰符 则当前成员默认是公开的 所有人都可以访问的
class Car{
    color: Color
    constructor() {
        this.color = Color.red;
    }
}
let baoma = new Car();
// baoma.color
```

如果不加访问修饰符，则当前成员默认是公开， 所有人都可以访问的。

####  默认为`public`

也可以明确的将一个成员标记成`public`。 一般情况下默认是`public`。

```ts
/*
* TS中基本类的成员的访问修饰符
*  public  默认的   所有人都可以进行访问
*/
enum Color{
    red,
    yellow,
    blue
}


class Car{
    // 添加 public  效果是一样的。
    public color: Color
    constructor() {
        this.color = Color.red;
    }
}


// 在构造函数之外是可以访问的。
let baoma = new Car();
// baoma.color
class Aodi extends Car {
    sayHi(){
        console.log(this.color)
    }
}


// 在子类中也是可以访问的。 
let aodi = new Aodi();
// aodi.color
```

#### 私有`private`

当成员被标记成`private`时，它就不能在声明它的类的外部访问。比如：

```ts
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

let egg = new Food("egg").name; // 错误: 'name' 是私有的.
```

1. `private`的属性和方法只能在`class`内部使用；
2. 被继承后在子类的`constructor`中虽然能用`super()`获取，但无法输出，也无法在方法中使用，因此可以认为`private`的属性只是为了给`class`*自身*(不包括子)的方法提供参数，与其他都无关系。

--------

比较带有`private`或`protected`成员的类型的时候， 如果其中一个类型里包含一个`private`成员，那么只有当另外一个类型中也存在这样一个`private`成员， 并且它们是来自同一处声明时，这两个类型是兼容的。 对于`protected`成员也适用这个规则。

```ts
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
a = c; // 错误: Animal 与 Employee 不兼容.
```

有`A`和`B`两个类，`B`是`A`类的子类。 还有一个`C`类，看上去与`A`是相同的。

 因为`A`和`B`共享了来自`A`里的私有成员定义`private name: string`，因此它们是兼容的。

 然而`C`却不是这样。当把`C`赋值给`A`的时候，得到一个错误，说它们的类型不兼容。

 尽管`C`里也有一个私有成员`name`，但它明显不是`A`里面定义的那个。

####受保护`protected`

`protected`修饰符与`private`修饰符的行为很相似，但有一点不同，`protected`成员在派生类中仍然可以访问。例如：

```ts
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
console.log(mac.name);
console.log(mac.type);

```

不能再`Apple`的类外使用`name`，但是可以通过`Computer`类的实例方法访问，因为`Computer`是由`Apple`派生来的。

> `protected`的属性和方法，虽然也不能在`class`外调用，但是一旦子`class`继承了该属性，可以在子`class`的方法中使用该值。

```ts
/*
 * TS中基本类的成员的访问修饰符
 * 加了protected的构造函数，本身无法被实例化，但是继承其class的子类，可以实例化。
 */

class Apple {
    protected name: string;
    //  protected   构造函数
    protected constructor(theName: string) {
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
let iphone = new Apple('iphoneX','cellphone'); // 报错
```

> 加了`protected`的构造函数，本身无法被实例化，但是继承其`class`的子类，可以实例化。

### 只读属性和参数属性

#### readonly 只读属性

1. 使用`readonly`关键字将属性设置为只读的。 
2. 属性必须在声明/构造函数中被赋值。
3. 属性后续无法赋值。

```ts
/*
* TS中的只读属性和参数属性
*  readonly 只读属性
*    1.1  必须在声明/构造函数中被赋值
*    1.2  属性后续无法赋值
*/
class Cat{
    // 如果给属性添加了readonly修饰 则这个属性无法被赋值
    // 属性必须在声明/构造函数中被赋值
    readonly name: string
    type: string
   
    constructor( type: string) {
        this.name = "加菲"
        this.type = type
    }
}

var cat = new Cat("橘猫");

cat.name = "123" // 错误
```

#### 参数属性

1. *参数属性*可以方便地在一个地方定义并初始化一个成员。 
2. 构造函数中给参数前面加上修饰符，就相当于声明了一个属性。
3. 修饰符可以是public/private/protected。

```ts
/*
* TS中的只读属性和参数属性
*  参数属性
*    1 构造函数中给参数前面加上修饰符，就相当于声明了一个属性
*    2 可以是public   private  protected
*/

class Cat{
    name: string
    // 构造函数中给参数前面加上修饰符，就相当于声明了一个属性
    constructor(public type: string) {
        this.name = "加菲"
    }
}

var cat = new Cat("橘猫");
// cat.type;
```

怎么舍弃了`type`，在构造函数里使用`private type: string`参数来创建和初始化`name`成员。 把声明和赋值合并至一处。

参数属性通过给构造函数参数添加一个访问限定符来声明。 使用`private`限定一个参数属性会声明并初始化一个私有成员；对于`public`和`protected`来说也是一样。

### 存取器

TS 支持通过 `getters/setters` 来截取对对象成员的访问。

```ts
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

```

1. 存取器要求编译器设置为输出 ECMAScript 5 或更高。 不支持降级到 ECMAScript 3
2. 只带有`get`不带有`set`的存取器自动被推断为`readonly`。

##接口

###  介绍

TS 的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。

接口： 为一个约定/一个规范。

接口的作用：帮助我们去限制用户传入的参数类型是什么。

### 接口初探

想要使用`ajax`函数 在`option`参数中 需要包含 `url`， `type` ，`data` ，`success`。

```js
function ajax(options) {

}
```

在TS中，接口使用`interface`进行声明。

```ts
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
```

### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。给属性加上`？`之后，这个属性就是可选的。

```ts
interface AjaxOptions{
    url: string,
    // 给属性加上？之后，这个属性就是可选的
    type？: string,
    data？: object,
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
```

1. 可以对可能存在的属性进行预定义。
2. 可以捕获引用了不存在的属性时的错误。 

### 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用`readonly`来指定只读属性:

```ts
interface Point {
     // 只读属性
  readonly x: number;
     // 只读属性
  readonly y: number;
}
```

可以通过赋值一个对象字面量来构造一个`Point`。 赋值后，`x`和`y`再也不能被改变了。

```ts
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

### 额外的属性检查

```ts
interface Point{
    // 只读属性
    readonly x: number,
    y: number,
    //  额外属性
    [propName: string]: any
}

let p2: Point = {
    x: 10,
    y: 10,
    z: 100
}

```

`p2`属性是有`x,y,z`，三个属性，但是之前定义的只有`x，y`，属性`z`就会报错。

定义额外属性`[propName: string]: any`，就可以忽略其他的属性。

### 函数类型

想要在TS中实现`sum`这个函数。

```js
let sum = function(a, b) {
    return a + b;
}
```

通过接口去描述函数类型。

```ts
// 定义一个调用签名  这样参数列表和返回值类型的函数定义。每个参数都需要名字和类型。
interface SumInterFace{
    (a: number,b :number): number
}
// 像使用接口一样使用这个函数类型的接口。
let sum: SumInterFace = function(a: number, b: number){
    return a + b;
}
```

1. 定义一个调用签名  这样参数列表和返回值类型的函数定义。每个参数都需要名字和类型。
2. 像使用接口一样使用这个函数类型的接口。
3. 函数的参数名不需要与接口里定义的名字相匹配。
4. 不想指定参数类型，TS会自动推断参数类型。

### 类类型

1. 类类型接口: 对类的规范，这种类型的接口在传统面向对象语言中最为常见，比如Java中接口就是这种类类型的接口 。这种接口与抽象类比较相似，但是接口只能含有为抽象方法、成员属性。
2. 实现类中必须实现接口中所有的抽象方法和成员属性。

```ts
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

```



### 接口继承接口

接口是可以继承的。可以从一个接口复制成员到另一个接口中。这样可以更加灵活的将分割到可复用的模块里。

```ts
interface TwoDPoint{
    x: number,
    y: number
}

interface ThreeDPoint extends TwoDPoint{
    z: number
}

let p1: ThreeDPoint= {
    z: 100,
    x: 100,
    y: 100
}
```

一个接口可以继承多个接口，创建出多个接口的合成接口。

```ts
interface TwoDPoint{
    x: number,
    y: number
}

interface ThreeDPoint{
    z: number
}

interface FourDPoint extends ThreeDPoint, TwoDPoint{
    time: Date
}
let p2: FourDPoint = {
    z: 100,
    x: 100,
    y: 100,
    time: new Date()
}
```

### 接口继承类

1. 会继承类的内容，包括其类型，签名等，但是类的值是不会继承的。就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 

2. 接口同样会继承到类的 `private` 和 `protected` 成员。 这意味着创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（`implement`）。

```ts
class Bird{
    type: string = "画眉鸟"
    fly():void {

    }
}

interface Fly extends Bird{

}

let flyingBird: Fly = {
    type: "啄木鸟",
    fly(): void {

    }
}

```

有一个`Bird`的类，有一个`Fly`的接口，现在需要`Fly`来继承`Bird`，新建一个实例`flyingBird`，但是是需要有`Bird`的类中的内容。

## 代码

[Github](https://github.com/azrrrrr/azr_typescript)

## 完

本文首次发布于 [Azr的博客](http://amor9.cn), 作者 [@azrrrrr](https://github.com/azrrrrr/) ,转载请保留原文链接.

原文链接： [http://amor9.cn/2018/12/28/ts](http://amor9.cn/2018/12/28/ts)
