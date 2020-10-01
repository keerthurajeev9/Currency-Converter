currencyone = document.getElementById('currencyone');
currencytwo =document.getElementById('currencytwo');
amountone= document.getElementById('amount-one');
amounttwo= document.getElementById('amount-two');

swap = document.getElementById('swap');
rate= document.getElementById('rate');

// Function to fetch exchange rates

function exchangeRate(){
    const currencyOne = currencyone.value;
    const currencyTwo = currencytwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res=> res.json())
    .then(data=> {
        const rates = data.rates[currencyTwo];
        // console.log(rates);
        rate.innerHTML = `1 ${currencyOne} =(equals) ${rates} ${currencyTwo}`;
        amounttwo.value = (amountone.value * rates).toFixed(2);
        // console.log(amounttwo.value);

    });
    

}

//Swap function

function swapping(){
    const temp = currencyone.value;
    currencyone.value = currencytwo.value;
    currencytwo.value  = temp;
    exchangeRate();
}
//Event Listeners
currencyone.addEventListener('change',exchangeRate);
currencytwo.addEventListener('change',exchangeRate);
amountone.addEventListener('input',exchangeRate);
amounttwo.addEventListener('input',exchangeRate);
//swap
swap.addEventListener('click',swapping);

