var Shopper = require('./Shopper');
var { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } = require('./InventoryItem');

var alex = new Shopper('Alex', 1000000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

let gold_necklace = new GoldenInventoryItem(necklace);
let diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);

let gold_walkman = new GoldenInventoryItem(walkman);

alex.purchase(diamond_gold_necklace);
alex.purchase(gold_walkman);

alex.printStatus();
