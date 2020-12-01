/**
 * generate ASCII line chart from an array of plots indexes
 * @param {Array} plotsIndexes
 * @returns {String}
 */
const generateChart = (plotsIndexes, height = 10) => {
  const width = plotsIndexes.length;
  let chart = '\n';

  // 2 Dimensional Array Initialization
  const matrix = Array(height + 1).fill(' ');
  matrix.forEach((value, index) => {
    matrix[index] = Array(width).fill(' ');
  })

  // Plots Integration
  plotsIndexes.forEach((value, index) => {
    matrix[height - value][index] = '+';
  })

  // Charts Generation by transforming from array to string and removing
  // each ',' and adding a new lines
  matrix.forEach((value, index) => {
    chart += matrix[index]
      .toString()
      .replace(/,/g, ' ') + '\n';
  })

  return chart;
}

module.exports = generateChart;
