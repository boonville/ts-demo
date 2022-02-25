/*
*   @type: { Boolean }
*   @description:  简单的true/false值
*/

let flag: Boolean = false

// es5 var flag = false

/*
*    @type: {number} 基本类型-数字
*    @description: 和JavaScript一样，TypeScript里的所有数字都是浮点数。
*    这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，
*    TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
*/


let decLiteral: Number = 6
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/*
 *   @type: {String} 基本类型-字符串
 *   @description： 使用双引号（ "）或单引号（'）表示字符串,或者使用模板字符串
 *   定义多行文本或者单行文本
 */

let str: String = 'smith'
let sentence: String = `使用双引号（ "）或单引号（'）表示字符串,或者使用模板字符串
*   定义多行文本或者单行文本`


/*
*   @type: { Array } 基本类型-数组
*   @description: TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。
*   第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
*/

let list: Number[] = [1, 2, 3]
let menus: Array<String> = ['1', '2', '3']

