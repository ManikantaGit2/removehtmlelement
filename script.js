let userInputEl = document.getElementById("userInput");
let saveButtonEl = document.getElementById("saveButton");
let clearButtonEl = document.getElementById("clearButton");
let storageKey = "userInputKey";


let storageVal = localStorage.getItem(storageKey);

if(storageVal === null) {
    localStorage.setItem(storageKey, "Mani");
}

userInputEl.value = localStorage.getItem(storageKey);

saveButtonEl.onclick = function () {
    let inputVal = userInputEl.value;
    localStorage.setItem(storageKey,inputVal);

};


clearButtonEl.onclick = function () {
   userInputEl.value = "";
   localStorage.removeItem(storageKey);
}