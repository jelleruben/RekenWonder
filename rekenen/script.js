//===================================================================================================
function som(){
      //Scherm leeg te maken.
      document.getElementById("total").innerHTML = "";
      //Nummer van input ophalen
      var x = document.getElementById("number").value;
      var y = document.getElementById("number1").value;
      var num1 = parseFloat (x);
      var num2 = parseFloat (y);
      var z = num1 + num2;

      document.getElementById("total").innerHTML = num1 +" + "+ num2 +" = "+ z ;
      // Reset van het input de velden.
      document.getElementById("number").value = "";
      document.getElementById("number1").value = "";
   }  
//===================================================================================================
   function min(){
      //Scherm leeg maken.
      document.getElementById("total").innerHTML = "";
      //Nummer van input ophalen
      var x = document.getElementById("number").value;
      var y = document.getElementById("number1").value;
      var num1 = parseFloat (x);
      var num2 = parseFloat (y);
      var z = num1 - num2; 
      // Antwoord naar het scherm schrijven. 
      document.getElementById("total").innerHTML = num1 +" - "+ num2 +" = "+ z ;
      // Reset van het input de velden.
      document.getElementById("number").value = "";
      document.getElementById("number1").value = "";
   }
//===================================================================================================
   function maal(){
      //Scherm leeg maken.
      document.getElementById("total").innerHTML = "";
      //Nummer van input ophalen
      var x = document.getElementById("number").value;
      var y = document.getElementById("number1").value;
      var num1 = parseFloat (x);
      var num2 = parseFloat (y);
      var z = num1 * num2;
      // Antwoord naar het scherm schrijven. 
      document.getElementById("total").innerHTML = num1 +" x "+ num2 +" = "+ z ;
      // Reset van het input de velden.
      document.getElementById("number").value = "";
      document.getElementById("number1").value = "";
  }
//===================================================================================================   
   function delen(){
       document.getElementById("total").innerHTML = "";
      //Nummer van input ophalen
      var x = document.getElementById("number").value;
      var y = document.getElementById("number1").value;
      var num1 = parseFloat (x);
      var num2 = parseFloat (y);
      var z = num1 / num2;
      // Antwoord naar het scherm schrijven. 
      document.getElementById("total").innerHTML = num1 +" / "+ num2 +" = "+ z.toFixed(2) ;
      // Reset van het input de velden.
      document.getElementById("number").value = "";
      document.getElementById("number1").value = "";
  }
//===================================================================================================
function onweer(){
   var md = document.querySelector("#melding");
   document.getElementById("uitkomst").innerHTML = "";
   
       var x = document.getElementById("number").value;
       var y = 3;
       var num1 = parseFloat (x);
       var num2 = parseFloat (y);
       var z = num1 / num2;
       document.getElementById("uitkomst").innerHTML = "Het duurde "+ x + " seconden voordat de donder kwam.<br>Onweer bevind zich dan ongeveer "+ parseInt(z) +"km bij je vandaan.";
       
     if (z < 3){ // aantal KM waarin het gevaarlijk is.
      document.getElementById("melding").innerHTML = "Situatie is GEVAARLIJK";
      md.style.color ="red";
   }
       
     else {
       document.getElementById("melding").innerHTML = " Situatie is Veilig"; 
       md.style.color ="green";
      }
  }
//===================================================================================================
   function tafel(){
      // Maak het scherm leeg.
      document.getElementById("uitkomst").innerHTML = "";
      // Haal de tafel waarde op van het veld.
      var x = document.getElementById("number").value;
      // Haal het aantal waarde op van het veld.
      var y = document.getElementById("aantal1").value;
      // Starten van de tafelreeds.
      for ( i = 1 ; i <= y ; i++){
      var z = i*x;
          
      // Toont het getal welke van de tafel die gekozen is.
      document.getElementById("gekozen").innerHTML = "Gekozen tafel is " +(x); 
      // Toont het aantal antwoorden wat gekoezen is.
      document.getElementById("gekozen1").innerHTML = "Gekozen aantal is " +(y);
      // De uitkomst.
      document.getElementById("uitkomst").innerHTML += i +" x "+ x +" = "+ (z) +"<br/>";
      // Reset van het input de velden.
      document.getElementById("number").value = "";
      document.getElementById("aantal1").value = "";
       };
    }   
//===================================================================================================
   function btw(){
      // Uitkomst veld leeg maken
      document.getElementById("uitkomst").innerHTML = "";
      //Nummer van input ophalen
      var x = document.getElementById("number").value; //Ingvoerde bedrag
      var y = document.getElementById("btw").value; // BTW keuze

      var bedrag = parseFloat (x); //Bedrag omzetten naar decimalen 

      var btw = y; //btw 
      var num1 = bedrag / 100;
      var num2 = num1 * y;
      var totaal= bedrag + num2;

      z = bedrag + num2;

      //Console informatie
      console.log ("Gekozen bedrag: €"+bedrag.toFixed(2));
      console.log ("Gekozen BTW tarief: "+btw+"%");
      console.log ("Ingevoerde bedrag delen door 100: "+num1);
      console.log ("Het BTW bedrag is: €"+num2.toFixed(2));
      console.log ("Bedrag inclusief "+btw +"% BTW is €"+totaal.toFixed(2));
   
      //Uitkomst
      document.getElementById("uitkomst").innerHTML =("Gekozen bedrag:<br> €"+bedrag.toFixed(2) +"<br>"+ "Gekozen BTW tarief:<br> "+btw +"% <br> Het BTW bedrag is:<br> €"+num2.toFixed(2)  +"<br> Bedrag inclusief "+ btw +"% BTW:<br> €"+totaal.toFixed(2));  

   }

   function resetbtw(){

      document.getElementById("number").value = "";
      document.getElementById("uitkomst").innerHTML = "";
      //document.getElementById("btw").innerHTML ="6";
   }
