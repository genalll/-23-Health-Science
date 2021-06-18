const date=document.querySelector(".popup__input_type_link-date");
const os=document.querySelector(".popup__input_type_program");
const osBrauser=document.querySelector(".popup__input_type_os");
const popup=document.querySelector(".containerpopup");
const popupClose=document.querySelector(".popup__close");
const heroButton=document.querySelector(".hero-button");
const cardContainer=document.querySelector(".result-container__cards");
const buttonSubmit=document.querySelector("#buttonsubmit");
const checkbox = document.querySelector('#inlineCheckboxp');
let popupForm=document.querySelector('.popup__form');

class DataStorage {

        addTolocalStorage(dataName, obj) {
            let json = JSON.stringify(obj);
            localStorage.setItem(dataName, json);
        }
    
        getTolocalStorage(dataN) {
            return JSON.parse(localStorage.getItem(dataN));
        }

        clear(){
                localStorage.clear();    
        }
    
    }

let Storage= new DataStorage;


checkbox.addEventListener('change', () => {
        if ( checkbox.checked ) {
            buttonSubmit.removeAttribute('disabled');
        } else {
            buttonSubmit.setAttribute('disabled', 'true');
        }
    });



    

var _0x307b=["\x64\x61\x74\x61","\x67\x65\x74\x44\x61\x74\x65","\x2E","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72","\x20","\x67\x65\x74\x48\x6F\x75\x72\x73","\x3A","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x61\x6E\x6B\x65\x74\x61","\x71\x76\x65\x73\x74\x69\x6F\x6E\x73","\u0412\u0430\u0448\x20\u043F\u043E\u043B\x3F","\u0412\u0430\u0448\u0435\x20\u0424\u0418\u041E\x3F","\u0412\u0430\u0448\x20\u0432\u043E\u0437\u0440\u0430\u0441\u0442\x3F","\u0411\u043E\u043B\u0435\u043B\x20\u043B\u0438\x20\u043A\u0442\u043E\x2D\u0442\u043E\x20\u0432\x20\u0432\u0430\u0448\u0435\u0439\x20\u0441\u0435\u043C\u044C\u0435\x20\u043E\u043D\u043A\u043E\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F\u043C\u0438\x3F","\u0411\u044B\u0432\u0430\u0435\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0435\u0435\u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F\x20\u0441\u043B\u0430\u0431\u043E\u0441\u0442\u044C\x2C\x20\u0431\u044B\u0441\u0442\u0440\u0430\u044F\x20\u0443\u0442\u043E\u043C\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C\x2C\x20\u0432\x20\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435\x20\u0432\u0440\u0435\u043C\u044F","\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u0442\u0435\x20\u043B\u0438\x20\u0432\u044B\x20\u0432\x20\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435\x20\u0432\u0440\u0435\u043C\u044F\x20\u043F\u043E\u0445\u0443\u0434\u0430\u043D\u0438\u0435\x28\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435\x29\x3F","\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u0442\u0435\x20\u043B\u0438\x20\u0432\u044B\x20\u043F\u043E\u0442\u0435\u0440\u044E\x20\u0430\u043F\u043F\u0435\u0442\u0438\u0442\u0430\x3F","\u041F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u0432\x20\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435\x20\u0432\u0440\u0435\u043C\u044F\x2C\x20\u0431\u043B\u0435\u0434\u043D\u043E\u0441\u0442\u044C\x20\u043A\u043E\u0436\u043D\u044B\u0445\x20\u043F\u043E\u043A\u0440\u043E\u0432\u043E\u0432\x3F","\u0421\u043A\u043B\u043E\u043D\u043D\u044B\x20\u043B\u0438\x20\u0432\u044B\x20\u043A\x20\u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u0438\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\x20\u0433\u0443\u0431\u0430\u0445\x20\u0438\u043B\u0438\x20\u0432\x20\u0443\u0433\u043E\u043B\u043A\u0430\u0445\x20\u0440\u0430\u0442\u0430\x20\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\x20\u043D\u0435\x20\u0437\u0430\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0435\x20\u0434\u0435\u0444\u0435\u043A\u0442\u044B\x2C\x20\u043F\u043E\x20\u0442\u0438\u043F\u0443\x20\u044F\u0437\u0432\u044B\x20\u0440\u0430\u043D\u043A\u0438\x20\u0438\u043B\u0438\x20\u0441\x20\u0431\u0435\u043B\u043E\u0432\u0430\u0442\u044B\u043C\x20\u043D\u0430\u043B\u0435\u0442\u043E\u043C\x20\u0438\u043B\u0438\x20\u0431\u0435\u0437\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\x20\u0441\u043B\u0438\u0437\u0438\u0441\u0442\u043E\u0439\x20\u0440\u043E\u0442\u043E\u0432\u043E\u0439\x20\u043F\u043E\u043B\u043E\u0441\u0442\u0438\x20\u0438\u043B\u0438\x20\u043D\u0430\x20\u044F\u0437\u044B\u043A\u0435\x20\u0431\u043E\u043B\u0435\u0437\u043D\u0435\u043D\u043D\u044B\u0435\x20\u0443\u0447\u0430\u0441\u0442\u043A\u0438\x20\u043A\u043E\u0442\u043E\u0440\u044B\u0435\x20\u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\x20\u0442\u0440\u0430\u0432\u043C\u0438\u0440\u0443\u044E\u0442\u0441\u044F\x2C\x20\u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F\x20\u0437\u0443\u0431\u0430\u043C\u0438\x3F","\u0412\x20\u0440\u043E\u0442\u043E\u0432\u043E\u0439\x20\u043F\u043E\u043B\u043E\u0441\u0442\u0438\x20\u0438\u043B\u0438\x20\u043D\u0430\x20\u044F\u0437\u044B\u043A\u0435\x20\u0438\u043C\u0435\u044E\u0442\u044C\u0441\u044F\x20\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\x20\u043D\u0435\x20\u0437\u0430\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0435\x20\u0434\u0435\u0444\u0435\u043A\u0442\u044B\x20\u0441\u043B\u0438\u0437\u0438\u0441\u0442\u043E\u0439\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\x20\u043A\u043E\u0436\u0435\x20\u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\x20\u043D\u0430\x20\u043B\u0438\u0446\u0435\x20\x20\u043F\u043B\u043E\u0442\u043D\u044B\u0435\x20\u0443\u0437\u0435\u043B\u043A\u0438\x20\u0438\x20\u0443\u0437\u043B\u043E\u0432\x20\u0436\u0435\u043B\u0442\u043E\u0433\u043E\x20\u0438\u043B\u0438\x20\u0441\u0435\u0440\u043E\x2D\u0431\u0435\u043B\u043E\u0433\u043E\x20\u0446\u0432\u0435\u0442\u0430\x20\u0438\u043B\u0438\x20\u0440\u043E\u0437\u043E\u0432\u0430\u0442\u043E\u0433\u043E\x20\x2C\x20\u0441\u043B\u0438\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F\x20\u0441\x20\u043A\u043E\u0436\u0435\u0439\x2C\x20\u043F\u043B\u043E\u0442\u043D\u043E\u0439\x20\u043A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u0438\x20\u0441\x20\u0432\u0438\u0434\u0438\u043C\u044B\u043C\u0438\x20\u0441\u043E\u0441\u0443\u0434\u0430\u043C\u0438\x20\u0438\u043B\u0438\x20\u0431\u0435\u0437\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\x20\u043A\u043E\u0436\u0435\x20\u044D\u0440\u043E\u0437\u0438\u0438\x20\u0438\u043B\u0438\x20\u044F\u0437\u0432\u044B\x20\u0441\x20\u043F\u043B\u043E\u0442\u043D\u044B\u043C\x20\u0434\u043D\u043E\u043C\x20\u0438\x20\u043F\u043E\u0434\u0440\u044B\u0442\u044B\u043C\u0438\x20\u043A\u0440\u0430\u044F\u043C\u0438\x2C\x20\u0431\u0435\u0437\u0431\u043E\u043B\u0435\u0437\u043D\u0435\u043D\u043D\u044B\u0435\x2C\x20\u0438\u043D\u043E\u0433\u0434\u0430\x20\u043A\u0440\u043E\u0432\u043E\u0442\u043E\u0447\u0430\u0449\u0438\u0435\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\x20\u043A\u043E\u0436\u0435\x20\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\x20\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435\x20\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F\x20\u0442\u0435\u043C\u043D\u043E\u0433\u043E\x20\u0446\u0432\u0435\u0442\u0430\x20\x28\u0440\u043E\u0434\u0438\u043C\u044B\u0435\x20\u043F\u044F\u0442\u043D\u0430\x29\x20\u043E\u043A\u0440\u0430\u0441\u043A\u0430\x20\u0438\x20\u0444\u043E\u0440\u043C\u0430\x20\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E\x20\u0432\x20\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435\x20\u0432\u0440\u0435\u043C\u044F\x20\u0438\u0437\u043C\u0438\u043D\u0438\u043B\u0438\x20\u0446\u0432\u0435\u0442\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\x20\u043A\u043E\u0436\u0435\x20\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\x20\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435\x20\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F\x20\u0442\u0435\u043C\u043D\u043E\u0433\u043E\x20\u0446\u0432\u0435\u0442\u0430\x20\x28\u0440\u043E\u0434\u0438\u043C\u044B\u0435\x20\u043F\u044F\u0442\u043D\u0430\x29\x20\u043A\u043E\u0442\u043E\u0440\u044B\u0435\x20\u0441\u0442\u0430\u043B\u0438\x20\u0432\x20\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435\x20\u0432\u0440\u0435\u043C\u044F\x20\u0431\u044B\u0441\u0442\u0440\u043E\x20\u0440\u0430\u0441\u0442\u0438\x2C\x20\u0437\u0443\u0434\u0435\u0442\u044C\x20\u0438\x20\u043A\u0440\u043E\u0432\u043E\u0442\u043E\u0447\u0438\u0442\u044C\x3F","\u0411\u044B\u0432\u0430\u0435\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\x20\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435\x20\u0433\u043E\u043B\u043E\u0441\u0430\x3F","\u0411\u044B\u0432\u0430\u0435\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435\x20\u0433\u043B\u043E\u0442\u0430\u043D\u0438\u044F\x3F","\u0411\u044B\u0432\u0430\u0435\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435\x20\u043A\u043E\u043C\u043A\u0430\x20\u0432\x20\u0433\u043E\u0440\u043B\u0435\x3F","\u043D\u0430\u0431\u0443\u0445\u0430\u044E\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u0448\u0435\u0439\u043D\u044B\u0435\x20\u0432\u0435\u043D\u044B\x3F","\u0411\u044B\u0432\u0430\u0435\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u043E\u0434\u0443\u0442\u043B\u043E\u0432\u0430\u0442\u043E\u0441\u0442\u044C\x20\u043B\u0438\u0446\u0430\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435\x20\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F\x20\u043F\u0440\u044F\u043C\u043E\u0439\x20\u043A\u0438\u0448\u043A\u0438\x3F","\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u0442\u0435\x20\u043B\u0438\x20\u0432\u044B\x20\u0443\x20\u0441\u0435\u0431\u044F\x20\u043B\u043E\u0436\u043D\u044B\u0435\x20\u043F\u043E\u0437\u044B\u0432\u044B\x20\u043A\x20\u0430\u043A\u0442\u0443\x20\u0434\u0435\u0444\u0435\u043A\u0430\u0446\u0438\u0438\x3F","\u0411\u044B\u0432\u0430\u0435\u0442\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u0447\u0443\u0432\u0441\u0442\u0432\u043E\x20\u043D\u0435\x20\u043F\u043E\u043B\u043D\u043E\u0433\u043E\x20\u043E\u043F\u043E\u0440\u043E\u0436\u043D\u0435\u043D\u0438\u044F\x20\u043A\u0438\u0448\u043A\u0438\x3F","\u0415\u0441\u0442\u044C\x20\u043B\u0438\x20\u0443\x20\u0432\u0430\u0441\x20\u0441\u043A\u043B\u043E\u043D\u043D\u043E\u0441\u0442\u044C\x20\u043A\x20\u0437\u0430\u043F\u043E\u0440\u0430\u043C\x3F","\x73\x65\x78","\u041F\u043E\u043B\x20","\x6E\x61\x6D\x65","\x79\x61\x72\x65","\x68\x61\x73\x62\x61\x6E\x64\x73","\x51\x68\x61\x73\x62\x61\x6E\x64\x73","","\x53\x61\x76\x69\x74\x73\x6B\x69\x79","\u041C\u0430\u043B\u044B\u0435\x20\u043D\u0435\u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435\x20\u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B\x20","\x20\u0438\u0437\x20\x35","\x67\x75\x62\x61","\x51\x67\x75\x62\x61","\x72\x6F\x74","\x72\x6F\x74\x32","\x73\x6B\x69\x6E","\x73\x6B\x69\x6E\x32","\x73\x6B\x69\x6E\x33","\x73\x6B\x69\x6E\x34","\x51\x73\x6B\x69\x6E","\x67\x61\x6C\x6E\x64\x75\x6C\x61","\x67\x61\x6C\x6E\x64\x75\x6C\x61\x31","\x67\x61\x6C\x6E\x64\x75\x6C\x61\x32","\x67\x61\x6C\x6E\x64\x75\x6C\x61\x33","\x67\x61\x6C\x6E\x64\x75\x6C\x61\x34","\x51\x67\x6C\x61\x6E\x64\x75\x6C\x61","\x72\x65\x63\x74\x75\x6D","\x72\x65\x63\x74\x75\x6D\x31","\x72\x65\x63\x74\x75\x6D\x32","\x72\x65\x63\x74\x75\x6D\x33","\x51\x72\x65\x63\x74\x75\x6D","\x51\x77\x6F\x6D\x61\x6E","\x51\x6D\x61\x6D\x6F\x67\x72\x61\x66\x79","\x51\x70\x73\x61","\u041F\u043B\u043E\u0445\u0430\u044F\x20\u043D\u0430\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\x20\u043F\u043E\x20\u043E\u043D\u043A\u043E\u043B\u043E\u0433\u0438\u0438","\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\x20\u0433\u0443\u0431\u044B\x2C\x20\u0440\u043E\u0442\u043E\u0432\u043E\u0439\x20\u043F\u043E\u043B\u043E\u0441\u0442\u0438\x20\u0438\u043B\u0438\x20\u044F\u0437\u044B\u043A\u0430\x20\u0442\u0440\u0435\u0431\u0443\u0435\u0442\x20\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439\x20\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438\x20\u0443\x20\u0432\u0440\u0430\u0447\u0430\x20\u0447\u0435\u043B\u044E\u0441\u0442\u043D\u043E\x20\u043B\u0438\u0446\u0435\u0432\u043E\u0433\u043E\x20\u0445\u0438\u0440\u0443\u0440\u0433\u0430\x2C\x20\u0438\u043B\u0438\x20\u043E\u043D\u043A\u043E\u043B\u043E\u0433\u0430\x2E","\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F\x20\u043A\u043E\u0436\u0438\x20\u0442\u0440\u0435\u0431\u0443\u044E\u0442\x20\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E\x20\u0434\u043E\u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F\x20\u0443\x20\u0434\u0435\u0440\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0430\x20\u0438\u043B\u0438\x20\u043E\u043D\u043A\u043E\u043B\u043E\u0433\u0430\x2E","\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430\x20\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F\x20\u044D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0430\x20\u0438\u043B\u0438\x20\x20\u043B\u043E\u0440\x20\u0432\u0440\u0430\u0447\u0430\x2E","\x72\x65\x63\x74\x75\x6D\x34","\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430\x20\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F\x20\u043A\u043E\u043B\u043E\u043F\u0440\u043E\u043A\u0442\u043E\u043B\u043E\u0433\u0430\x2E","\u041F\u043E\u043B\x20\u0436","\u041E\u0441\u043C\u043E\u0442\u0440\x20\u0444\u0435\u043B\u044C\u0434\u0448\u0435\u0440\u043E\u043C\x20\x28\u0430\u043A\u0443\u0448\u0435\u0440\u043A\u043E\u0439\x29\x20\u0438\u043B\u0438\x20\u0432\u0440\u0430\u0447\u043E\u043C\x20\u0430\u043A\u0443\u0448\u0435\u0440\u043E\u043C\x2D\u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u043E\u043C\x20\x31\x20\u0440\u0430\u0437\x20\u0432\x20\u0433\u043E\u0434\x2C\x20\u0432\u0437\u044F\u0442\u0438\u0435\x20\u043C\u0430\u0437\u043A\u0430\x20\u0441\x20\u0448\u0435\u0439\u043A\u0438\x20\u043C\u0430\u0442\u043A\u0438\x2C\x20\u0446\u0438\u0442\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435\x20\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435\x20\u043C\u0430\u0437\u043A\u0430\x20\u0441\x20\u0448\u0435\u0439\u043A\u0438\x20\u043C\u0430\u0442\u043A\u0438\x20\x31\x20\u0440\u0430\u0437\x20\u0432\x20\x33\x20\u0433\u043E\u0434\u0430","\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0430\x20\u043C\u0430\u043C\u043C\u043E\u0433\u0440\u0430\u0444\u0438\u044F\x20\u043E\u0431\u0435\u0438\u0445\x20\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0445\x20\u0436\u0435\u043B\u0435\u0437\x20\u0432\x20\u0434\u0432\u0443\u0445\x20\u043F\u0440\u043E\u0435\u043A\u0446\u0438\u044F\u0445\x20\u0441\x20\u0434\u0432\u043E\u0439\u043D\u044B\u043C\x20\u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u0435\u043C\x20\u0440\u0435\u043D\u0442\u0433\u0435\u043D\u043E\u0433\u0440\u0430\u043C\u043C","\u041F\u043E\u043B\x20\u043C","\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\x20\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435\x20\u043F\u0440\u043E\u0441\u0442\u0430\u0442\x2D\u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E\x20\u0430\u043D\u0442\u0438\u0433\u0435\u043D\u0430\x20\u0432\x20\u043A\u0440\u043E\u0432\u0438"];class CardPatient{constructor(_0xe046x2,_0xe046x3,_0xe046x4,_0xe046x5,_0xe046x6,_0xe046x7,_0xe046x8,_0xe046x9,_0xe046xa,_0xe046xb,_0xe046xc,_0xe046xd,_0xe046xe,_0xe046xf,_0xe046x10,_0xe046x11,_0xe046x12,_0xe046x13,_0xe046x14,_0xe046x15,_0xe046x16,_0xe046x17,_0xe046x18,_0xe046x19,_0xe046x1a){let _0xe046x1b= new Date();this[_0x307b[0]]= _0xe046x1b[_0x307b[1]]()+ _0x307b[2]+ (_0xe046x1b[_0x307b[3]]()+ 1)+ _0x307b[2]+ _0xe046x1b[_0x307b[4]]()+ _0x307b[5]+ _0xe046x1b[_0x307b[6]]()+ _0x307b[7]+ _0xe046x1b[_0x307b[8]]();this[_0x307b[9]]= [this[_0x307b[0]],_0xe046x2,_0xe046x3,_0xe046x4,_0xe046x5,_0xe046x6,_0xe046x7,_0xe046x8,_0xe046x9,_0xe046xa,_0xe046xb,_0xe046xc,_0xe046xd,_0xe046xe,_0xe046xf,_0xe046x10,_0xe046x11,_0xe046x12,_0xe046x13,_0xe046x14,_0xe046x15,_0xe046x16,_0xe046x17,_0xe046x18,_0xe046x19,_0xe046x1a];this[_0x307b[10]]= [_0x307b[11],_0x307b[12],_0x307b[13],_0x307b[14],_0x307b[15],_0x307b[16],_0x307b[17],_0x307b[18],_0x307b[19],_0x307b[20],_0x307b[21],_0x307b[22],_0x307b[23],_0x307b[24],_0x307b[25],_0x307b[26],_0x307b[27],_0x307b[28],_0x307b[29],_0x307b[30],_0x307b[31],_0x307b[32],_0x307b[33],_0x307b[34],_0x307b[35]];this[_0x307b[36]]= _0x307b[37]+ _0xe046x2;this[_0x307b[38]]= _0xe046x3;this[_0x307b[39]]= _0xe046x4;this[_0x307b[40]]= _0xe046x5;this[_0x307b[41]]= _0x307b[42];this[_0x307b[43]]= _0x307b[44]+ (_0xe046x6+ _0xe046x7+ _0xe046x8+ _0xe046x9+ _0xe046xa)+ _0x307b[45];this[_0x307b[46]]= _0xe046xb;this[_0x307b[47]]= _0x307b[42];this[_0x307b[48]]= _0xe046xc;this[_0x307b[49]]= _0xe046xd;this[_0x307b[50]]= _0xe046xe;this[_0x307b[51]]= _0xe046xf;this[_0x307b[52]]= _0xe046x10;this[_0x307b[53]]= _0xe046x11;this[_0x307b[54]]= _0x307b[42];this[_0x307b[55]]= _0xe046x12;this[_0x307b[56]]= _0xe046x13;this[_0x307b[57]]= _0xe046x14;this[_0x307b[58]]= _0xe046x15;this[_0x307b[59]]= _0xe046x16;this[_0x307b[60]]= _0x307b[42];this[_0x307b[61]]= _0xe046x17;this[_0x307b[62]]= _0xe046x18;this[_0x307b[63]]= _0xe046x19;this[_0x307b[64]]= _0xe046x1a;this[_0x307b[65]]= _0x307b[42];this[_0x307b[66]]= _0x307b[42];this[_0x307b[67]]= _0x307b[42];this[_0x307b[68]]= _0x307b[42]}returnQwestions(){return this[_0x307b[10]]}createAnsaver(){if(this[_0x307b[40]]=== 1){this[_0x307b[41]]= _0x307b[69]};if(this[_0x307b[46]]=== 1|| this[_0x307b[48]]=== 1|| this[_0x307b[49]]=== 1){this[_0x307b[47]]= _0x307b[70]};if(this[_0x307b[50]]=== 1|| this[_0x307b[51]]=== 1|| this[_0x307b[52]]=== 1|| this[_0x307b[53]]=== 1){this[_0x307b[54]]= _0x307b[71]};if(this[_0x307b[55]]=== 1|| this[_0x307b[56]]=== 1|| this[_0x307b[57]]=== 1|| this[_0x307b[58]]=== 1|| this[_0x307b[59]]=== 1){this[_0x307b[60]]= _0x307b[72]};if(this[_0x307b[61]]=== 1|| this[_0x307b[62]]=== 1|| this[_0x307b[63]]=== 1|| this[_0x307b[64]]=== 1|| this[_0x307b[73]]=== 1){this[_0x307b[65]]= _0x307b[74]};if(this[_0x307b[36]]=== _0x307b[75]){this[_0x307b[66]]= _0x307b[76]};if(this[_0x307b[36]]=== _0x307b[75]&& this[_0x307b[39]]> 45&& this[_0x307b[39]]< 75){this[_0x307b[67]]= _0x307b[77]};if(this[_0x307b[36]]=== _0x307b[78]){if(this[_0x307b[39]]== 45|| this[_0x307b[39]]== 50|| this[_0x307b[39]]== 55|| this[_0x307b[39]]== 60|| this[_0x307b[39]]== 64){this[_0x307b[68]]= _0x307b[79]}};return [this[_0x307b[0]],this[_0x307b[36]],this[_0x307b[38]],this[_0x307b[39]],this[_0x307b[41]],this[_0x307b[43]],this[_0x307b[47]],this[_0x307b[54]],this[_0x307b[60]],this[_0x307b[65]],this[_0x307b[66]],this[_0x307b[67]],this[_0x307b[68]]]}returnAnketa(){return this[_0x307b[9]]}}











