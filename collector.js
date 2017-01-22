var Collector = function(name,funds){
  this.name = name;
  this.funds = funds;
  this.collection = [];
};

Collector.prototype = {
  buyRecord: function(record){
    if (record != null){
    this.funds -= record.price; 
    this.collection.push(record);
    }
  },

  sellRecord: function(record,store){
    var salePrice;
    var recordPosition = this.collection.indexOf(record);
    if (recordPosition>-1){
      salePrice = store.buyRecord(record);
      if (salePrice > 0){
        this.collection.splice(recordPosition,recordPosition+1);
        this.funds += salePrice;
        };
      }
    return 0;
    }
}


module.exports = Collector;