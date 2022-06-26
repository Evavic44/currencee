// GSAP Animation
gsap.to(".content", { duration: 3, y: 50, opacity: "1", ease: "expo.out" });
// gsap.to(".converter", {
//   duration: 2,
//   y: 50,
//   opacity: "1",
//   delay: "-1",
//   ease: "expo.out",
// });
gsap.to(".logo", {
  duration: 2,
  y: 30,
  delay: "-1",
  ease: "bounce",
});

const convertOptions = document.querySelectorAll(".convertOptions select");
base = document.querySelector(".baseCurrency select");
foreign = document.querySelector(".foreignCurrency select");
getButton = document.querySelector("form button");
const apiKey = "453b43b410f75e41ff0c1b15";

for (let i = 0; i < convertOptions.length; i++) {
  for (currency_code in country_code) {
    let selected;
    if (i == 0) {
      selected = currency_code == "USD" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "GBP" ? "selected" : "";
    }

    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    convertOptions[i].insertAdjacentHTML("beforeend", optionTag);
  }
}

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector(".value input");
  let amountVal = amount.value;

  if (amountVal == "" || amountVal == "0") {
    amount.value = "300";
    amountVal = 300;
  }
  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[foreign.value];
      console.log(exchangeRate);
    });
}
