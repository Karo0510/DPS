
pesel = "92100509064";

if (pesel.length != 11)
{
    console.log("Bledny pesel;")
}

function validate()
{
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;

    let controlNumber = parseInt(pesel[10]);

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    return (10 - sum) % 10 === controlNumber;
}

console.log(validate());