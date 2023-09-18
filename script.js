const btn = document.querySelector("button");
const containerInfo = document.querySelector(".container-info");
const input = document.querySelector("input");
const weatherimg = document.querySelector("img");
const tempC = document.querySelector(".temp");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind-speed");
const hum = document.querySelector(".hum");
const containerError = document.querySelector(".container-error");
const errorMessage = document.querySelector(".error-message");


const APIKey = "79b221dd0def4426838194006231609";




btn.addEventListener("click", onClick);

function onClick(){
    if(containerError.classList.contains("container-error-active")){
        containerError.classList.remove("container-error-active");
    }
    if(input.reportValidity()){
        containerInfo.classList.add("container-info-active");
        const cityToSearch = input.value;
        fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${cityToSearch}`)
            .then(res=>{
                /*console.log(res.status);*/
                if(res.ok){
                    return res.json();
                }else{
                    return res.json();
                }
                /* handle errors with res.status.  */
            })
            .then(data=>{
                console.log(data);
                if( data.error != undefined && "code" in data.error && "message" in data.error){
                    containerInfo.classList.remove("container-info-active");
                    containerError.classList.add("container-error-active");
                    errorMessage.innerHTML = data.error.message;
                }else{
                    weatherimg.src = data.current.condition.icon;
                    weatherimg.alt = data.current.condition.text;
                    tempC.innerHTML = Math.round(data.current.temp_c) + "°C";
                    city.innerHTML = data.location.name;
                    wind.innerHTML = data.current.wind_kph + "km/h";
                    hum.innerHTML = data.current.humidity + "%";
                }
                
            })
            .catch(error=>{
                if(error instanceof TypeError && error.message.includes("API key")){
                    console.log("Invalid API key: ", error);
                }else{
                    console.error("Problem with fetch operation: ", error);
                }
            })
            
    }
    else return;
}