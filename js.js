
function percentageluz() {
  
   
    var num1 = document.getElementById("luz").value;
      
    
    var num2 = document.getElementById("salario").value;
    document.getElementById("value1")
        .value = (num1 * 100) / num2 + "%";
}


function pagua() {
  
    var num3 = document.getElementById("agua").value;
    
     var num2 = document.getElementById("salario").value;
  document.getElementById("cagua")
      .value = (num3 * 100) / num2 + "%";

}

function caredemoveis() {
     var num5 = document.getElementById("redemoveis").value;

 var num6 = document.getElementById("salario").value;
document.getElementById("redemoveisresposta")
  .value = (num5 * 100) / num6 + "%";
} 

function Porinternet() {

       var num7 = document.getElementById("internet").value;
    
      var num8= document.getElementById("salario").value;
   document.getElementById("cinternet")
       .value = (num7 * 100) / num8 + "%";
}
function condominio() {
       var num9 = document.getElementById("condominio").value;
    
       var num10= document.getElementById("salario").value;
    document.getElementById("%condominio")
        .value = (num9 * 100) / num10 + "%";
}
function Caluguel() {
        var num11 = document.getElementById("aluguel").value;
    
        var num12= document.getElementById("salario").value;
     document.getElementById("%aluguel")
         .value = (num11 * 100) / num12 + "%";
}
function conducao() {
         var num13 = document.getElementById("conducao").value;
    
         var num14= document.getElementById("salario").value;
      document.getElementById("%conducao")
          .value = (num13 * 100) / num14 + "%";
}

function totalpor() {
    var percent = document.getElementById("salario").value;
      
    var num = document.getElementById("value1").value;
    document.getElementById("value2")
        .value = (num / 100) * percent;
}

    