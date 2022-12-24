import { DataForm } from "./ui/DataForm.js";
import { TemperaturesList } from "./ui/TemperaturesList.js";
import { WeatherDataProcessor } from "./data/WeatherDataProcessor.js";
const weatherProcessor = new WeatherDataProcessor();

const params = {idForm: "data_form", idDateFrom: "date_from", idDateTo: "date_to",
idHourFrom: "hour_from", idHourTo: "hour_to", idErrorMessage: "error_message",
citySelector: 'select[name="city"]', minMaxDates: getMinMaxDates (weatherProcessor.getPeriodInDays()),
 cities: weatherProcessor.getCities() };

const dataForm = new DataForm(params);

const temperatureList = new TemperaturesList("items-list", "city");
function getMinMaxDates(periodInDays) {
    const date = new Date();
    const start_date = date.toISOString().substring(0,10);
    const day = date.getDate();
    date.setDate(day + periodInDays);
    const end_date = date.toISOString().substring(0,10);
    return {minDate: start_date, maxDate: end_date};
} 
dataForm.addHandler(async (dataFromForm) => {
    console.log(dataFromForm);
     const data = await weatherProcessor.getData(dataFromForm);
    temperatureList.showTemperatures(data);  
})