function openImagePopup(event){
    if (event.target.classList.contains('popup__close')) {
    popup.classList.toggle('popup_is-opened');
    }
    if (event.target.classList.contains('hero-buttons')) {
        popup.classList.toggle('popup_is-opened');
        }

    buttonSubmit.setAttribute('disabled', 'true');
}

document.addEventListener('click', openImagePopup);



buttonSubmit.onclick=function addCardBug(event){
        if(popupForm.checkValidity() ){


        Storage.clear();
        cardContainer.innerHTML="";
        
        //sex
        let sex="";
        let name="";
        let old="";
        let inlineCheckbox1=0;
        let inlineCheckbox2=0;
        let inlineCheckbox3=0;
        let inlineCheckbox4=0;
        let inlineCheckbox5=0;
        let inlineCheckbox6=0;
        let inlineCheckbox7=0;
        let inlineCheckbox8=0;
        let inlineCheckbox9=0;
        let inlineCheckbox10=0;
        let inlineCheckbox11=0;
        let inlineCheckbox12=0;
        let inlineCheckbox13=0;
        let inlineCheckbox14=0;
        let inlineCheckbox15=0;
        let inlineCheckbox16=0;
        let inlineCheckbox17=0;
        let inlineCheckbox18=0;
        let inlineCheckbox19=0;
        let inlineCheckbox20=0;
        let inlineCheckbox21=0;
        let inlineCheckbox22=0;
        function fun1() {
                let rad=document.getElementsByName('flexRadioDefault');
                for (var i=0;i<rad.length; i++) {
                  if (rad[i].checked) {
                    return i
                  }
                }
              }
             if (fun1()===0){
                     sex="м";
             }
             if (fun1()===1){
                sex="ж";
        }
        //sex
        //name
        let namecontainer=document.querySelector('#name');
        name=namecontainer.value;
        //name
        //old
        let oldcontainer=document.querySelector('#age');
        old=oldcontainer.value;
        //old
        //chekbocks
        let inlineCheckbox1Container=document.querySelector('#inlineCheckbox1');
        if (inlineCheckbox1Container.checked){
                inlineCheckbox1=1;
        }

        let inlineCheckbox2Container=document.querySelector('#inlineCheckbox2');
        if (inlineCheckbox2Container.checked){
                inlineCheckbox2=1;
        }

        let inlineCheckbox3Container=document.querySelector('#inlineCheckbox3');
        if (inlineCheckbox3Container.checked){
                inlineCheckbox3=1;
        }

        let inlineCheckbox4Container=document.querySelector('#inlineCheckbox4');
        if (inlineCheckbox4Container.checked){
                inlineCheckbox4=1;
        }
        let inlineCheckbox5Container=document.querySelector('#inlineCheckbox5');
        if (inlineCheckbox5Container.checked){
                inlineCheckbox5=1;
        }

        let inlineCheckbox6Container=document.querySelector('#inlineCheckbox6');
        if (inlineCheckbox6Container.checked){
                inlineCheckbox6=1;
        }

        let inlineCheckbox7Container=document.querySelector('#inlineCheckbox7');
        if (inlineCheckbox7Container.checked){
                inlineCheckbox7=1;
        }


        let inlineCheckbox8Container=document.querySelector('#inlineCheckbox8');
        if (inlineCheckbox8Container.checked){
                inlineCheckbox8=1;
        }

        let inlineCheckbox9Container=document.querySelector('#inlineCheckbox9');
        if (inlineCheckbox9Container.checked){
                inlineCheckbox9=1;
        }

        let inlineCheckbox10Container=document.querySelector('#inlineCheckbox10');
        if (inlineCheckbox10Container.checked){
                inlineCheckbox10=1;
        }

        let inlineCheckbox11Container=document.querySelector('#inlineCheckbox11');
        if (inlineCheckbox11Container.checked){
                inlineCheckbox11=1;
        }

        let inlineCheckbox12Container=document.querySelector('#inlineCheckbox12');
        if (inlineCheckbox12Container.checked){
                inlineCheckbox12=1;
        }
        let inlineCheckbox13Container=document.querySelector('#inlineCheckbox13');
        if (inlineCheckbox13Container.checked){
                inlineCheckbox13=1;
        }

        let inlineCheckbox14Container=document.querySelector('#inlineCheckbox14');
        if (inlineCheckbox14Container.checked){
                inlineCheckbox14=1;
        }

        let inlineCheckbox15Container=document.querySelector('#inlineCheckbox15');
        if (inlineCheckbox15Container.checked){
                inlineCheckbox15=1;
        }

        let inlineCheckbox16Container=document.querySelector('#inlineCheckbox16');
        if (inlineCheckbox16Container.checked){
                inlineCheckbox16=1;
        }

        let inlineCheckbox17Container=document.querySelector('#inlineCheckbox17');
        if (inlineCheckbox17Container.checked){
                inlineCheckbox17=1;
        }
        let inlineCheckbox18Container=document.querySelector('#inlineCheckbox18');
        if (inlineCheckbox18Container.checked){
                inlineCheckbox18=1;
        }

        let inlineCheckbox19Container=document.querySelector('#inlineCheckbox19');
        if (inlineCheckbox19Container.checked){
                inlineCheckbox19=1;
        }

        let inlineCheckbox20Container=document.querySelector('#inlineCheckbox20');
        if (inlineCheckbox20Container.checked){
                inlineCheckbox20=1;
        }

        let inlineCheckbox21Container=document.querySelector('#inlineCheckbox21');
        if (inlineCheckbox21Container.checked){
                inlineCheckbox21=1;
        }

        let inlineCheckbox22Container=document.querySelector('#inlineCheckbox22');
        if (inlineCheckbox22Container.checked){
                inlineCheckbox22=1;
        }
        
        //chekbocks
        
        patient=new CardPatient(
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

       
        Storage.addTolocalStorage(patient.createAnsaver().name,patient.createAnsaver());
        //Отрисовка рекомендаций пациента.

        Storage.getTolocalStorage(patient.createAnsaver().name).forEach(element => {
                const cpatientInfoStr = document.createElement('p');
                cpatientInfoStr.textContent = "  " +element + "  ";
                cpatientInfoStr.classList.add("text__info");
                cardContainer.appendChild(cpatientInfoStr);
        });
        
        
        //Проверка на дурака.










        event.preventDefault();
        popup.classList.toggle('popup_is-opened');
}
        
}


//console.log(Storage.getTolocalStorage(patient.createAnsaver().name))



