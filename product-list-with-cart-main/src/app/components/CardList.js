import React from "react";
import { CardMenu } from "../constants/config";
import Card from "./Card";
import OrderButton from "./OrderButton";

export default function CardList() {
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-2">
      {CardMenu.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    
    </div>
  );
}
