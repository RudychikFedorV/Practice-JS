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
document.querySelector(".nav").onmouseover = (event) => {
  const target = event.target;
  if (target.className == "mav-item") {
    const s = target.querySelectorAll(".sub-menu");
    closeMenu();
    s[0].style.display = "block";
  }
};

document.onmouseover = (event) => {
  const target = event.target;
  if (target.className != "mav-item" && target.className != "sub-menu") {
    closeMenu();
  }
};

const closeMenu = () => {
  const nav = document.querySelector(".nav");
  const sumb = document.querySelectorAll(".sub-menu");
  for (let i = 0; i < sumb.length; i++) {
    sumb[i].style.display = "none";
  }
};

// 5. Делаем вкладки табы (Tabs)
const tabsItems = () => {
  let tab;
  let content;

  window.onload = () => {
    tab = document.getElementsByClassName("tab");
    content = document.getElementsByClassName("content");
    hideTabsContent(1);
  };
  const hideTabsContent = (a) => {
    for (let index = a; index < content.length; index++) {
      content[index].classList.remove("show");
      content[index].classList.add("hide");
      tab[index].classList.remove("tab-1");
    }
  };
  document.querySelector(".tabs").onclick = (event) => {
    const target = event.target;
    if (target.className == "tab") {
      for (let index = 0; index < tab.length; index++) {
        if (target == tab[index]) {
          showTabsContent(index);
          break;
        }
      }
    }
  };
  const showTabsContent = (b) => {
    if (content[b].classList.contains("hide")) {
      hideTabsContent(0);
      tab[b].classList.add("tab-1");
      content[b].classList.remove("hide");
      content[b].classList.add("show");
    }
  };
};
tabsItems();

// 6. Учимся делать модальные окна
const container6 = () => {
  const myMod = document.querySelector("#myMod");
  const myBtn = document.querySelector("#myBtn");
  const spanClose = document.querySelector(".close");

  myBtn.onclick = () => {
    myMod.style.display = "block";
  };
  spanClose.onclick = () => {
    myMod.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target == myMod) {
      myMod.style.display = "none";
    }
  };
};
container6();

// 7. Анимация в js
const container7 = () => {
  const myAnimation = document.querySelector("#myAnimation");
  let pos = 0;
  const id = setInterval(() => {
    if (pos == 220) {
      clearInterval(id);
    } else {
      pos++;
      myAnimation.style.top = pos + "px";
      myAnimation.style.left = pos + "px";
    }
  }, 10);
};

// 8. Как сделать слайдер (Carousel)
let slideIndex = 1;

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
const showSlides = (n) => {
  let index;
  const slides = document.getElementsByClassName("mySlider");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  for (let index = 0; index < dots.length; index++) {
    dots[index].className = dots[index].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};
showSlides(slideIndex);

// 9 Как сделать Фильтрацию на сайт
const myFunc = () => {
  let a;
  let index;
  let input = document.querySelector("#myInput");
  let filter = input.value.toUpperCase();
  let ul = document.querySelector("#myUl");
  let li = ul.getElementsByTagName("li");

  for (let index = 0; index < li.length; index++) {
    a = li[index].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[index].style.display = "";
    } else {
      li[index].style.display = "none";
    }
  }
};

// 10 Делаем калькулятор
function plus() {
  let num1, num2, result;

  num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  result = num1 + num2;

  document.querySelector("#out").innerHTML = result;
}
function minus() {
  let num1, num2, result;

  num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  result = num1 - num2;

  document.querySelector("#out").innerHTML = result;
}
function multiplication() {
  let num1, num2, result;

  num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  result = num1 * num2;

  document.querySelector("#out").innerHTML = result;
}
function division() {
  let num1, num2, result;

  num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  result = num1 / num2;

  document.querySelector("#out").innerHTML = result;
}
function power() {
  let num1, num2, result;

  num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  result = num1 ** num2;

  document.querySelector("#out").innerHTML = result;
}

// оптимизация кода Сalculate (switch)
function calculate(operation) {
  let num11 = parseInt(document.querySelector("#n11").value);
  let num12 = parseInt(document.querySelector("#n12").value);
  let result;

  switch (operation) {
    case "plus":
      result = num11 + num12;
      break;
    case "minus":
      result = num11 - num12;
      break;
    case "multiplication":
      result = num11 * num12;
      break;
    case "division":
      result = num11 / num12;
      break;
    case "power":
      result = num11 ** num12;
      break;
    default:
      result = "Unknown operation";
  }

  document.querySelector("#out1").innerHTML = result;
}
function plus1() {
  calculate("plus");
}
function minus1() {
  calculate("minus");
}
function multiplication1() {
  calculate("multiplication");
}
function division1() {
  calculate("division");
}
function power1() {
  calculate("power");
}

// 12 Модальные изображения
const modal12 = document.getElementById("myModal12");
const img12 = document.getElementById("myImg12");
const modalImg12 = document.getElementById("img12");
const captionText12 = document.getElementById("caption12");

img12.onclick = function () {
  modal12.style.display = "block";
  modalImg12.src = this.src;
  captionText12.innerHTML = this.alt;
};

const span12 = document.getElementsByClassName("close12")[0];
span12.onclick = function () {
  modal12.style.display = "none";
};

// 13 Прогресс бар
const move = () => {
  const myBar = document.querySelector("#myBar");
  const label = document.querySelector("#label");
  let width = 10;
  const id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      myBar.style.width = width + "%";
      label.innerHTML = width * 1 + "%";
    }
  }
};

// 14 Как сделать Popup
const myFunction = () => {
  const myPopup = document.querySelector("#myPopup");
  myPopup.classList.toggle("show");
};

// 15 Accordion
const accordion = document.querySelectorAll(".accordion");
let index;

for (let index = 0; index < accordion.length; index++) {
  accordion[index].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

// 16 Простой Конвертер валют
const moneyConverter = (valNum) => {
  const outputUan = document.querySelector("#output-uan");
  outputUan.innerHTML = valNum * 42;
};

// 17 To Do приложение на js
const myNodeList = document.querySelectorAll(".li17");
let i;
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.classList = "close17";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}
const close = document.querySelectorAll(".close17");
let J;
for (let j = 0; j < close.length; j++) {
  close[j].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}
const list = document.querySelector("#myUl17");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("cheked17");
    }
  },
  false
);

const newElement17 = () => {
  const li = document.createElement("li");
  const inputValue = document.querySelector("#myInput17").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Поле не должно быть пустым!");
  } else {
    document.querySelector("#myUl17").appendChild(li);
  }

  document.querySelector('#myInput17').value = ''

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.classList = "close17";
  span.appendChild(txt);
  li.appendChild(span);

  const close = document.querySelectorAll(".close17");
  for (let j = 0; j < close.length; j++) {
    close[j].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
};
