let weatherData, userInput;

const $city = $('#city');
const $temp = $('#temp');
const $feels = $('#feels');
const $weatherDescr = $('#weatherDescr');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=76ba8c095c64812543d52e97dcde331a`
    }).then(
        (data) => {
            console.log("Data Is", data);
            weatherData = data;
            render();

        },
        (error) => {
            console.log("Error is", error);
        }
    )
}

function render() {
    $city.html(weatherData.name);
    $temp.html(weatherData.main.temp).append(` C`);
    $feels.html(weatherData.main.feels_like).append(` C`);
    $weatherDescr.html(weatherData.weather[0].description);

}