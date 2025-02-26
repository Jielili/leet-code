/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    while (sandwiches.length) {
        const top_sandwich = sandwiches[0]
        const n = students
        for (let i = 0; i < n; i++) {
            const cur_student = students.shift()
            if (cur_student === top_sandwich) {
                sandwiches.shift()
                break;
            } else {
                students.push(cur_student)
            }
        }
        if (students.length === n) {
            return n
        }
    }
    return 0
};