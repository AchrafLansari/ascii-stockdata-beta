const generatePlots = require('../controllers/chart');

const daily_prices = {"2020-07-16":{"open":259.27,"high":272.35,"low":258.27,"close":268.68},"2020-07-17":{"open":267.08,"high":269.04,"low":261.72,"close":263.23},"2020-07-20":{"open":265.53,"high":292.76,"low":265.2,"close":291.19},"2020-07-21":{"open":288.41,"high":289.814,"low":276.31,"close":276.38},"2020-07-22":{"open":290.67,"high":299.67,"low":286.93,"close":289.62},"2020-07-23":{"open":287.55,"high":288.99,"low":266.96,"close":267.54},"2020-07-24":{"open":266.17,"high":270.8146,"low":257.03,"close":268.74},"2020-07-27":{"open":275.75,"high":275.75,"low":269.2,"close":272.5},"2020-07-28":{"open":270,"high":275.85,"low":266.86,"close":267.12},"2020-07-29":{"open":254.88,"high":268.585,"low":251.02,"close":262.21},"2020-07-30":{"open":252,"high":264.3199,"low":251.83,"close":261.79}};


describe('test the generate plots  function', () => {

    test('should return an array with elements', () => {
        return  expect(generatePlots(daily_prices).length).not.toBe(0);
    }); 

});

