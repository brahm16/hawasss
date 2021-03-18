import { NavLink, Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import React, { Component } from "react";

class MainLanding extends Component {
  render() {
    const { t } = this.props;

    const style = {
      backgroundImage: "url('img/zagh/IMG8.jpg')",
    };
    return (
      <div className="homepage_slider">
        <div className="slider-container">
          <div className="slider-control left inactive"></div>
          <div className="slider-control right"></div>
          <ul className="slider-pagi"></ul>
          <div className="slider">
            <div className="slide slide-0 active">
              <div className="slide__bg image-bg" style={style}></div>
              <div className="slide__content">
                <div className="slide__text">
                  <div className="slide__controls" style={{marginLeft:"50rem;"}}>
                  <a href="single.html">
                    </a>
                    <a href="single.html" className="btn">
                      {t("vbtn")}
                    </a>
                    <Link to="circuits" className="btn btn__choose_tour">
                      {t("cbtn")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide-1 ">
              <div
                className="slide__bg"
                style={{ backgroundImage: "`url(${ img/slide2.jpg})`" }}
              ></div>
              <div className="slide__content">
                <div className="slide__text">
                  <h2 className="slide__text-heading">Kyoto, Japan</h2>
                  <p className="slide__text-desc">
                    Etiam porta sem malesuada magna mollis
                  </p>
                  <div className="slide__controls">
                    <a href="single.html" className="btn">
                      Want a personal tour
                    </a>
                    <a href="tour-list.html" className="btn btn__choose_tour">
                      Choose tour
                    </a>
                    <a className="arrow next"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide-2">
              <div
                className="slide__bg"
                style={{ backgroundImage: "`url(${ img/slide3.jpg})`" }}
              ></div>
              <div className="slide__content">
                <div className="slide__text">
                  <h2 className="slide__text-heading">New Zealand</h2>
                  <p className="slide__text-desc">
                    Etiam porta sem malesuada magna mollis
                  </p>
                  <div className="slide__controls">
                    <a href="single.html" className="btn">
                      Want a personal tour
                    </a>
                    <a href="tour-list.html" className="btn btn__choose_tour">
                      Choose tour
                    </a>
                    <a className="arrow next"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide-3">
              <div
                className="slide__bg"
                style={{ backgroundImage: "`url(${ img/slide4.jpg})`" }}
              ></div>
              <div className="slide__content">
                <div className="slide__text">
                  <h2 className="slide__text-heading">The Great Outdoors</h2>
                  <p className="slide__text-desc">
                    Etiam porta sem malesuada magna mollis
                  </p>
                  <div className="slide__controls">
                    <a href="single.html" className="btn">
                      Want a personal tour
                    </a>
                    <a href="tour-list.html" className="btn btn__choose_tour">
                      Choose tour
                    </a>
                    <a className="arrow next"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="most_popular">
          <span>{t("place")}</span>
        </div>
        <div className="categories" id="header_categories">
          <div className="wrap">
            <div className="wrap_float">
              <div className="items">
                <div className="scroll">
                  <a href="single.html" className="categories_item"></a>
                  <a href="single.html" className="categories_item">
                    <div className="icon">
                      <div className="icon-wrap">
                        <img
                          src="img/nap1.jpg"
                          alt=""
                          className="image-cover"
                        />
                      </div>
                    </div>
                    <div className="_title">
                      <span>
                        <NavLink to="execursions">{t("excursions")}</NavLink>
                      </span>
                    </div>
                  </a>
                  <a className="categories_item">
                    <div className="icon">
                      <div className="icon-wrap">
                        <img
                          src="img/nap2.jpg"
                          alt=""
                          className="image-cover"
                        />
                      </div>
                    </div>
                    <div className="_title">
                      <span>
                        <NavLink to="events">{t("events")}</NavLink>
                      </span>
                    </div>
                  </a>
                  <a className="categories_item">
                    <div className="icon">
                      <div className="icon-wrap">
                        <img
                          src="img/nap3.jpg"
                          alt=""
                          className="image-cover"
                        />
                      </div>
                    </div>
                    <div className="_title">
                      <span>
                        <NavLink to="stores">{t("online")}</NavLink>
                      </span>
                    </div>
                  </a>
                  <a className="categories_item">
                    <div className="icon">
                      <div className="icon-wrap">
                        <img
                          src="img/nap4.jpg"
                          alt=""
                          className="image-cover"
                        />
                      </div>
                    </div>
                    <div className="_title">
                      <span>
                        <NavLink to="gastronomy">{t("gastro")}</NavLink>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(MainLanding);
