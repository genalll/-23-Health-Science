const date = document.querySelector(".popup__input_type_link-date");
const os = document.querySelector(".popup__input_type_program");
const osBrauser = document.querySelector(".popup__input_type_os");
const popup = document.querySelector(".containerpopup");
const popupClose = document.querySelector(".popup__close");
const heroButton = document.querySelector(".hero-button");
const cardContainer = document.querySelector(".result-container__cards");
const buttonSubmit = document.querySelector("#buttonsubmit");
const checkbox = document.querySelector('#inlineCheckboxp');
let popupForm = document.querySelector('.popup__form');

class DataStorage {

        addTolocalStorage(dataName, obj) {
                let json = JSON.stringify(obj);
                localStorage.setItem(dataName, json);
        }

        getTolocalStorage(dataN) {
                return JSON.parse(localStorage.getItem(dataN));
        }

        clear() {
                localStorage.clear();
        }

}

let Storage = new DataStorage;


//checkbox.addEventListener('change', () => {
// if ( checkbox.checked ) {
//buttonSubmit.removeAttribute('disabled');
// } else {
//  buttonSubmit.setAttribute('disabled', 'true');

//  }
//  });


class CardPatient {
        constructor(sex, name, yare, hasbands, savitskiy1, savitskiy2, savitskiy3, savitskiy4, savitskiy5, guba, rot, rot2, skin, skin2, skin3, skin4, galndula, galndula1, galndula2, galndula3, galndula4, rectum, rectum1, rectum2, rectum3) {

                let now = new Date();
                this.data = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();

                this.anketa = [this.data, sex, name, yare, hasbands, savitskiy1, savitskiy2, savitskiy3, savitskiy4, savitskiy5, guba, rot, rot2, skin, skin2, skin3, skin4, galndula, galndula1, galndula2, galndula3, galndula4, rectum, rectum1, rectum2, rectum3];
                this.qvestions = [
                        "Ваш пол?",
                        "Ваше ФИО?",
                        "Ваш возраст?",
                        "Болел ли кто-то в вашей семье онкозаболеваниями?",
                        "Бывает ли у вас неемотивированная слабость, быстрая утомляемость, в последнее время",
                        "Наблюдаете ли вы в последнее время похудание(значительное)?",
                        "Наблюдаете ли вы потерю аппетита?",
                        "Появилась ли у вас в последнее время, бледность кожных покровов?",
                        "Склонны ли вы к депрессии?",
                        "Есть ли у вас на губах или в уголках рата длительно не заживающие дефекты, по типу язвы ранки или с беловатым налетом или без?",
                        "Есть ли у вас на слизистой ротовой полости или на языке болезненные участки которые постоянно травмируются, раздражаются зубами?",
                        "В ротовой полости или на языке имеються длительно не заживающие дефекты слизистой?",
                        "Есть ли у вас на коже особенно на лице  плотные узелки и узлов желтого или серо-белого цвета или розоватого , сливающихся с кожей, плотной консистенции с видимыми сосудами или без?",
                        "Есть ли у вас на коже эрозии или язвы с плотным дном и подрытыми краями, безболезненные, иногда кровоточащие?",
                        "Есть ли у вас на коже длительно существующие образования темного цвета (родимые пятна) окраска и форма которого в последнее время изминили цвет?",
                        "Есть ли у вас на коже длительно существующие образования темного цвета (родимые пятна) которые стали в последнее время быстро расти, зудеть и кровоточить?",
                        "Бывает ли у вас  изменение голоса?",
                        "Бывает ли у вас нарушение глотания?",
                        "Бывает ли у вас ощущение комка в горле?",
                        "набухают ли у вас шейные вены?",
                        "Бывает ли у вас одутловатость лица?",
                        "Есть ли у вас хронические заболевания прямой кишки?",
                        "Наблюдаете ли вы у себя ложные позывы к акту дефекации?",
                        "Бывает ли у вас чувство не полного опорожнения кишки?",
                        "Есть ли у вас склонность к запорам?"
                ]
                this.sex = "Пол " + sex;
                this.name = name;
                this.yare = yare;
                this.hasbands = hasbands;
                this.Qhasbands = '';
                this.Savitskiy = "Малые неспецифические симптомы " + (savitskiy1 + savitskiy2 + savitskiy3 + savitskiy4 + savitskiy5) + " из 5";
                this.guba = guba;
                this.Qguba = "";
                this.rot = rot;
                this.rot2 = rot2;
                this.skin = skin;
                this.skin2 = skin2;
                this.skin3 = skin3;
                this.skin4 = skin4;
                this.Qskin = "";
                this.galndula = galndula;
                this.galndula1 = galndula1;
                this.galndula2 = galndula2;
                this.galndula3 = galndula3;
                this.galndula4 = galndula4;
                this.Qglandula = "";
                this.rectum = rectum;
                this.rectum1 = rectum1;
                this.rectum2 = rectum2;
                this.rectum3 = rectum3;
                this.Qrectum = "";
                this.Qwoman = "";
                this.Qmamografy = "";
                this.Qpsa = "";


        }
        returnQwestions() {
                return this.qvestions
        }
        createAnsaver() {
                if (this.hasbands === 1) {
                        this.Qhasbands = "Плохая наследственность по онкологии"
                }
                if (this.guba === 1 || this.rot === 1 || this.rot2 === 1) {
                        this.Qguba = "Образование губы, ротовой полости или языка требует специальной диагностики у врача челюстно лицевого хирурга, или онколога."
                }

                if (this.skin === 1 || this.skin2 === 1 || this.skin3 === 1 || this.skin4 === 1) {
                        this.Qskin = "Образования кожи требуют специального дообследования у дерматолога или онколога."
                }
                if (this.galndula === 1 || this.galndula1 === 1 || this.galndula2 === 1 || this.galndula3 === 1 || this.galndula4 === 1) {
                        this.Qglandula = "Необходима консультация эндокринолога или  лор врача."
                }
                if (this.rectum === 1 || this.rectum1 === 1 || this.rectum2 === 1 || this.rectum3 === 1 || this.rectum4 === 1) {
                        this.Qrectum = "Необходима консультация колопроктолога."
                }
                if (this.sex === "Пол ж") {
                        this.Qwoman = "Осмотр фельдшером (акушеркой) или врачом акушером-гинекологом 1 раз в год, взятие мазка с шейки матки, цитологическое исследование мазка с шейки матки 1 раз в 3 года"

                }
                if (this.sex === "Пол ж" && this.yare > 45 && this.yare < 75) {
                        this.Qmamografy = "Показана маммография обеих молочных желез в двух проекциях с двойным прочтением рентгенограмм"

                }
                if (this.sex === "Пол м") {
                        if (this.yare == 45 || this.yare == 50 || this.yare == 55 || this.yare == 60 || this.yare == 64) {
                                this.Qpsa = "Необходимо определение простат-специфического антигена в крови"

                        }
                }




                return [this.data, this.sex, this.name, this.yare, this.Qhasbands, this.Savitskiy, this.Qguba, this.Qskin, this.Qglandula, this.Qrectum, this.Qwoman, this.Qmamografy, this.Qpsa]

        }
        returnAnketa() {
                return this.anketa
        }




}













