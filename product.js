module.exports = class Product {
         constructor({id, name, price, quantity, brand}){
            this.id = id 
            this.name = name
            this.price = price 
            this.quantity = quantity
            this.brand = brand 
         }

 static callProduct(){
     'use strict';
      let jsonData = require('./inventaire.json');
      return jsonData
   }

   save(){
      let jsonData = require('./inventaire.json');
      const fs = require('fs')

      let newJson = [...jsonData, this]; //dataToSave = nouvelle instance de produit qui est créer dans le controller
      let config = JSON.stringify(newJson) //stringify = transformer en string

      fs.writeFile("./inventaire.json", config, (err) => {
         if (err) console.log(err);
         else {
            console.log("File written successfully\n");
         }
      });
   }
}

var prompt = require("prompt-sync")();