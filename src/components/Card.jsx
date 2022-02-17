import "./Card.css";
// import { Card, Button } from 'react-bootstrap';
import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  let url = "";
  if (props.data.id % 3 == 0) {
    url =
      "https://ionicframework.com/img/getting-started/ionic-native-card.png";
  } else if (props.data.id % 3 == 1) {
    url = "https://ionicframework.com/img/getting-started/components-card.png";
  } else {
    url = "https://ionicframework.com/img/getting-started/theming-card.png";
  }
  let to_page = `/events/${props.data.id}`;
  return (
    <Link className="link" to={{ pathname: to_page }} target="">
      <div
        class="card card-1"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <h3>{props.data.name}</h3>
        {/* <p>{props.data.description}</p> */}
      </div>
    </Link>
  );
}

export default Card;
