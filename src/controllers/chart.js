const { scaleLinear } = require('d3-scale');

/**
 * Generate the line chart plots indexes from the dayli prices objects
 * @param {Object} daily_prices
 * @returns {Array}
 */
const generatePlotsIndexes = (daily_prices, priceType = 'close') => {

  if (daily_prices) {

    const data = Object.keys(daily_prices);
    const plotsIndexes = [];

    const pricesArr = data.map((price) => daily_prices[price]);


    const min = (Math.min.apply(null, pricesArr.map((item) => item[priceType])));
    const max = (Math.max.apply(null, pricesArr.map((item) => item[priceType])));
    const x = scaleLinear().domain([(min), (max)]).range([0, 10]);

    pricesArr.forEach((item) => {
      plotsIndexes.push(Math.round(x(item[priceType])));
    });

    return plotsIndexes;
  } else {
    throw new Error('dailyprices object is undefined');
  }

}

module.exports = generatePlotsIndexes;

