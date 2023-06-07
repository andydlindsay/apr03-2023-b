"use strict";
const agatha = {
    penName: 'agatha christie',
    realName: 'alice bob',
    writeBook: (title) => {
        return true;
    }
};
const hof = (callback) => {
    const returnVal = callback(42);
};
hof((winningLottoNumber) => { return 'hello'; });
