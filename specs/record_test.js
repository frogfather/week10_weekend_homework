var assert = require("assert");
var Record = require("../record");

describe("Record",function(){
  var record1;

  beforeEach(function() {
    record1 = new Record("Muse","Drones",14.00);
  });


  it("should have an artist",function(){
    assert.equal("Muse",record1.artist);
  });

  it("should have a title",function(){
    assert.equal("Drones",record1.title);
  });  

  it("should have a price",function(){
    assert.equal(14.00,record1.price);
  });

});