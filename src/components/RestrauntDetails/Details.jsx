// import React, { useState } from "react";
import { useParams } from "react-router";
import Dish from "./Dish";

export default function Details({ data, addToCart }) {
  const { id } = useParams();

  const restaurant = data.find(
    ( r ) => r._id === String(id)
  );
  console.log(data)
  console.log(`id=${id}`);
  return (
    <>
      <div className="col" style={{ marginTop: "5rem" }}>
        <h3 className="text-center">{restaurant.restaurantName}</h3>
        <p>Location: {restaurant.location}</p>
        <p>Rating: {restaurant.rating}</p>
        <p>
          Cuisines :{" "}
          {restaurant.cuisine.map((item) => (
            <span>{item};</span>
          ))}
        </p>
        <h4>Order</h4>
        <div className="dishes">
          {restaurant.menus.map((dish) => {
            console.log(dish)
            return <Dish dish={dish} key={dish.dishID} addToCart={addToCart} />
          })}
        </div>
      </div>
    </>
  );
}
