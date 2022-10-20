

const porcet = document.querySelector(".porcentagem");
porcet.style.display = "none";
const centralizar= document.querySelector(".centraliza");
     	centralizar.style.display = "block";
const FLOWT= document.querySelector("#recebe");
    	 FLOWT.style.display = "none";

const btnlimpar = document.querySelector(".limpar");
btnlimpar.style.display = "none";

function functions() {
  
    
//______________contas_______________________________
    var num1 = document.getElementById("luz").value;
      
    
    var num2 = document.getElementById("salario").value;
    document.getElementById("value1")
        .value = (num1 * 100) / num2 + "%";
        porcet.style.display = "inline-block"


     var num3 = document.getElementById("agua").value;
    
     var num2 = document.getElementById("salario").value;
      document.getElementById("cagua")
       .value = (num3 * 100) / num2 + "%";




     var num5 = document.getElementById("redemoveis").value;

     var num6 = document.getElementById("salario").value;
      document.getElementById("redemoveisresposta")
        .value = (num5 * 100) / num6 + "%";


     var num7 = document.getElementById("internet").value;
    
     var num8= document.getElementById("salario").value;
      document.getElementById("cinternet")
       .value = (num7 * 100) / num8 + "%";

     var num9 = document.getElementById("condominio").value;
    
     var num10= document.getElementById("salario").value;
      document.getElementById("%condominio")
        .value = (num9 * 100) / num10 + "%";


     var num11 = document.getElementById("aluguel").value;
    
     var num12= document.getElementById("salario").value;
       document.getElementById("%aluguel")
        .value = (num11 * 100) / num12 + "%";


     var num13 = document.getElementById("conducao").value;
    
     var num14= document.getElementById("salario").value;
      document.getElementById("%conducao")
       .value = (num13 * 100) / num14 + "%";


       //_________________display_____________________

       porcet.style.display = "inline-block";
       FLOWT.style.display = "inline-block";
            centralizar.style.display = "none";
       btnlimpar.style.display = "inline-block";

//_______________valores_recebidos______________________
        
var num22 = document.getElementById("luz").value;
        document.getElementById("vlrluz")
            .value = + num22 ;

        var num23 = document.getElementById("internet").value;
        document.getElementById("vlrinternet")
            .value = + num23 ;
        
        var num24 = document.getElementById("agua").value;
        document.getElementById("vlragua")
            .value = + num24 ;

        var num25 = document.getElementById("redemoveis").value;
        document.getElementById("vlrredemoveis")
            .value = + num25 ;

        var num26 = document.getElementById("condominio").value;
        document.getElementById("vlrcondominio")
            .value = + num26 ;

        var num27 = document.getElementById("aluguel").value;
        document.getElementById("vlraluguel")
            .value = + num27 ;

        var num28 = document.getElementById("conducao").value;
        document.getElementById("vlrconducao")
            .value = + num28 ;

}


    