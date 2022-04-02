import React from "react";
import { useCars } from "../Layout";
import Card from "./Card";

const Cars = () => {
  const { cars } = useCars();
  return (
    <div id="cars">
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
