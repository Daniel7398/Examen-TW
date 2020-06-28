window.onload = function() {
    //addEventListener(tipulEvent-ului, functia)
    //https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    document.getElementById("story-button").addEventListener("mouseenter", makeStory);
    document.getElementById("story-button").addEventListener("mouseleave", deleteStory);

    function makeStory() {
        var adjectiv = document.getElementById("person").value; //value -> valoarea din input
        var din_ce_motiv = document.getElementById("places").value;
        var loc = document.getElementById("adjective").value;

        var prop = loc + " este " + adjectiv + " pentru ca " + din_ce_motiv;
        document.getElementById("story").innerHTML = prop;
    }

    function deleteStory() {
        document.getElementById("story").innerHTML = "";
    }
 }


function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function myFunction1() {
  var x = document.getElementById("lname");
  x.value = x.value.toUpperCase();
}

function Prime(){
      document.getElementById("demo").innerHTML = "Locuri vizitate de catre turisti";
      var b = document.getElementsByClassName("wowow");
      console.log(b);
      b[2].innerHTML = "Vacantele sunt minunate alaturi de familie!"
      a = document.getElementsByTagName("p");
      console.log(b);
}

function DetaliiLocatii(){
    var Locatii = {
     LocatiiMaiPutinVizitate: [ "Iordania", "Maldive"],
     LocatiiVizitate: ["Egipt", "Grecia"],
     LocatiiFoarteVizitate: ["Sicilia","Costa Blanco"]
}
   var c = document.getElementsByClassName("class")[1];
   
   for (var i = 0; i < Locatii.LocatiiMaiPutinVizitate.lenght; i ++)
{
  if (i === 0) { c.innerHTML =Locatii.LocatiiMaiPutinVizitate[i];}
  else
               { c.innerHTML = c.innerHTML + ", " + Locatii.LocatiiMaiPutinVizitate[i];}
}

 getPreturiPeCinciNopti(Exotice);
}

var Exotice = {
   Maldive: "650",
   InsulaCreta: "328",
   InsuleleCanare: "480",
   
};
   function getPreturiPeCinciNopti(Exotice){
       var keys = Object.keys(Exotice);
       console.log(keys);
       var pret = 0;
       for (let i = 0; i < keys.length; i++){
         pret = pret + parsefloat(Exotice[keys[i]])*5;
}
 console.log(pret);
}


   


      

     




