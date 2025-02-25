/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const border = new Map()
  for (let i = 0; i < wall.length; i++) {
    let cur_len = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      cur_len += wall[i][j]
      border.set(cur_len, (border.get(cur_len) || 0) + 1)
    }
  }
  let max = 0
  border.forEach(value => {
    max = Math.max(value, max)
  })
  return wall.length - max
};

console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))
console.log(leastBricks([[1],[1],[1]]))