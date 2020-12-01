const Redis = require('ioredis');
const config = require('./../config/config')

// init redis; how to use: https://github.com/luin/ioredis#basic-usage
const redisClient = new Redis(port = 6379, host = config.redisHost);

const generateCacheKey = (obj) => {
  return `ascii:${JSON.stringify(obj)}`
};

/**
 * get cached request results from redis
 * @param {Object} cacheInput
 */
const getCache = async (cacheInput) => {
  try {
    const key = generateCacheKey(cacheInput);
    let cacheResult = await redisClient.get(key);
    cacheResult = cacheResult !== 'undefined' && JSON.parse(cacheResult) || null;
    return (cacheResult) ? cacheResult : null;
  } catch (error) {
    throw new Error('Redis get command error' + error);
  }
};

/**
 * set Cache in Redis with request result
 * @param {Object} cacheInput
 * @param {String} fetchResult
 */
const setCache = (cacheInput, fetchResult) => {
  try {
    const key = generateCacheKey(cacheInput);
    redisClient.setex(key, config.redisCacheDuration, fetchResult);
  } catch (err) {
    throw new Error('Redis setex command error' + err);
  }
};

module.exports = { getCache, setCache }
