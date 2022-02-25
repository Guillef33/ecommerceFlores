import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import Store from "../../assets/images/store-home.jpg";
import Header from "../../assets/images/header-home.jpg";

import "./Carousel.css";
import { FaDivide } from "react-icons/fa";

      import { Link } from "react-router-dom";

function CarouselNative(props) {
  var items = [
    {
      name: "Juegos de Mesa",
      description: "En estas vacaciones divertite en familia",
      image: Store,
      url: "mesa",
    },
    {
      name: "Juegos de a dos para jugar con tu pareja   ",
      description: "Los mejores desafios para competir con tus amigos",
      image: Header,
      url: "dos",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      className="banner-home"
      style={{
        // backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
        height: "400px",
        backgroundColor: "red",
      }}
    >
      {/* <FaDivide> */}
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

            <Link to={`/category/${props.item.url}`}>
        <Button variant="contained" className="CheckButton">
          Conoce todos los productos
        </Button>
      </Link>
    </Paper>
  );
}

export default CarouselNative;
