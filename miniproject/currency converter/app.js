const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".drop-down select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//First step
for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD")
        {
            newOption.selected = "selected";
        }
        if(select.name === "to" && currCode === "INR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
//second step
    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target);
    });
};

//sixth step
const updateExchangeRate = async () => {
    //using this method preventDefault() it wil do.... not refresh page when you click on the button
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal , amount);
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    
    // console.log(fromCurr , toCurr);
    // console.log(fromCurr.value , toCurr.value);
//fifth step
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    // console.log(response)
    let data = await response.json();
    // console.log(data);
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amtVal * rate;
    // msg.innerText = `1USD = 83INR`;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

//third step
const updateFlag = (element) => {
    let currCode = element.value; // INR , USD
    console.log(currCode);  
    let countryCode = countryList[currCode]; // IN , EU , US
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

//fourth step
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

//sixth step
window.addEventListener("load" , () => {
    updateExchangeRate();
});
