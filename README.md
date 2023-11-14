# Weather App

This is a simple Weather App that allows you to check the current weather conditions for a specific location. It uses the WeatherAPI to retrieve weather data. You can enter the location, and the app will provide and display the current weather conditions, including temperature, weather description, wind speed, and humidity.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Screenshot](#screenshot)

## Features
- Display current weather conditions.
- Retrieve weather data using the WeatherAPI.
- Supports searching for weather information for any location.

## Installation
To use the Weather App locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/GeorgeStampou/Weather-app.git

2. Open the project directory:
   
   ```bash
   cd Weather-App-main
3. Open the index.html file in your web browser.

## Usage

To use the Weather App, follow these steps:

1. Open the `index.html` file in your web browser.

2. Enter the location for which you want to check the weather in the input field.

3. Click the search button (magnifier icon) or press Enter after entering the location.

4. The app will retrieve and display the current weather information for the specified location.

5. If there is an error or the location is not found, an error message will be displayed.

## API Key

This Weather App uses the WeatherAPI (https://www.weatherapi.com) to fetch weather data. You will need to obtain an API key from WeatherAPI to use this app. Sign up and copy the API Key. Replace the `APIKey` variable in the `script.js` file (line 13) with your own API key.

```javascript
 const APIKey = "YOUR_API_KEY_HERE";
```
## Screenshot
![image](https://github.com/GeorgeStampou/Weather-app/assets/58564542/985a91d1-ed48-4a80-93fc-1f95150b2c4b)
