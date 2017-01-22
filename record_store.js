var Store = function(name,city,funds){
  this.name = name;
  this.city = city;
  this.funds = funds;
  this.stock = [];

};

Store.prototype = {
  addRecord: function(record){
    this.stock.push(record);
  },
  listStock: function(){
    var stockList = [];
    this.stock.forEach(function(item){
      stockList.push(item.artist+": "+item.title); 
    });
  return stockList;
  },

  getTotalStockValue: function(){
    return this.stock.reduce(function(a,b){
        return a + b.price; 
    },0);
  },

  getFinancial: function(){
    var report  = [];
    report.push("stock: "+this.stock.length);
    report.push("stock value: "+   
      this.getTotalStockValue());
    return report;
  },

  sellRecord: function(record,buyer){
    var recordToSell;
    var recordPos = this.stock.indexOf(record);
     if ((recordPos > -1)&&(buyer.funds >= record.price)){
      recordToSell = this.stock.splice(recordPos,recordPos+1)[0];
      this.funds += recordToSell.price;
    };
    return recordToSell;
  },

  buyRecord: function(record){
    var buyFor = Math.floor(record.price / 3);
    if (this.funds > buyFor){ 
    this.stock.push(record);
    this.funds -= buyFor;
    return buyFor;
    }
  return 0;  
  }

};

module.exports = Store;