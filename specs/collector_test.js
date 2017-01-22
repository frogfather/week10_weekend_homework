var assert = require("assert");
var Record = require("../record");
var Collector = require("../collector");
var Store = require("../record_store");

describe("Collector",function(){

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
    record1 = new Record("Adele","25",14);
    record2 = new Record("Kate Bush", "Before the dawn",12);
    record3 = new Record("Elbow","Little Fictions",15);
    record4 = new Record("Mike Oldfield","Tubular Bells 27",11);
    record5 = new Record("Emo McGothface","Mopey songs",13);
    record6 = new Record("Katy Perry","Prism",8);
    record7 = new Record("Lady Gaga","Artpop",12);
    record8 = new Record("Coldplay","Dismal songs for sad people",13);
  });


  it("should have a name",function(){
    assert.equal("Bwian",collector.name);
  }); 

  it("should have funds",function(){
    assert.equal(50,collector.funds)
   });  

  it("should be able to buy a record",function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    collector.buyRecord(store.sellRecord(record1,collector));
    assert.deepEqual([record1],collector.collection);
    assert.equal(36,collector.funds);
  });

  it("can't buy a record if insufficient funds",function(){
    collector.funds = 10;
    collector.buyRecord(store.sellRecord(record1,collector));
    assert.deepEqual([],collector.collection);
    assert.equal(10,collector.funds);
   });

  it("should be able to sell a record",function(){
   collector.buyRecord(record1);
   collector.sellRecord(record1,store);
   assert.deepEqual([],collector.collection);
   assert.equal(40,collector.funds);
  });

})
