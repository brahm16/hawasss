import React, { Component } from "react";
import { CIRCUITS } from "../../shared/circuits";
import Circuit from "./Circuit";

export default class Circuits extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cicuits: CIRCUITS,
        };
      }
  render() {
   
    const style2 = {
      backgroundImage: "url('img/zagh/0.jpg')",
    };
    const all = this.state.cicuits.map((c) => {
       
        return (
          <Circuit name={c.name}  />
        );
      });
    return (
      <>
                      <Header/>

        <div class="page_head" style={style2}>
          <div class="top_destination">
            <div class="section_content popular_destination__content">
              <div class="wrap">
                <div class="wrap_float">
                  {all}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page_content">
          <div class="wrap">
            <div class="wrap_float">
              <div class="main">
                <div class="most_popular__section">
                  <a href="single.html" class="slider_item" style={style2}>
                    <div class="slider_item__content">
                      <div class="rating">
                        <div class="stars">
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star"></div>
                        </div>
                        <div class="reviews_count">(2 Reviews)</div>
                      </div>
                      <h3 class="title">Seychelles | from $300</h3>
                      <p class="description">
                        6 excursions to the main cities of the country, admire
                        the beautiful autumn gardens
                      </p>
                      <div class="days">
                        <span>7 days</span>
                      </div>
                    </div>
                  </a>

                  <a href="single.html" class="slider_item" style={style2}>
                    <div class="slider_item__content">
                      <div class="rating">
                        <div class="stars">
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star"></div>
                        </div>
                        <div class="reviews_count">(2 Reviews)</div>
                      </div>
                      <h3 class="title">Autumn in Japan | $3,500</h3>
                      <p class="description">
                        6 excursions to the main cities of the country, admire
                        the beautiful autumn gardens
                      </p>
                      <div class="days">
                        <span>7 days</span>
                      </div>
                    </div>
                  </a>

                  <a href="single.html" class="slider_item" style={style2}>
                    <div class="slider_item__content">
                      <div class="rating">
                        <div class="stars">
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star"></div>
                        </div>
                        <div class="reviews_count">(2 Reviews)</div>
                      </div>
                      <h3 class="title">
                        A tour of the Islands | $3,500 $3,880
                      </h3>
                      <p class="description">
                        6 excursions to the main cities of the country, admire
                        the beautiful autumn gardens
                      </p>
                      <div class="days">
                        <span>7 days</span>
                      </div>
                    </div>
                  </a>
                  <a href="single.html" class="slider_item" style={style2}>
                    <div class="slider_item__content">
                      <div class="rating">
                        <div class="stars">
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star active"></div>
                          <div class="star"></div>
                        </div>
                        <div class="reviews_count">(2 Reviews)</div>
                      </div>
                      <h3 class="title">Paris | $3,500</h3>
                      <p class="description">
                        6 excursions to the main cities of the country, admire
                        the beautiful autumn gardens
                      </p>
                      <div class="days">
                        <span>7 days</span>
                      </div>
                    </div>
                  </a>
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
              <div class="sidebar">
                <div class="latest_tours">
                  <div class="block-title">Latest Tours</div>
                  <div class="list">
                    <a href="single.html" class="_item">
                      <div class="left">
                        <div class="img" style={style2}></div>
                      </div>
                      <div class="right">
                        <div class="_title">A tour of the Islands</div>
                        <div class="cost">
                          <b>$3,500</b>
                          <span class="old_cost">$3,880</span>
                        </div>
                        <div class="time">7 days</div>
                      </div>
                    </a>

                    <a href="single.html" class="_item">
                      <div class="left">
                        <div class="img" style={style2}></div>
                        <div class="tag new">new</div>
                      </div>
                      <div class="right">
                        <div class="_title">America</div>
                        <div class="cost">
                          <b>$3,500</b>
                        </div>
                        <div class="time">7 days</div>
                      </div>
                    </a>

                    <a href="single.html" class="_item">
                      <div class="left">
                        <div class="img" style={style2}></div>
                      </div>
                      <div class="right">
                        <div class="_title">Seychelles</div>
                        <div class="cost">
                          <b>$3,500</b>
                          <span class="old_cost">$3,880</span>
                        </div>
                        <div class="time">7 days</div>
                      </div>
                    </a>

                    <a href="single.html" class="_item">
                      <div class="left">
                        <div class="img" style={style2}></div>
                        <div class="tag discount">20% off</div>
                      </div>
                      <div class="right">
                        <div class="_title">Autumn in Japan</div>
                        <div class="cost">
                          <b>$3,500</b>
                          <span class="old_cost">$3,880</span>
                        </div>
                        <div class="time">7 days</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="tour_category">
                  <div class="block-title">Tour Category</div>
                  <ul>
                    <li>
                      <a href="#">Outdoor Activites</a>
                    </li>
                    <li>
                      <a href="#">City Tours</a>
                    </li>
                    <li>
                      <a href="#">Cultural & Thematic Tours</a>
                    </li>
                    <li>
                      <a href="#">Indulgence & Luxury Tours</a>
                    </li>
                    <li>
                      <a href="#">Family Friendly Tours</a>
                    </li>
                    <li>
                      <a href="#">Holiday & Seasonal Tours</a>
                    </li>
                  </ul>
                </div>
                <div class="recent_articles">
                  <div class="block-title">Recent Articles</div>
                  <div class="list">
                    <a href="blog-single.html" class="_item">
                      <div class="img" style={style2}></div>
                      <div class="info">
                        <div class="_title">Pack wisely before traveling</div>
                        <div class="date">JUNE 6/2019</div>
                      </div>
                    </a>
                    <a href="blog-single.html" class="_item">
                      <div class="img" style={style2}></div>
                      <div class="info">
                        <div class="_title">Pack wisely before traveling</div>
                        <div class="date">JUNE 6/2019</div>
                      </div>
                    </a>
                    <a href="blog-single.html" class="_item">
                      <div class="img" style={style2}></div>
                      <div class="info">
                        <div class="_title">Pack wisely before traveling</div>
                        <div class="date">JUNE 6/2019</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="question-block">
                  <div class="_title">Get a Question?</div>
                  <div class="_text">
                    Do not hesitage to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </div>
                  <div class="tel">
                    <a href="#">+1 1235 6789 10</a>
                  </div>
                  <div class="email">
                    <a href="#">info@hellodigi.ru</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
