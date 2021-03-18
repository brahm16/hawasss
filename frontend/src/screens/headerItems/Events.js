import React, { Component } from "react";
import { EVENTS } from "../../shared/events";
import Header from "../Item/Header";
import Search from "../Item/Search";
import Event from './Event'

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: EVENTS,
    };
  }
  render() {
    const style={
        backgroundImage:"url(img/prevnap2.jpg)"
    }
    const all = this.state.events.map((event) => {
       
      return (
        <Event id={event.id} name={event.eventName} description={event.description} places={event.places} />
      );
    });
    return (
      <>
                <Header/>

   
        <div
          class="image_bg--destinations"
          style={style}
        ></div>
        <div class="page_content destinations-page">
          <div class="wrap">
            <div class="wrap_float">
              <div class="section-title">Events</div>
              <Search />

              <div class="main">
                <div class="popular_destination__slider">

                    {all}
    
        
          
                </div>
                <div class="pagination">
                  <ul>
                    <li class="prev">
                      <a href="#"></a>
                    </li>
                    <li class="current">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li class="next">
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
