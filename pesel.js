const year = document.querySelector('#rok');
const month = document.querySelector('#miesiac');
const day = document.querySelector('#dzien');
const pesel_last_5_numbers = document.querySelector('#pesel');

const validate = new Worker("validate.js");
document.getElementById("pesel_validate").addEventListener("click", FirstWorker);


function FirstWorker()
{
  validate.postMessage([year.value, month.value, day.value, pesel_last_5_numbers.value]);
  console.log('Message posted to worker');

  validate.onmessage = function (e) 
  {
    if (e.data === true)
    {
      alert("PESEL jest poprawny");
    }
    else 
    {
      alert("PESEL nie jest poprawny");
    }
  }
}


const pesel2 = new Worker("showPesel.js");
document.getElementById("pesel_day").addEventListener("click", SecondWorker);

function SecondWorker()
{
  pesel2.postMessage([year.value, month.value, day.value]);

  pesel2.onmessage = function(e)
  {
    document.querySelector('#results').innerHTML=e.data.join(", ");
    console.log('Message received from worker');
  }
}


const pesel3 = new Worker("showPesel2.js");
document.getElementById("pesel_last_numbers").addEventListener("click", ThirdWorker);

function ThirdWorker()
{
  pesel3.postMessage(pesel_last_5_numbers.value);

  pesel3.onmessage = function(e)
  {
    document.querySelector('#results').innerHTML=e.data.join(", ");
    console.log('Message received from worker');
  }
}