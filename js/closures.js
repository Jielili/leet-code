// function z() {
//     let b = 900;
//     function x() {
//         let a = 7;
//         function y() {
//             console.log(b)
//         }
//         y()
//     }
//     x()
// }
// z()



// function main() {

//     // for(var i = 0; i < 5; ++i) {
//     //     setTimeout(() => console.log(i), i * 1000)
//     // }

//     for(let i = 0; i < 5; ++i) {
//         setTimeout(() => console.log(i), i * 1000)
//     }
// }


// main()



// function outer() {
//     let secret = "shh";
//     return function inner() {
//         let x = 10
//         console.log(x)
//         console.log(secret); // 不再引用 secret
//     };
// }

// let fn = outer();
// fn(); // 调用 inner


// function main() {
//     for (let i = 1; i <= 5; i++) { 
//         const m = 'this is the block scope'
//         const n = 'this is the const'
//         let o = 'this is the let'
//         console.log(i)
//         function timer() { 
//             console.log('ssd'); 
//             console.log(m)
//         }
//         setTimeout( timer, i*1000 ); 
//     }

// }

// main()




// function foo() {
//     var something = "cool";
//     var another = [1, 2, 3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join(" ! "));
//     }
// }

// foo(); // "cool" "1 ! 2 ! 3"



// {
//     let b = 1
//     let obj = {
//         a: 2,
//         b: 2,
//         foo: function foo() {
//             console.log(this.a);
//             console.log(b)
//         }
//     };
//     var bar = obj.foo; 
// }
// var a = "oops, global"; // a 是全局对象的属性 
// var b = "oops, global"; // b 是全局对象的属性
// bar(); // "oops, global"


if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        const fn = this;
        const args = Array.prototype.slice.call(arguments, 1)
        function Bound() {
            const isNew = this instanceof Bound
            return fn.apply(isNew ? this : oThis, args.concat(arguments))
        }
        const fNop = function () {}
        fNop.prototype = this.prototype
        Bound.prototype = new fNop()
        return Bound
    }   
}


// 5, 8, 2, 60, 56, 20, 13, 17, 11, 12, 47, 43, 3, 17, 18, 6, 26, 12, 37, 4, 13, 45


// function getAnswer(read_arr) {
//     const lines = [[0, 0], [1, 0], [2, 0], [3, 0]]

//     read_arr.forEach((item) => {
//         // 遍历lines 查看是否有命中
//         // 如果命中则不处理
//         for (let i = 0; i < lines.length; i++) {
//             const start = lines[i][0] * 8
//             const end = start + 7
//             if (item >= start && item <= end) {
//                 return
//             }
//         }
//         // 如果没有命中则替换
//         // 计算所属块
//         const block = Math.floor(item / 8)
//         // 计算行号
//         const line = block % 4
//         // 计算e标签（e应该是每四个block为一组）
//         const section = Math.floor(block / 4)
//         // 替换
//         lines[line] = [block, section]
//         console.log(`Miss: ${item}, line: ${line}    ${block}:${section}(${block * 8}-${block * 8 + 7})`)
//     })
// }

// const read_arr = [5, 8, 2, 60, 56, 20, 13, 17, 11, 12, 47, 43, 3, 17, 18, 6, 26, 12, 37, 4, 13, 45]

// getAnswer(read_arr)


function getFullyAssociativeAnswer(read_arr) {
    const CACHE_SIZE = 4
    const BLOCK_SIZE = 8

    // 初始快取，格式為：{ block: number, lastUsed: timeStamp }
    let cache = [
        { block: 0, lastUsed: 0 },
        { block: 1, lastUsed: 1 },
        { block: 2, lastUsed: 2 },
        { block: 3, lastUsed: 3 },
    ]

    let time = 4 // 初始化時間戳，因為前面4個區塊已被初始化
    read_arr.forEach((address) => {
        const block = Math.floor(address / BLOCK_SIZE)
        const a1 = block * BLOCK_SIZE
        const aB = a1 + BLOCK_SIZE - 1

        // 檢查此 block 是否在 cache 中
        const indexInCache = cache.findIndex(entry => entry.block === block)

        if (indexInCache !== -1) {
            // 命中，更新使用時間
            cache[indexInCache].lastUsed = time++
            return
        }

        // Miss 發生
        if (cache.length < CACHE_SIZE) {
            // 如果快取未滿，直接加入
            cache.push({ block: block, lastUsed: time++ })
            const lineUsed = cache.length - 1
            console.log(`Miss: ${address}, line: ${lineUsed}    ${block}(${a1}-${aB})`)
        } else {
            // 快取已滿，使用 LRU 替換
            // 找出最久沒使用的區塊
            let lruIndex = 0
            let minTime = cache[0].lastUsed
            for (let i = 1; i < CACHE_SIZE; i++) {
                if (cache[i].lastUsed < minTime) {
                    minTime = cache[i].lastUsed
                    lruIndex = i
                }
            }
            // 替換區塊
            cache[lruIndex] = { block: block, lastUsed: time++ }
            console.log(`Miss: ${address}, line: ${lruIndex}    ${block}(${a1}-${aB})`)
        }
    })
}

const read_arr = [5, 8, 2, 60, 56, 20, 13, 17, 11, 12, 47, 43, 3, 17, 18, 6, 26, 12, 37, 4, 13, 45]
getFullyAssociativeAnswer(read_arr)