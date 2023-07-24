const dayjs = require('dayjs');

module.exports = {
    format_date: (date) => {
        return dayjs(date).format('MM/DD/YYYY');
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
};