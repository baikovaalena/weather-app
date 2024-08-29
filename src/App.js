import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import WeatherWeek from './components/Weather/WeatherWeek/WeatherWeek'
import Favorite from "./components/Favorits/Favorite";

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
    path: "/favorite",
    element:
      <>
        <Header />
        <Favorite/>
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
