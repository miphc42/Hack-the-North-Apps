import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import useDidMountEffect from "./useDidMountEffect";
import profile_pic from "../images/pf.jpg";
import "./Page.css";
function Page(props) {
  const { id } = useParams();
  let event_id = Number(id);
  const [event, setEvent] = useState([]);
  const [st, setSt] = useState(0);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [relatedEventNames, setRelatedEventNames] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(async () => {
    setEvent([]);
    setRelatedEvents([]);
    setRelatedEventNames([]);
    fetch(`https://api.hackthenorth.com/v3/events/${event_id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
        setRelatedEvents(data.related_events);
        if (data.speakers[0].profile_pic) {
          setImageUrl(data.speakers[0].profile_pic);
        } else {
          setImageUrl(profile_pic);
        }

        data.related_events.forEach((id) => {
          fetch(`https://api.hackthenorth.com/v3/events/${id}`)
            .then((res) => res.json())
            .then((d) => {
              setRelatedEventNames((relatedEventNames) => [
                ...relatedEventNames,
                d.name,
              ]);
            });
        });
      });
  }, [st]);
  return (
    <>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <img className="profile-pic" src={imageUrl} alt="" />
      {relatedEvents.map((id, idx) => {
        let to_page = `/events/${id}`;
        return (
          <Link key={id} className="link" to={{ pathname: to_page }} target="">
            <Button
              variant="outline-success"
              onClick={() => {
                setSt(st + 1);
              }}
            >
              <div className="">{relatedEventNames[idx]}</div>
            </Button>
          </Link>
        );
      })}
    </>
  );
}

export default Page;
