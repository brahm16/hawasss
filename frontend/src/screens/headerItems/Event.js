import React from "react";
import { Link } from "react-router-dom";

const Event = ({ name, places, description, id }) => {
  const style = {
    backgroundImage: "url(img/prevnap2.jpg)",
  };

  return (
    <div class="slide_item">
      <Link className="slide_item_img" to={`/event/${id}`}>
        <div class="sq_parent">
          <div class="sq_wrap">
            <div class="sq_content" style={style}></div>
          </div>
        </div>
      </Link>
      <Link className="slide_item_content" to={`/events/${id}`}>
        <div class="flag">
          <img src="img/egypt-3.svg" alt="" />
        </div>
      </Link>
      <div className="slide_footer" to={`/events/${id}`}>
        <div class="hours">{places}</div>
        <div class="tours_link">
          <a href="tour-list.html">Reservation</a>
        </div>
      </div>
    </div>
  );
};
export default Event;
