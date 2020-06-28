$(document).ready(function(){
  newQuote();
});

var newQuote = function(){
  var index = Math.floor(Math.random() * quotes.length);
  
  $('span.quote').html('"' + quotes[index] + '"');
};

var quotes = [
"Astazi este ziua ta norocoasa!",
"O sa treci cu bine peste toate!",
"Peste doua ore o sa te prinda ploaia.",
"Astazi echipa ta o sa fie castigatoare!",
"Prietenul tau va pati un accident.",
"O sa iti pierzi portofelul in drum spre casa.",
"Cineva o sa iti ofere 100 de lei cadou.",
"Anul viitor o sa fie anul tau norocos!",
"Vei trece examenul la tehnici web!",
"Parintii tai iti vor cumpara o masina de ziua ta!",
"Vei castiga un telefon nou cadou!",
"Astazi la aparate o sa iti pice 5 septari!",
"Cel mai mare secret al tau o sa fie aflat.",
"Vara aceasta este vara ta!",
"Iarna de anul aceasta nu o sa fie tocmai cea mai norocoasa."

  
]


function Title(){
    var i = 0;
    var j = 0;
    var element = document.getElementById("title23");
    var text = "TRAVEL THE WORLD";
    var leng_text = text.length;
    var leng_div_2= element.innerHTML.length/2;
    var interval = setInterval(function(){   
        element.innerHTML = element.innerHTML.slice(0,leng_div_2) + text[i]+text[leng_text-1-i]+element.innerHTML.slice(leng_div_2);
        leng_div_2= element.innerHTML.length/2;
        i++;
        if (text.length%2==1 && i == Math.floor(text.length/2)){
          element.innerHTML = element.innerHTML.slice(0, leng_div_2) + text[Math.floor(text.length/2)] + element.innerHTML.slice(leng_div_2);
        }
        if (i+1 > text.length/2){
            clearInterval(interval);
        }
    }, 1000);
}

window.onload = function(){
      Title();
      newQuote();
}




const message = 'Agentia noastra va ofera o arie extinsa de hoteluri excelente in care va puteti petrece o vacanta de vis.';
const message1="Travel The World - agentie de turism de top!";
const typingPromises = (message, timeout) =>
  [...message].map(
    (ch, i) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(message.substring(0, i + 1));
        }, timeout * i);
      })
  );

typingPromises(message, 333).forEach(promise => {
  promise.then(portion => {
    document.querySelector('p').innerHTML = portion;
  });
});

typingPromises(message1, 333).forEach(promise => {
  promise.then(portion => {
    document.querySelector('h3').innerHTML = portion;
  });
});









