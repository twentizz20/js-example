/////////////////
//basic1 계산기
const basic1Input1 = document.querySelector("#basic1-input-1");

const basic1Input2 = document.querySelector("#basic1-input-2");

const basic1SymbolRadio = document.querySelectorAll(
  "input[name='basic1-symbol-radio']"
);

const basic1ResultButton = document.querySelector(".basic1-result-button");

const basic1ResultContent = document.querySelector(".basic1-result-content");

const basic1Symbol = "";
basic1ResultButton.addEventListener("click", () => {
  console.log(basic1SymbolRadio);
  let result = 0;
  for (let i = 0; i < basic1SymbolRadio.length; i++) {
    console.log(basic1SymbolRadio[i].checked);
    if (basic1SymbolRadio[i].checked) {
      if (basic1SymbolRadio[i].value == "plus") {
        result = Number(basic1Input1.value) + Number(basic1Input2.value);
      } else if (basic1SymbolRadio[i].value == "minus") {
        result = Number(basic1Input1.value) - Number(basic1Input2.value);
      } else if (basic1SymbolRadio[i].value == "multiply") {
        result = Number(basic1Input1.value) * Number(basic1Input2.value);
      } else {
        result = Number(basic1Input1.value) / Number(basic1Input2.value);
      }
    }
  }
  basic1ResultContent.textContent = result;
  basic1Input1.value = "";
  basic1Input2.value = "";
  result = 0;
});
///////////////////////

//////////////////////////
//basic2 계산기
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
/////////
