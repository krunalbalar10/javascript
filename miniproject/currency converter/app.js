const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".drop-down select");

const btn = document.querySelector("button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

let i= 0;

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
}

//third step
const updateFlag = (element) => {
    let currCode = element.value;
    console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

//fouth step
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
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
    console.log(response)
    let data = await response.json();

    console.log(data);
});