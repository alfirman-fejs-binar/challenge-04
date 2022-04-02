// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Detail from "./Detail";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    const getDetail = () => {
      fetch("https://rent-cars-api.herokuapp.com/customer/car/" + id)
        .then((response) => response.json())
        .then((result) => setCar(result))
        .catch((error) => console.log("error get detail", error));
    };
    getDetail();
  }, [id]);

  return (
    <div id="car-detail">
      <Detail />
      <div>
        <Card car={car} />
      </div>
    </div>
  );
};

export default CarDetail;
