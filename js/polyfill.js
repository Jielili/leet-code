Object.prototype.create()

Promise

Function.prototype.bind


if (!Object.create) {
    Object.create = function (o) {
        const p = {}
        p.__proto__ = o
        return p
    };
}