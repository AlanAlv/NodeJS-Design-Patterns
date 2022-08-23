let Storage = require('./Storage');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;

        let floor = new Storage('store floor', inventory.floor);
        let backroom = new Storage('store floor', inventory.backroom);
        let localStore = new Storage('store floor', inventory.localStore, 1);
        let warehouse = new Storage('store floor', inventory.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;
    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

module.exports = Store;
