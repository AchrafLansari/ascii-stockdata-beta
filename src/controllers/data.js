const https = require("https");
const url = require('url');

/**
 * Request to get the stock data
 * @param {String} stockDataUrl
 * @param {String} body represents the query input values
 * @returns {Object}
 */
const fetchStockData = (stockDataUrl, body) => {
  const stockDataUrlObj = url.parse(stockDataUrl);
  const requestDataUrl = url.format({
    protocol: 'https',
    hostname: stockDataUrlObj.hostname,
    pathname: stockDataUrlObj.pathname ? stockDataUrlObj.pathname : '/',
    method: "GET",
    query: {
      symbol: body.symbol,
      since: body.since,
      until: body.until,
      price: body.price ? body.price : 'close'
    }
  });

  return new Promise((resolve, reject) => {
    https
      .request(requestDataUrl, res => {
        if (res && res.statusCode === 200) {
          let data = "";
          res.on("data", d => {
            data += d;
          });
          res.on("end", () => {
            resolve(data);
          });
        }
      })
      .on("error", err => reject(err))
      .end();
  });
}

module.exports = fetchStockData;
