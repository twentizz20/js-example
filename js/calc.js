const basic1Input1 = document.querySelector("#basic1-input-1").value;

const basic1Input2 = document.querySelector("#basic1-input-2").value;

const basic1SymbolRadio = document.querySelectorAll(
  "input[name='basic1-symbol-radio']"
);
// basic1SymbolRadio.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

const basic1ResultButton = document.querySelector(".basic1-result-button");

const basic1ResultContent = document.querySelector(".basic1-result-content");

// basic1Input1.addEventListener("change", () => {
//   const result = basic1Input1 + basic1Input2;
// });

///////////////////
const basic2Input1 = document.querySelector("#basic2-input-1");
const basic2Input2 = document.querySelector("#basic2-input-2");

const basic2ResultContent = document.querySelector(".basic2-result-content");

const basic2ResultPlus = document.querySelector(".basic2-result-plus");
basic2ResultPlus.addEventListener("click", () => {
  //const result = basic2Input1.value + basic2Input2.value;

  const result = Number(basic2Input1.value) + Number(basic2Input2.value);

  console.log(result);
  basic2Input1.value = "";
  basic2Input2.value = "";

  basic2ResultContent.textContent = result;
});

const basic2ResultMinus = document.querySelector(".basic2-result-minus");
basic2ResultMinus.addEventListener("click", () => {
  const result = Number(basic2Input1.value) - Number(basic2Input2.value);

  basic2Input1.value = "";
  basic2Input2.value = "";

  basic2ResultContent.textContent = result;
});

const basic2ResultMultiply = document.querySelector(".basic2-result-multiply");
basic2ResultMultiply.addEventListener("click", () => {
  const result = Number(basic2Input1.value) * Number(basic2Input2.value);

  basic2Input1.value = "";
  basic2Input2.value = "";

  basic2ResultContent.textContent = result;
});

const basic2ResultDivide = document.querySelector(".basic2-result-divide");
basic2ResultDivide.addEventListener("click", () => {
  const result = Number(basic2Input1.value) / Number(basic2Input2.value);

  basic2Input1.value = "";
  basic2Input2.value = "";

  basic2ResultContent.textContent = result;
});
