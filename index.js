import { myConfig, myKey } from './myConfig.js';
let val = myKey(); 

// rest API to Use:
/* 

https://api.maas2.apollorion.com/

{
  "status": 200,
  "id": 3251,
  "terrestrial_date": "2022-03-24T00:00:00.000Z",
  "ls": 195,
  "season": "Month 7",
  "min_temp": -68,
  "max_temp": -5,
  "pressure": 760,
  "pressure_string": "Higher",
  "abs_humidity": null,
  "wind_speed": null,
  "atmo_opacity": "Sunny",
  "sunrise": "05:18",
  "sunset": "17:22",
  "local_uv_irradiance_index": "Moderate",
  "min_gts_temp": -66,
  "max_gts_temp": 5,
  "wind_direction": null,
  "sol": 3423,
  "unitOfMeasure": "Celsius",
  "TZ_Data": "America/Port_of_Spain"
}

*/

