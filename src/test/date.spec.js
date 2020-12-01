const checkDate = require('../util/date');


describe('test the date format (YYYY-MM-DD) function', () => {

    const date1="2020-12-10",
          date2="2020/12/10",
          date3="2020-12-12";

    test('should return true', () => {
        return  expect(checkDate(date1,date3)).toBeTruthy();
    }); 

    test('should return false', () => {
        return  expect(checkDate(date3,date1)).toBeFalsy();
    }); 

});

