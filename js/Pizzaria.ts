
 class Pizzaria{

   codigo:int;
   nome: String;
  categoria:String;
  

   construtor(codigo:int, nome: String, categoria:String){
      this.codigo=codigo;
      this.nome=nome;
      this.categoria=categoria;
   }




}


let Pizza=new Pizzaria(1,"delicia doce","4 estacoes");

console.log(Pizza);
