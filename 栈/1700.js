/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const sum_1 = _.sum(students)
    const sum_0 = students.length - sum_1
    for(let sandwich of sandwiches) {
        if(sandwich === 1 && sum_1 > 0) {
            sum_1--
            continue
        }
        if(sandwich === 0 && sum_0 > 0) {
            sum_0--
            continue
        }
        break
    }
    return sum_0 + sum_1
};