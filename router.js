const Controller = require("./controller");

module.exports = class Router {

   showData(){
      new Controller().showList()
   }

   showDetail(){
      new Controller().showProduct()
   }

   createProduct(){
      new Controller().newProduct()
   }

   welcome(){
      console.log("Bienvenue !");
      console.log("Que voulez vous faire ?");
      console.log("1- Afficher la liste des produits");
      console.log("2- Créer un produit");
      console.log("3- Quitter le programme");
      let answer = prompt("Rentrez un numéro : ")
      if(answer == 1){
         this.showData()
         this.showDetail()
         this.home()
      } else if (answer == 2){
         this.createProduct()
      }
      else {
         console.log("ciao");
      }
   }
   
   home(){
      console.log("Veux tu retourner à l'accueil?");
      console.log("1- Oui");
      console.log("2- Non");
      let answer = prompt("1 ou 2 ? : ")
      if(answer == 1){
         this.welcome()
      } else {
         console.log("ciao");
      }
   }

}


var prompt = require("prompt-sync")();