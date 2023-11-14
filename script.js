const btn = document.querySelector('button');
const containerInfo = document.querySelector('.container-info');
const input = document.querySelector('input');
const weatherimg = document.querySelector('.weather-img');
const tempC = document.querySelector('.temp');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind-speed');
const hum = document.querySelector('.hum');
const containerError = document.querySelector('.container-error');
const errorMessage = document.querySelector('.error-message');
const description = document.querySelector('.description');

const APIKey = config.apiKey;

btn.addEventListener('click', onClick);
input.addEventListener('keypress', onClick);

function onClick(event) {
  if (
    input.reportValidity() &&
    (event.keyCode === 13 || event.type === 'click')
  ) {
    const cityToSearch = input.value;
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${cityToSearch}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error != undefined) {
          errorMessage.innerHTML = data.error.message;
          containerInfo.classList.remove('container-info-active');
          containerError.classList.add('container-error-active');
          containerError.classList.add('show-up');
        } else {
          console.log(data);
          weatherimg.src = `http:${data.current.condition.icon}`;
          weatherimg.alt = data.current.condition.text;
          tempC.innerHTML = `${Math.round(data.current.temp_c)}°C`;
          description.innerHTML = data.current.condition.text;
          city.innerHTML = data.location.name;
          wind.innerHTML = data.current.wind_kph + 'km/h';
          hum.innerHTML = data.current.humidity + '%';
          containerError.classList.remove('container-error-active');
          containerInfo.classList.add('container-info-active');
          containerInfo.classList.add('show-up');
        }
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message.includes('API key')) {
          console.log('Invalid API key: ', error);
        } else {
          console.error('Problem with fetch operation: ', error);
        }
      });
  } else return;
}
