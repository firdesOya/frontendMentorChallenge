import React from "react";
import { CardMenu } from "../constants/config";
import Card from "./Card";


export default function CardList({addToCart}) {
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-7">
      {CardMenu.map((item) => (
        <Card key={item.id} item={item} addToCart={addToCart} />
      ))}
    
    </div>
  );
}
