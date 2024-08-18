// 1. Input
const checkBox = () => {
  const checkbox = document.querySelector("#checkbox");
  if (checkbox.checked) {
    console.log("Выбран чек");
  } else {
    console.log("Не выбран чек");
  }
};

const checkRadios = () => {
  const checkRadio = document.querySelectorAll('[name="r1"]');
  for (let index = 0; index < checkRadio.length; index++) {
    if (checkRadio[index].checked) {
      console.log("Выбран " + (index + 1) + " элемент");
    }
  }
};

// 2. Работаем с селектом
const mySelect = () => {
  const select = document.querySelector("#mySelect").selectedIndex;
  const options = document.querySelector("#mySelect").options;
  const result = "Выбрана опция " + options[select].text;
  console.log(result);
};

const myRange = () => {
  const range = document.querySelector("#myRange");
  const text = document.querySelector("#myText");
  const test = document.querySelector("#test");
  text.value = range.value;
  test.style.width = range.value + "px";
};

// 3. Пишем свой CSS генератор
const myContainer3 = () => {
  const myRange1 = document.querySelector("#myRange1");
  const myText1 = document.querySelector("#myText1");
  const myRange2 = document.querySelector("#myRange2");
  const myText2 = document.querySelector("#myText2");
  const myRange3 = document.querySelector("#myRange3");
  const myText3 = document.querySelector("#myText3");
  const myRange4 = document.querySelector("#myRange4");
  const myText4 = document.querySelector("#myText4");
  const bg = document.querySelector("#bg");

  myText1.value = myRange1.value;
  myText2.value = myRange2.value;
  myText3.value = myRange3.value;
  myText4.value = myRange4.value;
  bg.style.borderRadius =
    myRange1.value +
    "px " +
    myRange2.value +
    "px " +
    myRange3.value +
    "px " +
    myRange4.value +
    "px ";
};

// 4. Пишем выпадающее меню
