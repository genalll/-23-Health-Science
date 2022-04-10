

    Storage.getTolocalStorage(localStorage.key(0)).forEach(function (element, i) {
        const cpatientInfoStr = document.createElement('p');
        if (i === 0) {
                cpatientInfoStr.innerHTML = "Дата заполнения анкеты"
                cpatientInfoStr.classList.add("carpdpatient__data");
        }
        if (i === 1) {
                cpatientInfoStr.classList.add("carpdpatient__data");
        }
        if (i === 3) {
                cpatientInfoStr.innerHTML = "Возраст пациента полных лет"
                cpatientInfoStr.classList.add("carpdpatient__data");
        }
        if (i === 2) {
                cpatientInfoStr.innerHTML = "Пациент:   "
                cpatientInfoStr.classList.add("carpdpatient__patient");
        }
        cpatientInfoStr.innerHTML += "  " + element + "  ";
        cpatientInfoStr.classList.add("text__info");
        cardContainer.appendChild(cpatientInfoStr);
        if (element === "") {
                cardContainer.removeChild(cpatientInfoStr);
        }
});
