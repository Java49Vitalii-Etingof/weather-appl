import {showErrorMessage } from "./ErrorMessage.js"
export class DataForm {
    #formElement;
    #cityElement;
    #dateFromElement;
    #dateToElement;
    #hourFromElement;
    #hourToElement;
    #errorMessageElement;
    #dateFrom;
    #dateTo;
    #hourFrom;
    #hourTo;

    //......
    constructor (params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#dateFromInputElement = document.getElementById(params.idDateFromInput);
        this.#dateToInputElement = document.getElementById(params.idDateToInput);
        this.#hourFromElement = document.getElementById(params.idHourFrom);
        this.#hourToElement = document.getElementById(params.idHourTo);
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);
        this.onChangeDateFrom();
        this.onChangeDateTo();
        this.onChangeHourFrom();
        this.onChangeHourTo();
    }   
    addHandler(processFun) {
        //TODO
    }
}