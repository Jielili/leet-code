# var let const
var作用域范围是，函数函数作用域。

var会变量提升。

var定义的变量被添加到window对象上。

var定义的变量可以重复定义，后面的会覆盖前面的。

function函数提升优先var提升，会覆盖var定义的变量。

let和const作用域范围是块级作用域。

js的数据数据类型：基本数据类型 + 引用数据类型。

js有6中基本数据类型: undefined, boolean, null, number, string, object

Object 为引用数据类型。

null 被认为是一个对空对象的引用。（typeof null === 'object'）。

null 表示空对象指针。

定义一个未赋值的基本数据类型时，不用显示复制undefined。

定义一个未赋值的引用数据类型时，最好显示赋值null。

undefined 值是由 null 值派生而来的，console.log(null == undefined); // true。

# 数字类型
存储浮点值使用的内存空间是存储整数值的两倍。

科学计数法标识 let floatNum = 3.125e7

ECMAScript 会将小数点后至少包含 6 个零的浮点值转换为科学记数法（0.000 000 3 = 3e-7）

浮点值的精确度最高可达 17 位小数。

IEEE 754浮点数标准导致的舍入误差 会导致0.1 + 0.2 !== 0.3

浮点数计算解决方案 1. 转换为整数。

浮点数计算解决方案 2. 使用第三方库：如 decimal.js 或 big.js

IEEE 754 标准定义了浮点数的存储方式，几乎所有编程语言都遵循它。

浮点数计算问题不止存在于 JavaScript中。

ECAMScript中表示最大的数字：Number.MAX_VALUE

ECAMScript中表示最小的数字：Number.MIN_VALUE

超出ECAMScript表示范围的数字会被转换为 Infinity

超出ECAMScript表示范围的负数会被转换为 -Infinity

NaN = not a number

NaN 是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况。（计算错误）

console.log(NaN == NaN); // false

isNaN() 判断参数是否“不是数值”

将非数值转换为数值的函数：Number(), parseInt(), parsreFloat()

Number() 用于将任何数据类型转换成数值

parseInt() 用于将字符串转换成整数

parsreFloat() 用于将字符串转换成浮点数


# 执行上下文

TypeError

SyntaxError

ReferenceError

函数在执行的时候会创建一个执行上下文。

执行上下文是一个对象，包含了函数执行时的所有信息。

执行上下文栈就是一个栈结构，存储了所有的执行上下文。

作用域是词法环境

作用域链是由词法环境中外部引用串起来的

闭包是一个函数和其词法环境的组合


# 编译阶段

var 变量提升

词法作用域是变量和函数存在的地方，相当于一个包含了变量和函数的对象

作用域链（scopes）是变量和函数的查找机制

作用域链（scopes）是在函数编译阶段就确认的

作用域链（scopes）是一个栈结构，存储了这个执行这个函数时涉及到的变量和函数所存在的作用域

作用域分全局作用域、本地作用域、闭包

闭包（closure）在作用域链（scopes）中

闭包（closure）在编译的时候就确认了

作用域链（scopes）在函数定义的时候就被确认了

即使函数被传来传去，函数的作用域链（scopes）也不会改变

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行的。

this 提供了一种更优雅的方式来隐式“传递”一个对象引用。

this 是为了解决显示传参造成代码混乱而出现了。

this 最常用显示绑定，这样写的代码比较优雅。（我自己推测的）

this 是在运行时绑定的，不是在编译时绑定的。

this 出现的目的是可以提供一种隐式的绑定。，显式的绑定会显得乱。

this 被绑定到window上可以看做是不符合其他条件时的默认值。

在确定this绑定时，需要看调用位置，而不是定义位置。

this 的隐式绑定规则，如果是在对象上调用的，this会指向这个对象。

this 会因为赋值和传递导致丢失原来的绑定。

当函数当做settimeout的回调函数时，this会丢失原来的绑定，使用默认绑定规则。



# 对象

JS中有许多特殊的对象子类型，可以称为复杂基本类型。

JS中有些内置对象： String, Number, Boolean, Object, Array, Date, RegExp, Function, Error等。

内置对象其实是内置函数

内置函数可以被当做构造函数使用

const str = 'hello world' 字面量形式

const str = new String('hello world') 构造函数形式

sring, number, boolean, object 都有对应的构造形式

Date 没有字面量形式

null, undefined 没有对应的构造形式

js 深拷贝可能会遇到循环问题

js 提供Object.assign()方法来实现浅拷贝

用 defineProperty 把 configurable 属性设置为 false 是单向操作

结合writable:false 和 configurable:false 属性可以实现一个对象常量

Object.preventExtensions 禁止对象扩展

Object.seal 禁止对象扩展和配置属性

Object.freeze 禁止对象扩展和配置属性和修改属性值

[[get]] 操作会在原型链上查找属性

[[get]] 操作会在对象的 [[Prototype]]链 上查找属性

[[get]] 和 [[put]] 是内部定义的内部逻辑

getter 和 setter 是程序员可以使用的语言级别语法，语言开发者给我们暴露出来的api

for...in 适用于对象，遍历key

for...of 适用于可迭代对象，遍历value

in 操作符号会检查属性是否存在在对象上或者其原型链上

hasOwnProperty() 方法只检查对象本身的属性，不检查原型链上的属性

for...of 会寻找内置或者自定义的 @@iterator 对象并调用它的 next() 方法来遍历

Javascript 不提供多重继承

类意味着复制

对象中会有一个特殊的内置属性 [[Prototype]] 

对象的 [[Prototype]] 是对其他对象的引用。

[[Prototype]] 机制就是存在于对象中的一个内部的链接。

[[Prototype]] == 委托

[[Prototype]] 是对象之间的关联关系

对对象不存在的属性赋值的几种情况 myObject.a = 1

如果原型链上a是个setter属性，那就会调用setter方法

如果原型链上的a是个只读属性，那就会报错

正常情况，会直接把a赋值到当前对象myObject上，这屏蔽上层的a

JavaScript中只有对象

JavaScript 中，这种对象通过[[Prototype]]属性关联在一起的机制，我们可以称之为 “委托”

<构造函数>是所有带new的函数调用

Object.create() 方法创建一个新对象，使用现有的对象作为新创建对象的原型。

Object.create() 会创建一个新的空对象，并将原型指向传入的对象。

Object.create(null) 会创建一个没有原型的对象。

修改子类原型链的两种方法

Bar.prototype = Object.create(Foo.prototype)

Object.setPrototypeOf(Bar.prototype, Foo.prototype)

__proto__ 是一个非标准的属性，指向对象的原型

__proto__ 存在在Object.prototype上

__proto__ 其实是Object上的属性

__proto__ 更像是一个 getter/setter 方法

所以Javascript 中所有的对象都能使用 __proto__ 属性

类和委托是两种不同的设计模式

<面向对象>和<对象关联>是两种不同的设计模式

<面向对象>的设计模式比<对象关联>的设计模式多了构造函数














ROM - read only memory
RAM - random access memory 
JWT - JSON Web Token
JSON - JavaScript Object Notation
SaaS - Software as a Service
IDE - Integrated Development Environment
BIOS - Basic Input/Output System


# cache system
