//===================================================================================================
   function benzine(){
      document.getElementById("uitkomst").innerHTML = "";
      //Nummer van input ophalen
      var x = document.getElementById("km1").value; //KM stand begin
      var y = document.getElementById("km2").value; // KM stand eind
      var t = document.getElementById("prijs").value; // Benzineprijs per liter
      var u = document.getElementById("liters").value; // Aantal getankte liters
      
      var km1 = parseFloat (x);
      var km2 = parseFloat (y);
      var prijs = parseFloat (t).toFixed(2);
      var liter = parseFloat (u);
   
      //Berekeningen
      var tot = km2 - km1; // Aantal Km's
      var verb = tot / liter; // Verbruik
      var lv = tot / verb;
      var kosten = lv * prijs;
   
      console.log ("Eerste KM stand: " + km1);
      console.log ("Tweede KM stand: " + km2);
      console.log ("Aantal gereden KM's "+ tot);
      console.log ("Benzineprijs: €" + prijs);
      console.log ("Liters getankt: " + liter);
      console.log ("Verbruik 1/100 :" + verb.toFixed());
      console.log ("liter verbruik: " + lv);
      console.log ("Benzine kosten: " + kosten.toFixed(2));
   
      //Uitkomst
      document.getElementById("uitkomst").innerHTML = ("KM stand: "+ km1 + "<br>Eind KM stand: "+ km2 + "<br> Aantal gereden KM: "+ tot +"<br> Benzineprijs: €"+ prijs +"<br>Aantal liters getankt:"+ liter +"<br><br>L/100: "+ verb.toFixed() +"<br>Liters verbruik: "+ lv +"<br>Benzine kosten: €"+ kosten.toFixed(2))
   }
   //===================================================================================================
   function leeftijd(){
      var age = document.getElementById("leeftijd").value;
      var days = age *365.25;
  
      document.getElementById("checking").innerHTML = "Je bent "+days+" dagen oud";
      document.getElementById("leeftijd").value = "";
  
  }
  //===================================================================================================
   function leeftijdcheck(){
      var cc = document.querySelector("#total")
      var age = document.getElementById("input").value
   
      if (age <18){
         console.log("je bent onder de 18");
         document.getElementById("total").innerHTML = "Je mag NIET naar binnen!";
         cc.style.color= "red";
     }
     
     else {
         console.log("Je bent volwassen");
         document.getElementById("total").innerHTML = "Je bent van harte welkom.";
         cc.style.color= "green";
     }
 }

//===================================================================================================
 function muntgeld(){

   //Ophalen van de waarden
   var munt_005 = document.getElementById("munt_005").value;
   var munt_010 = document.getElementById("munt_010").value;
   var munt_020 = document.getElementById("munt_020").value;
   var munt_050 = document.getElementById("munt_050").value;
   var munt_100 = document.getElementById("munt_100").value;
   var munt_200 = document.getElementById("munt_200").value;
   
   var num_1 = munt_005 * 0.05;
   var num_2 = munt_010 * 0.10;
   var num_3 = munt_020 * 0.20;
   var num_4 = munt_050 * 0.50;
   var num_5 = munt_100 * 1.00;
   var num_6 = munt_200 * 2.00;
   
   total = num_1 + num_2 + num_3 + num_4 + num_5 + num_6;
   


document.getElementById("uitkomst").innerHTML = 
+ munt_005 +" x €0.05 = €" + num_1.toFixed(2) + "<br>"
+ munt_010 +" x €0.10 = €" + num_2.toFixed(2) + "<br>"
+ munt_020 +" x €0.20 = €" + num_3.toFixed(2) + "<br>"
+ munt_050 +" x €0.50 = €" + num_4.toFixed(2) + "<br>"
+ munt_100 +" x €1.00 = €" + num_5.toFixed(2) + "<br>"
+ munt_200 +" x €2.00 = €" + num_6.toFixed(2) + "<br><br>"
+ "Totaal bedrag is: €"+total.toFixed(2)
;



   console.log(+ munt_005 +" * €0.05 = €" + num_1.toFixed(2));
   console.log(+ munt_010 +" * €0.10 = €" + num_2.toFixed(2));
   console.log(+ munt_020 +" * €0.15 = €" + num_3.toFixed(2));
   console.log(+ munt_050 +" * €0.20 = €" + num_4.toFixed(2));
   console.log(+ munt_100 +" * €1.00 = €" + num_5.toFixed(2));
   console.log(+ munt_200 +" * €2.00 = €" + num_6.toFixed(2));
   
   console.log ("Totaal bedrag is €"+total.toFixed(2))
   }