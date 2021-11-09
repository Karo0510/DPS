
var game = {
  zdobyte : 0,
  zycia : 1,
}
//alert(data[0]['country']);
var elem = document.getElementById("panstwa");
//elem.innerHTML =data[0]['country'];

//alert(data.length);
//alert(data[0]['country'][2]);

//alert(data[0]['country'].length);

for (var i = data[0]['country'].length-1; i >= 0; i -= 1) 
{
    addElement("wrap", data[0]['country'][i]);
}


//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery); 
alert(game.zycia);

document.getElementById("Autor").addEventListener("click", wyswietlInfo);

function wyswietlInfo()
{
  var div = document.createElement("div"); //create new div
  div.addEventListener("click", run); //bind click to new div
  this.append(div); //append the new div to clicked div
  this.removeEventListener("click", run); //remove the original click event
  alert("Karolina Maciejewska 215808");
}



function Ent(e)
{ 
    console.log(e)
    if (e.key == "ArrowLeft") 
    {
      Sprawdz_Litery();
    }
}

document.getElementById("wpisz_litere").addEventListener("keydown", Ent, false);
console.log(document.getElementsByClassName("mystyle"));


//FUNKCJE


function Sprawdz_Litery()
{
  var liter = document.getElementById("wpisz_litere").value;

  for (var i = 0; i < data[0]['country'].length; i+= 1)
  {
    liter_h = data[0]['country'][i];

    if (liter == liter_h.toUpperCase())
    {
        document.getElementsByClassName("mystyle")[i].style.backgroundColor="white";
    }
    //alert("blad");
  }
  //alert(liter);
  //alert(getRandomInt(10,20));
}

function insertAfter(Node, newNode) 
{
  Node.parentNode.insertBefore(newNode, Node.nextSibling);
}

function addElement(mydiv, letter)
{ 
  newDiv = document.createElement("span");
  newDiv.innerHTML = letter;

  my_div = document.getElementById(mydiv);
  //document.body.insertBefore(newDiv, my_div);
  insertAfter(my_div, newDiv);

  newDiv.classList.add("mystyle");  
  console.log(newDiv)
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
