export class DataForm {
    //TODO
    #formElement
    #dateFromElement
    #dateToElement
    #hoursFromElement
    #hoursToElement
    #errorMessageElem
    //......
    constructor (params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#dateFromInputElement = document.getElementById(params.idDateFromInput);
    }   this.#dateToInputElement = document.getElementById(params.idDateToInput);
    addHandler(processFun) {
        //TODO
    }
}