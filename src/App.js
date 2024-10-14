import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import WeatherWeek from './components/WeatherWeek/WeatherWeek'
import Favorites from "./components/Favorite/Favorites";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Header />
        <Weather />
      </>
  },
  {
    path: `/week/:cityName`,
    element:
      <>
        <Header />
        <WeatherWeek />
      </>
  },
  {
    path: "/favorites",
    element:
      <>
        <Header />
        <Favorites/>
      </>
  }
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
