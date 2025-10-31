import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
import TravelList from "./components/TravelList";
import { useState } from "react";
import TravelFavourites from "./components/TravelFavourites";

function App() {
  
  const [travelList, setTravelList] = useState(travelPlansData);
  const [favourites, setFavourites] = useState([]);
  
  const handleDelete = (id) => {
    const filteredTravelList = travelList.filter(t => t.id !== id );
    setTravelList(filteredTravelList);
  }

  const handleFavourites = (id) => {
    console.log()
    if ( favourites.find( t => id === t.id ) === undefined ) {
      setFavourites([...favourites, travelList.find(t => t.id === id)]);
    }
  }

  const handleDeleteFavourite = (id) => {
    setFavourites(favourites.filter(t => t.id !== id));
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>

      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <div className="content-main">
        <div>
          <TravelList list={travelList} onDelete={handleDelete} onAddFavourites={handleFavourites} />
        </div>
        <div className="content-main--favourites">
          <TravelFavourites list={favourites} onDelete={handleDeleteFavourite} />
        </div>
      </div>
    </>
  );
}

export default App;
