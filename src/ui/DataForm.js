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
    addSubmitHandler(processFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const request = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(request)
            processFun(request);
        })
    }
    onChangeDateFrom() {
        this.#dateFromElement.addEventListener('change', (event) => {
            const value = event.target.value;
            console.log('onChangeDateFrom', value, this.#dateTo);
            if(this.#dateTo && value > this.#dateTo) {
                showErrorMessage(event.target, 'error Date From', this.#errorMessageElement);
                console.log('Value Date From must be less than value Date To', value, this.#dateTo);
            } else {
                this.#dateFrom = value;
            }
        })
    }  
    onChangeDateTo() {
        this.#dateToElement.addEventListener('change', (event) => {
            const value = event.target.value;
            console.log('onChangeDateTo', value, this.#dateFrom);
            if(this.#dateFrom && value < this.#dateFrom) {
                showErrorMessage(event.target, 'error Date To', this.#errorMessageElement);
                console.log('Value Date To must be greater than value Date From', this.#dateTo, value);
            } else {
                this.#dateTo = value;
            }
        })
    }
    onChangeHourFrom() {
        this.#hourFromElement.addEventListener('change', (event) => {
            const value = +event.target.value;
            if(this.#hourTo && value > this.#hourTo) {
                showErrorMessage(event.target, 'error Hour From', this.#errorMessageElement);
                console.log('Value Hour From must be less than value Hour To', value, this.#hourTo);
            } else {
                this.#hourFrom = value;
            }
        })
    }
    onChangeHourTo() {
        this.#hourToElement.addEventListener('change', (event) => {
            const value = +event.target.value;
            if(this.#hourFrom && value < this.#hourFrom) {
                showErrorMessage(event.target, 'error Hour To', this.#errorMessageElement);
                console.log('Value Hour To must be greater than value Hour From', this.#hourFrom, value);
            } else {
                this.#hourTo = value;
            }
        })
    }

}