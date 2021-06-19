

    Storage.getTolocalStorage(localStorage.key(0)).forEach(element => {
        const cpatientInfoStr = document.createElement('p');
        cpatientInfoStr.textContent = "  " + element + "  ";
        cpatientInfoStr.classList.add("text__info");
        cardContainer.appendChild(cpatientInfoStr);
});

