const base  = require('@playwright/test');

exports.custometest = base.test.extend(

{
    testDataForLogin :
    {
    userName: "prakashbisht1990@gmail.com",
    passWord: "India@123"
    }
    
}

)