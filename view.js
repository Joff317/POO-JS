
module.exports = class View {
   
   index(dataProducts){
      console.log("Voici les produits !!");
      const listName = dataProducts.map(dataProduct => (`${dataProduct.id} - ${dataProduct.name}`))
      console.log(listName);
   }

   show(dataProducts){
      console.log("Choisi un numéro pour voir les détails ");
      var item = prompt("---> : ");
      console.log("--------");
      console.log("C'est le produit ! :");
      console.log("--------");
      console.log(dataProducts[item - 1]);
   }

   new(dataProducts){
      let newName = prompt("Choisis un nom : ")
      let newPrice = prompt("Choisis un prix : ")
      let newQuantity = prompt("Choisis une quantité : ")
      let newBrand = prompt("Choisis une marque : ")
      return  {
         id : dataProducts.length + 1,
         name : newName,
         price : newPrice,
         quantity : newQuantity,
         brand : newBrand,
      }
   }
}

var prompt = require("prompt-sync")();