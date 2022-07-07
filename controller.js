const Product = require('./product.js');

var View = require('./view.js');
var newView = new View()
var data = Product.callProduct()


module.exports = class Controller{
  showList(){
     newView.index(data)
  }

  showProduct(){
     new View().show(data)
  }

  newProduct(){
  let params = (newView.new(data))
  let newProduct = new Product(params)
  newProduct.save()
  }

  
}

var prompt = require("prompt-sync")();