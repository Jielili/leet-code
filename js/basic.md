# var let const
var作用域范围是，函数函数作用域。

var会变量提升。

var定义的变量被添加到window对象上。

var定义的变量可以重复定义，后面的会覆盖前面的。

let和const作用域范围是块级作用域。

js的数据数据类型：基本数据类型 + 引用数据类型。

js有6中基本数据类型: undefined, boolean, null, number, string, symbol。

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








