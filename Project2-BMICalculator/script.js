const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const guide = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid width ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      guide.innerHTML = "You are Under Weight";
    } else if (bmi > 24.9) {
      guide.innerHTML = "You are Over Weight";
    } else {
      guide.innerHTML = "You are Normal Weight";
    }
  }
});
