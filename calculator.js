const result = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function calculator(param) {

  switch (param) {
    case "add":
      result.value = Number(num1.value) + Number(num2.value);
      break;
    case "subtract":
      result.value = Number(num1.value) - Number(num2.value);
      break;
    case "multiply":
      result.value = Number(num1.value) * Number(num2.value);
      break;
    case "devide":
      result.value = (Number(num1.value) / Number(num2.value)).toFixed(2);
      break;
    case "clear":
      result.value = "";
      num1.value = "";
      num2.value = "";
  }
}