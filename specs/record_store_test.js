var assert = require("assert");
var Record = require("../record");
var Store = require("../record_store");
var Collector = require("../collector");

describe("Record store",function(){

  var store;
  var collector;
  var record1;
  var record2;
  var record3;
  var record4;
  var record5;
  var record6;
  var record7;
  var record8;
  var record9;
  var record10;

  beforeEach(function() {
    store = new Store("Scratchy records", "Edinburgh",500);
    collector = new Collector("Bwian",50);
    record1 = new Record("Deep Purple","Perfect Strangers",10);
    record2 = new Record("Talking Heads", "Remain in Light",12);
    record3 = new Record("Led Zeppelin","Physical Graffiti",15);
    record4 = new Record("Mike Oldfield","Tubular Bells 27",11);
    record5 = new Record("Emo McGothface","Mopey songs",13);
    record6 = new Record("Katy Perry","Prism",8);
    record7 = new Record("Lady Gaga","Artpop",12);
    record8 = new Record("Coldplay","Dismal songs for sad people",13);
  });


  it("it should be able to add a record",function(){
    store.addRecord(record1);
    assert.deepEqual([record1],store.stock);
  }); 

  it("should be able to list the inventory",function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.deepEqual(["Deep Purple: Perfect Strangers", "Talking Heads: Remain in Light"], store.listStock());
  });  

  it("should be able to provide a report on the company",function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.deepEqual(["stock: 2","stock value: 22"],store.getFinancial());
  });

  it("should be able to sell a record",function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.deepEqual(record1,store.sellRecord(record1,collector));
    assert.deepEqual([record2],store.stock);
  });

  it("selling a record increases shop funds",function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record1,collector);
    assert.equal(510,store.funds);
  });

  it("should be able to buy a record",function(){
    store.addRecord(record1);
    store.addRecord(record2);
    collector.buyRecord(
    store.sellRecord(record1,collector));
    assert.deepEqual([record1],collector.collection);
    store.buyRecord(record1,collector);
    
  });

})