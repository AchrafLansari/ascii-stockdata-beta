const fetchStockData = require('../controllers/data');

const stockUrlRequest="https://stock-data.graphy.now.sh",
      queryObj = {symbol:'SPOT',since:'2020-07-16',price:'high',until:'2020-07-30'};

describe('test the https GET request to get the stock data ', () => {

    test('should return an array with elements', () => {
        return  expect(fetchStockData(stockUrlRequest,queryObj)).not.toBe(undefined);
    }); 

});

