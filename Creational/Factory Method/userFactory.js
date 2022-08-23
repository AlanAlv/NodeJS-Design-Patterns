let Employee = require('./Employee');
let Shopper = require('./Shopper');

let userFactory = (name, money=0, type, employer) => {
    if(type === 'employee'){
        return new Employee(name, money, type, employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;