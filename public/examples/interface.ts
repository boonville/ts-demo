/*
 * @Author: sunpengwei
 * @Date: 2022-02-25 10:33:05
 * @LastEditors: sunpengwei
 * @LastEditTime: 2022-02-25 16:40:24
 * @Description: file content
 * @FilePath: \ts-demo\public\examples\interface.ts
 */

// 接口初探

// 方式一、

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// 方式二、

interface lablevalue {
    label: string
}

function printLabel(labelledObj: lablevalue) {
    console.log(labelledObj)
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);