const form = document.querySelector(".js-form");
const amount = document.querySelector(".js-amount");
const currency = document.querySelector(".js-yourCurrency");
const currencyTo = document.querySelector(".js-currencyTo");
const result = document.querySelector(".js-result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cash = +amount.value;
  const Eur = 4.23;
  const Usd = 3.99;
  const Gbp = 5.23;
  const Pln = 1;

  let calculatedResult;
  let calculation = `${currency.value}/${currencyTo.value}`;

  switch (calculation) {
    case "Eur/Eur":
      calculatedResult = Eur / Eur;
      break;
    case "Usd/Usd":
      calculatedResult = Usd / Usd;
      break;
    case "Pln/Eur":
      calculatedResult = Pln / Eur;
      break;
    case "Pln/Usd":
      calculatedResult = Pln / Usd;
      break;
    case "Pln/Gbp":
      calculatedResult = Pln / Gbp;
      break;
    case "Pln/Pln":
      calculatedResult = Pln / Pln;
      break;
    case "Usd/Pln":
      calculatedResult = Usd / Pln;
      break;
    case "Usd/Eur":
      calculatedResult = Usd / Eur;
      break;
    case "Usd/Gbp":
      calculatedResult = Eur / Gbp;
      break;
    case "Gbp/Gbp":
      calculatedResult = Gbp / Gbp;
      break;
    case "Gbp/Eur":
      calculatedResult = Gbp / Eur;
      break;
    case "Gbp/Pln":
      calculatedResult = Gbp / Pln;
      break;
    case "Gbp/Usd":
      calculatedResult = Gbp / Usd;
      break;
    case "Eur/Usd":
      calculatedResult = Eur / Usd;
      break;
    case "Eur/Gbp":
      calculatedResult = Eur / Gbp;
      break;
    case "Eur/Pln":
      calculatedResult = Eur / Pln;
      break;
  }

  result.innerHTML = `${(calculatedResult * cash).toFixed(
    2
  )} ${currencyTo.value.toUpperCase()}`;
});
