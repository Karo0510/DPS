
var game = {
  zdobyte : 0,
  zycia : 3,
}

var elem = document.getElementById("panstwa");
lastLetter = 0;


//haslo = losuj_haslo();
haslo = "Poland";
elem.innerHTML = haslo;

//alert(data.length);
//alert(data[0]['country'][2]);

//alert(data[0]['country'].length);

/*for (var i = haslo.length-1; i >= 0; i -= 1) 
{
   addElement("wrap", haslo[i]);
}*/

for (var i = 0; i < haslo.length; i += 1) 
{
   addElement("wrap", haslo[i]);
}

//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery); 
alert(game.zycia);

document.getElementById("Autor").addEventListener("click", wyswietlInfo);
document.getElementById("zamknij_okno").addEventListener("click", zamknijInfo);

a = document.getElementById("okno_autor")

function wyswietlInfo()
{
  var div = document.getElementById("okno_autor");
  //div.style.display = div.style.display == "none" ? "block" : "none";
  div.style.display = "block";
  div.style.backgroundColor = "green"
  
  console.log(div)
  //alert("Karolina Maciejewska 215808");
}

function zamknijInfo()
{
  console.log("zamknij INfo function");
  var div = document.getElementById("okno_autor");
  div.style.display = "none";
}




function Ent(e)
{ 
    console.log(e)
    if (e.key == " ") 
    {
      Sprawdz_Litery();
    }
}

document.getElementById("wpisz_litere").addEventListener("keydown", Ent, false);
console.log(document.getElementsByClassName("mystyle"));


//FUNKCJE

function Sprawdz_Haslo(liter, haslo)
{
  if (liter == haslo)
  {
    return true;
  }

  return false;
}

function odslon_haslo()
{
  for (var i = 0; i < haslo.length; i+= 1)
  {
    document.getElementsByClassName("mystyle")[i].style.backgroundColor="white";
  }
}


function Sprawdz_Litery()
{
  odp = false;
  var liter = document.getElementById("wpisz_litere").value;

  if (liter.length > 1)
  {
    odp = Sprawdz_Haslo(liter, haslo);

    if (odp)
    {
      odslon_haslo();
      game.zycia += 5;
      console.log(game.zycia);
      return;
    }
    else
    {
      game.zycia -= 1;
      console.log(game.zycia);
    }
  }
  else
  {
    for (var i = 0; i < haslo.length; i+= 1)
    {
      liter_h = haslo[i]
  
      if (liter.toUpperCase() == liter_h.toUpperCase())
      {
          document.getElementsByClassName("mystyle")[i].style.backgroundColor="white";
          lastLetter++;
      }
    }
  }

  if (game.zycia == 0)
  {
      odslon_haslo();
  }

  if (lastLetter == haslo.length)
  {
    game.zycia += 5;
    lastLetter = 0;
    game.zdobyte += 1;
    console.log(game.zycia);
  }
 
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
  document.body.insertBefore(newDiv, my_div);
  //insertAfter(my_div, newDiv);

  newDiv.classList.add("mystyle");  
}

function losuj_haslo()
{
    var i = getRandomInt(0, data.length);
    return data[i]['country'];
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
