export class WeatherDataProcessor {
    #cityGeocodes
    constructor() {
        this.#cityGeocodes = [{city:"Rehovot", latitude:31.046, longitude:34.851},
         {city:"Haifa", latitude:32.818, longitude:34.989}, {city: "Jerusalem", latitude:31.772, longitude: 35.217},
        {city:"Tel-Aviv", latitude:32.109, longitude:34.855}, {city: "Eilat", latitude:29.558, longitude:34.948}] //todo fill this array from Internet
    }
        getData(requestObject) {
            //{city, dateFrom, dateTo, hoursFrom, hoursTo}
            const url = this.getUrl(requestObject);
            const promiseResponse = fetch(url);
            return this.processData(promiseResponse.then(response => response.json()));
    
        }
        getUrl(requestObject) {
            //TODO creates URL for request and returns it
        }
        processData(promiseData) {
            return promiseData(data => {
                //TODO
               // return {city, objects: [{date,hour,temperature},...]}
            })
        }
    }