let elSelect = document.querySelector(".form__select");
let elInputRadioContent = document.querySelector(".form__input-radio-content");
let elInputChekContentLonger = document.querySelector(".form__input-chek-content");
let elInputChekContentMore = document.querySelector(".form__input-chek-more");

let resultBread = document.querySelector(".pizza__bread-span");
let resultLong = document.querySelector(".pizza__long-span");
let resultTopList = document.querySelector(".pizza__top-list");
let resultMoreList = document.querySelector(".pizza-more-list");

let selectArr = ["Yupqa", "Urtancha", "Qalin"];
let radioArr = [25, 30, 35];
let topCheckPizza = ["Pomidor", "Kurka go`shti", "Zaytun", "Tuzlangan bodring", "Qo`ziqorin", "Qazi"];
let moreChekProduct = ["Achchiq", "Sosiskali", "Parmezan"];

let resultArray = [];
let resultArray2 = [];

for (let option = 0; option < selectArr.length; option++) {
  let selectOpt = document.createElement("option");
  selectOpt.value = selectArr[option];
  selectOpt.textContent = selectArr[option];
  elSelect.appendChild(selectOpt);

  elSelect.addEventListener('change', function (evt) {
    resultBread.textContent = evt.target.value;
  })
}

for (let radio = 0; radio < radioArr.length; radio++) {
  let inputRadio = document.createElement("input");
  inputRadio.setAttribute("type", "radio");
  inputRadio.setAttribute("name", "size-pizza");
  inputRadio.setAttribute("class", "me-1");
  let labelRadio = document.createElement("label");
  labelRadio.setAttribute("class", "me-3");

  inputRadio.value = `${radioArr[radio]}sm`
  labelRadio.textContent = `${radioArr[radio]}sm`;
  labelRadio.prepend(inputRadio);
  elInputRadioContent.appendChild(labelRadio);

  elInputRadioContent.addEventListener('change', function (evt2) {
    resultLong.textContent = evt2.target.value;
  })
}

for (let check = 0; check < topCheckPizza.length; check++) {
  let inputCheck = document.createElement("input");
  inputCheck.setAttribute("type", "checkbox");
  inputCheck.setAttribute("name", "choose-pizza");
  inputCheck.setAttribute("class", "me-1");
  let labelCheck = document.createElement("label");
  labelCheck.setAttribute("class", "me-3");

  inputCheck.value = topCheckPizza[check];
  labelCheck.textContent = topCheckPizza[check];
  labelCheck.prepend(inputCheck);
  elInputChekContentLonger.appendChild(labelCheck);

  let resultItem = document.createElement("li");

  inputCheck.addEventListener("click", function () {

    if (inputCheck.checked) {
      resultArray.push(topCheckPizza[check]);
      resultTopList.appendChild(resultItem);
      resultItem.textContent = topCheckPizza[check];

    } else {
      resultTopList.removeChild(resultItem);
      resultArray.splice(1, topCheckPizzacheck.length);
    }
  })
}

for (let checkMore = 0; checkMore < moreChekProduct.length; checkMore++) {
  let inputCheckMore = document.createElement("input");
  inputCheckMore.setAttribute("type", "checkbox");
  inputCheckMore.setAttribute("name", "choose-pizza-more");
  inputCheckMore.setAttribute("class", "me-1");
  let labelCheckMore = document.createElement("label");
  labelCheckMore.setAttribute("class", "me-3");

  inputCheckMore.value = moreChekProduct[checkMore];
  labelCheckMore.textContent = moreChekProduct[checkMore];
  labelCheckMore.prepend(inputCheckMore);
  elInputChekContentMore.appendChild(labelCheckMore);

  let resultItem2 = document.createElement("li");
  inputCheckMore.addEventListener("click", function () {
    if (inputCheckMore.checked) {
      resultArray2.push(moreChekProduct[checkMore]);
      resultMoreList.appendChild(resultItem2);
      resultItem2.textContent = moreChekProduct[checkMore];

    } else {
      resultMoreList.removeChild(resultItem2)
      resultArray2.splice(1, moreChekProduct[checkMore]);
    }
  })
}