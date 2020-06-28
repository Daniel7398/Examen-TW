
function addElement () {
var newDiv = document.createElement("div")
var newContent = docment.createTextNode("ASDsffhfhghghhdjgjhgjhjhhdjfkdslslld")
newDiv.appendChild(newContent)
var currentDiv = document.getElementByID("div1");
document.body.insertBefore(newDiv, currentDiv);
}
function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Ai apasat de " + localStorage.clickcount + " (de) ori pe buton.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function Functia1() {
    document.getElementById("demo").innerHTML = "My first function text!!!";
    var elementsWithClass = document.getElementsByClassName("class");
    console.log(elementsWithClass);
    elementsWithClass[3].innerHTML = "Alt text!!" //innerHTML ce se afla intre tag-uri
                                                // <div> aici e innerHTML-ul </div>
    var elemtsWithTagP = document.getElementsByTagName("p");
    console.log(elemtsWithTagP);
}


function Locatii() {
    var loc = {
        FrecventateRar: "Israel",
        Frecventate: "CostaBrava",
        FoarteFrecventate: [
            "Insula Creta",
            "Insulele Maldive"
        ]
    } 
   

    var a = document.getElementsByClassName("class")[0];

    for (var i = 0; i < loc.FoarteFrecventate.length; i++) {
        if (i === 0) {
            a.innerHTML = loc.FoarteFrecventate[i];
        } else {
            a.innerHTML = a.innerHTML + ", " + loc.FoarteFrecventate[i];
        }
    }

    
}

function scoateCopii_Paragrafelor(){
  console.log('AICI')
  var el = document.querySelector("h3");
  document.body.removeChild(el);
}

function adaugaCopil(){
  var el = document.createElement('p');
  el.setAttribute("id", "id_ok");
  el.innerHTML="Alegeti-ne pe noi si o sa o vacanta de neuitat!";
  var sec = document.getElementById("secFirst");
  sec.appendChild(el);
}

function schimbaCopil(){
 var el =document.getElementById('id_ok');
 el.setAttribute("style","color:red");
}

// AJAX
function functiePaInterval() {setInterval(function ()
  {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", "FISER_JSON.json", true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var parsare = JSON.parse(this.responseText);
      var frecventa =parsare.FrecventateRar;
      console.log(frecventa);
    }
  };


}, 3200);
}

window.onload = function(){
 this.scoateCopii_Paragrafelor();
 adaugaCopil();
 schimbaCopil();
 functiePaInterval();
}