function openImagePopup(event) {
        if (event.target.classList.contains('popup__close')) {
                popup.classList.toggle('popup_is-opened');
                Storage.clear();
        }
        if (event.target.classList.contains('hero-buttons')) {
                popup.classList.toggle('popup_is-opened');
        }

        // buttonSubmit.setAttribute('disabled', 'true');
}

document.addEventListener('click', openImagePopup);



buttonSubmit.onclick = function addCardBug(event) {
        if (popupForm.checkValidity()) {


                Storage.clear();
                cardContainer.innerHTML = "";

                //sex
                let sex = "";
                let name = "";
                let old = "";
                let inlineCheckbox1 = 0;
                let inlineCheckbox2 = 0;
                let inlineCheckbox3 = 0;
                let inlineCheckbox4 = 0;
                let inlineCheckbox5 = 0;
                let inlineCheckbox6 = 0;
                let inlineCheckbox7 = 0;
                let inlineCheckbox8 = 0;
                let inlineCheckbox9 = 0;
                let inlineCheckbox10 = 0;
                let inlineCheckbox11 = 0;
                let inlineCheckbox12 = 0;
                let inlineCheckbox13 = 0;
                let inlineCheckbox14 = 0;
                let inlineCheckbox15 = 0;
                let inlineCheckbox16 = 0;
                let inlineCheckbox17 = 0;
                let inlineCheckbox18 = 0;
                let inlineCheckbox19 = 0;
                let inlineCheckbox20 = 0;
                let inlineCheckbox21 = 0;
                let inlineCheckbox22 = 0;
                function fun1() {
                        let rad = document.getElementsByName('flexRadioDefault');
                        for (var i = 0; i < rad.length; i++) {
                                if (rad[i].checked) {
                                        return i
                                }
                        }
                }
                if (fun1() === 0) {
                        sex = "м";
                }
                if (fun1() === 1) {
                        sex = "ж";
                }
                //sex
                //name
                let namecontainer = document.querySelector('#name');
                name = namecontainer.value;
                //name
                //old
                let oldcontainer = document.querySelector('#age');
                old = oldcontainer.value;
                //old
                //chekbocks
                let inlineCheckbox1Container = document.querySelector('#inlineCheckbox1');
                if (inlineCheckbox1Container.checked) {
                        inlineCheckbox1 = 1;
                }

                let inlineCheckbox2Container = document.querySelector('#inlineCheckbox2');
                if (inlineCheckbox2Container.checked) {
                        inlineCheckbox2 = 1;
                }

                let inlineCheckbox3Container = document.querySelector('#inlineCheckbox3');
                if (inlineCheckbox3Container.checked) {
                        inlineCheckbox3 = 1;
                }

                let inlineCheckbox4Container = document.querySelector('#inlineCheckbox4');
                if (inlineCheckbox4Container.checked) {
                        inlineCheckbox4 = 1;
                }
                let inlineCheckbox5Container = document.querySelector('#inlineCheckbox5');
                if (inlineCheckbox5Container.checked) {
                        inlineCheckbox5 = 1;
                }

                let inlineCheckbox6Container = document.querySelector('#inlineCheckbox6');
                if (inlineCheckbox6Container.checked) {
                        inlineCheckbox6 = 1;
                }

                let inlineCheckbox7Container = document.querySelector('#inlineCheckbox7');
                if (inlineCheckbox7Container.checked) {
                        inlineCheckbox7 = 1;
                }


                let inlineCheckbox8Container = document.querySelector('#inlineCheckbox8');
                if (inlineCheckbox8Container.checked) {
                        inlineCheckbox8 = 1;
                }

                let inlineCheckbox9Container = document.querySelector('#inlineCheckbox9');
                if (inlineCheckbox9Container.checked) {
                        inlineCheckbox9 = 1;
                }

                let inlineCheckbox10Container = document.querySelector('#inlineCheckbox10');
                if (inlineCheckbox10Container.checked) {
                        inlineCheckbox10 = 1;
                }

                let inlineCheckbox11Container = document.querySelector('#inlineCheckbox11');
                if (inlineCheckbox11Container.checked) {
                        inlineCheckbox11 = 1;
                }

                let inlineCheckbox12Container = document.querySelector('#inlineCheckbox12');
                if (inlineCheckbox12Container.checked) {
                        inlineCheckbox12 = 1;
                }
                let inlineCheckbox13Container = document.querySelector('#inlineCheckbox13');
                if (inlineCheckbox13Container.checked) {
                        inlineCheckbox13 = 1;
                }

                let inlineCheckbox14Container = document.querySelector('#inlineCheckbox14');
                if (inlineCheckbox14Container.checked) {
                        inlineCheckbox14 = 1;
                }

                let inlineCheckbox15Container = document.querySelector('#inlineCheckbox15');
                if (inlineCheckbox15Container.checked) {
                        inlineCheckbox15 = 1;
                }

                let inlineCheckbox16Container = document.querySelector('#inlineCheckbox16');
                if (inlineCheckbox16Container.checked) {
                        inlineCheckbox16 = 1;
                }

                let inlineCheckbox17Container = document.querySelector('#inlineCheckbox17');
                if (inlineCheckbox17Container.checked) {
                        inlineCheckbox17 = 1;
                }
                let inlineCheckbox18Container = document.querySelector('#inlineCheckbox18');
                if (inlineCheckbox18Container.checked) {
                        inlineCheckbox18 = 1;
                }

                let inlineCheckbox19Container = document.querySelector('#inlineCheckbox19');
                if (inlineCheckbox19Container.checked) {
                        inlineCheckbox19 = 1;
                }

                let inlineCheckbox20Container = document.querySelector('#inlineCheckbox20');
                if (inlineCheckbox20Container.checked) {
                        inlineCheckbox20 = 1;
                }

                let inlineCheckbox21Container = document.querySelector('#inlineCheckbox21');
                if (inlineCheckbox21Container.checked) {
                        inlineCheckbox21 = 1;
                }

                let inlineCheckbox22Container = document.querySelector('#inlineCheckbox22');
                if (inlineCheckbox22Container.checked) {
                        inlineCheckbox22 = 1;
                }

                //chekbocks

                patient = new CardPatient(
                        sex,
                        name,
                        old,
                        inlineCheckbox1,
                        inlineCheckbox2,
                        inlineCheckbox3,
                        inlineCheckbox4,
                        inlineCheckbox5,
                        inlineCheckbox6,
                        inlineCheckbox7,
                        inlineCheckbox8,
                        inlineCheckbox9,
                        inlineCheckbox10,
                        inlineCheckbox11,
                        inlineCheckbox12,
                        inlineCheckbox13,
                        inlineCheckbox14,
                        inlineCheckbox15,
                        inlineCheckbox16,
                        inlineCheckbox17,
                        inlineCheckbox18,
                        inlineCheckbox19,
                        inlineCheckbox20,
                        inlineCheckbox21,
                        inlineCheckbox22)


                Storage.addTolocalStorage(patient.createAnsaver().name, patient.createAnsaver());
                //Отрисовка рекомендаций пациента.

                Storage.getTolocalStorage(patient.createAnsaver().name).forEach(element => {
                        const cpatientInfoStr = document.createElement('p');
                        cpatientInfoStr.textContent = "  " + element + "  ";
                        cpatientInfoStr.classList.add("text__info");
                        cardContainer.appendChild(cpatientInfoStr);
                });


                //Проверка на дурака.










                event.preventDefault();
                popup.classList.toggle('popup_is-opened');
        }

}


//console.log(Storage.getTolocalStorage(patient.createAnsaver().name))



