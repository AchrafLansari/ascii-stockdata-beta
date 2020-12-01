const checkDate = require('./../util/date');
const generateChart = require('./../util/ascii');

const fetchStockData = require('./data');
const { getCache, setCache } = require('./cache');
const generatePlotsIndexes = require('./chart');

const config = require('./../config/config')


const getDailyPrices = (result) => {
  const resultObj = JSON.parse(JSON.stringify(result));
  return resultObj.daily_prices;
};

const getStockData = async (query) => {
  if (query.symbol && checkDate(query.since, query.until)) {
    //Add default price in case of non-defined
    query.price = (query.price) ? query.price : 'close';
    //extract the price to create the cacheInput
    const { price, ...cacheInput } = query;

    const cacheResult = await getCache(cacheInput);
    if (cacheResult) {
      return { daily_prices: getDailyPrices(cacheResult), priceType: price };
    } else {
      const fetchResult = await fetchStockData(config.dataUrl, query);
      setCache(cacheInput, fetchResult)
      const objResult = JSON.parse(fetchResult);
      return { daily_prices: getDailyPrices(objResult), priceType: price };
    }

  } else {
    throw Error('Bad Request : Missing or Incorrect Parameters,Please Read The Api Documentation');
  }
};

/**
 * generate an Ascii chart from daily_prices
 * @param {Object} daily_prices
 * @param {String} priceType
 */
const generateAsciiChart = async (query) => {
  try {
    const { daily_prices, priceType } = await getStockData(query);
    const plotIndexes = generatePlotsIndexes(daily_prices, priceType);
    return generateChart(plotIndexes);
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = generateAsciiChart;
