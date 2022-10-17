function percentage() {
  
      var num1 = document.getElementById("agua").value;
      
       var num2 = document.getElementById("salario").value;
    document.getElementById("value2")
        .value = (num1 * 100) / num2 + "%";
}