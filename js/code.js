for (var i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0)
}
for (var i = 0; i < 5; ++i) {
    function fn(x) {
        setTimeout(() => console.log(x), 0)
    }
    fn(i)
}

// // 你可能以为会输出 0、1、2、3、4
// // 实际上会输出 5、5、5、5、5 


// for (let i = 0; i < 5; ++i) {
//     setTimeout(() => console.log(i), 0)
// }
// // 会输出 0、1、2、3、4 

// console.log(window)
// console.log(this)



var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();