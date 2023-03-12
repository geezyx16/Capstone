import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender();
  router.updatePageLinks();
}

function afterRender() {
  //add menu toggle to bars in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

const params = {
  access_key: "2b606b21039b6b3aac5d9a712fbb2b13"
  // symbol: "TSLA",
  // interval: 1min
};

// router.hooks({
//   before: (done, params) => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home"; // Add a switch case statement to handle multiple routes
//     // Add a switch case statement to handle multiple routes
//     switch (view) {
//       case "Home":
//         axios
//           .get(
//             // Replace the key provided here with your own key from openweathermap
//             `"https://api.marketstack.com/v1/tickers/tsla/eod", { params }`
//           )
//           .then(response => {
//             console.log(response.data);

//             // Save Data into state
//             store.Home.stockData = {};
//             store.Home.stockData.dataOne = response.data.symbol;
//             store.Home.weather.temp = kelvinToFahrenheit(
//               response.data.main.temp
//             );
//             store.Home.weather.feelsLike = kelvinToFahrenheit(
//               response.data.main.feels_like
//             );
//             store.Home.weather.description =
//               response.data.weather[0].description;
//             console.log(store.Home.weather);

//             done();
//           });
//         break;
//       // New Case for Pizza View
//       case "Pizza":
//         // New Axios get request utilizing already made environment variable
//         axios
//           .get(`${process.env.PIZZA_PLACE_API_URL}`)
//           .then(response => {
//             // Storing retrieved data in state
//             store.Pizza.pizzas = response.data;
//             done();
//           })
//           .catch(error => {
//             console.log("It puked", error);
//             done();
//           });
//         break;
//       default:
//         done();
//     }
//   },
//   already: params => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home";

//     render(store[view]);
//   }
// });

axios
  .get("https://api.marketstack.com/v1/tickers", {
    params
  })
  .then(response => {
    const apiResponse = response.data.data;
    console.log(apiResponse);
    const newData = response.data.data[3].filter(stockID => stockID.name);

    // console.log(newData)

    // const stockName = response.data.data[3].name;
    // console.log(stockName);

    const newList = [];

    for (let i = 0; i < apiResponse.length; i++) {
      newList.push({
        name: apiResponse[i].name
        // precipitation: list[i].pop,
        // descriptions: list[i].weather[0].description,
        // speeds: list[i].speed,
        // icons: list[i].weather[0].icon
      });
    }
  })
  .catch(error => {
    console.log(error);
  });

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
