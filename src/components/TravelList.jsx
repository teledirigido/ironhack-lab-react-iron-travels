import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList({ list, onDelete, onAddFavourites }) {

  return (
    <>
      {list.map( item => 
        <TravelPlanCard key={item.id} plan={item} onDelete={onDelete} onAddFavourites={onAddFavourites} /> 
      )}
    </>
  )
}