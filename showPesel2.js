onmessage = function(e) {
    console.log('Worker: Message received from main script');
    let validateResult = show_pesel(e.data[0],e.data[1], e.data[2]);
    postMessage(validateResult);
}

function show_pesel(last5numbers)
{ 
  console.log("show")
  let peselArray = [];

  for (int i = 30; i<150; i++)
  {
      year = 1900 + i;

      for (int j = 1; j<13;j++)
      {
        month = j;
      } 

      for (let d=1; d<=new Date(year, month, 0).getDate(); d++)
      {
        day = d;

        pesel = create_pesel(year, month, day, i);
        let isCorrect = validate(pesel);

        if (isCorrect)
        {
          peselArray.push(pesel);
        }
      }
  }

  return peselArray;
}

function create_pesel(year, month, day, pesel)
{
    if ((1800 <= year) && (year <= 1899))
    {
        month = parseInt(month) + 80;
    }
    else if ((1900 <= year) && (year <= 1999))
    {
        month = parseInt(month) + 0;
    }
    else if ((2000 <= year) && (year <= 2099))
    {
        month = parseInt(month)  + 20;
    }
    else if ((2100 <= year) && (year <= 2199))
    {
        month = parseInt(month)  + 40;
    }
    else if ((2200 <= year) && (2299 <= year))
    {
        month = parseInt(month)  + 60;
    }
    
    day = parseInt(day);


    if (month < 10)
    {
        month = '0' + month;
    }

    if (day < 10)
    {
        day = '0' + day;
    }

    
    let numbersString = pesel.toString();

    while(numbersString < 5)
    {
      numbersString = "0" + numbersString;
    }

    return  year.substring(2, 4) + month + day + pesel;
}


function validate(pesel)
{
    if (pesel.length != 11)
    {
        return -1;
    }
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;

    let controlNumber = parseInt(pesel[10]);

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    return (10 - sum) % 10 === controlNumber;
}