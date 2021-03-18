import React, { Component } from 'react'
import { EVENTS } from "../../shared/events";


export default class EventDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            event:EVENTS.indexOf(0),
        };
        console.log(this.state.place);
      }
      componentDidMount(){
          this.setState({
            event:EVENTS.filter((event)=>event.id==this.props.match.params.id)[0],
             
          })

      }
    render() {
        const style2 = {
            backgroundImage: "url('img/zagh/0.jpg')",
          };
        return (
            <>
                            <Header/>

            <div class="breadcrumbs">
    <div class="wrap">
        <div class="wrap_float">
            <a href="#">Home</a>
            <span class="separator">/</span>
            <a href="#" class="current">Date & Pricing</a>
        </div>
    </div>
</div>
<div class="image_bg--single" style={style2}></div>
<div class="page_content single-page tour-single dark">
    <div class="content-head">
        <div class="wrap">
            <div class="wrap_float">
                <div class="main">
                    <div class="section-top single-row">
                        <div class="single-left">
                            <div class="rating">
                               <div class="stars">
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star"></div>
                               </div>
                               <div class="reviews_count">
                                   (2 Reviews)
                               </div>
                            </div>
                            <div class="title">
                                America, San Francisco
                            </div>
                            <div class="geo">America, San Francisco</div>
                        </div>
                        <div class="single-right controls">
                            <div class="btn getModal" data-href="#book-now"><span>Book now</span></div>
                            <div class="slick-arrows tour-single-arrows">
                                <div class="arrow prev"></div>
                                <div class="arrow next"></div>
                            </div>
                        </div>
                    </div>
                    <div class="single-tour-slider" id="single-tour-slider">
                        <div class="single-tour-slide">
                            <img src="img/vput1.jpg" class="image-cover" alt="" />
                        </div>
                        <div class="single-tour-slide">
                            <img src="img/vput2.jpg" class="image-cover" alt=""/>
                        </div>
                        <div class="single-tour-slide">
                            <img src="img/vput3.jpg" class="image-cover" alt=""/>
                        </div>
                        <div class="single-tour-slide">
                            <img src="img/vput4.jpg" class="image-cover" alt="" />
                        </div>
                        <div class="single-tour-slide">
                            <img src="img/vput5.jpg" class="image-cover" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content-body">
        <div class="wrap">
            <div class="wrap_float">
                <div class="single-left">
                    <div class="description">
                        <p>
                           {this.state.event.description}
                       </p>
                    </div>
                    <div class="single-content page--content details">
                        <h2>Tour details</h2>
                        <p>
                            Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.
                        </p>
                        <p><b>On fresh air</b></p>
                        <div class="list-block">
                            <ul class="true">
                                <li>Picnic</li>
                                <li>Garden furniture</li>
                                <li>Beach (first line)</li>
                                <li>Sun terrace</li>
                                <li>Private beach area</li>
                                <li>Barbecue facilities</li>
                                <li>Terrace</li>
                                <li>Garden</li>
                            </ul>
                            <ul class="true">
                                <li>Picnic</li>
                                <li>Garden furniture</li>
                                <li>Beach (first line)</li>
                                <li>Sun terrace</li>
                                <li>Private beach area</li>
                                <li>Barbecue facilities</li>
                                <li>Terrace</li>
                                <li>Garden</li>
                            </ul>
                        </div>
                        <p><b>On fresh air</b></p>
                        <div class="list-block">
                            <ul class="true">
                                <li>Picnic</li>
                                <li>Garden furniture</li>
                                <li>Beach (first line)</li>
                                <li>Sun terrace</li>
                                <li>Private beach area</li>
                                <li>Barbecue facilities</li>
                                <li>Terrace</li>
                                <li>Garden</li>
                            </ul>
                            <ul class="false">
                                <li>Picnic</li>
                                <li>Garden furniture</li>
                                <li>Beach (first line)</li>
                                <li>Sun terrace</li>
                                <li>Private beach area</li>
                                <li>Barbecue facilities</li>
                                <li>Terrace</li>
                                <li>Garden</li>
                            </ul>
                        </div>
                        <div class="program">
                            <h2>Program</h2>
                            <div class="program-days">
                                <div class="day-item">
                                    <div class="day-head">
                                        <div class="day-icon">
                                            <img src="img/nap4.jpg" alt="" class="image-cover" />
                                        </div>
                                        <div class="day-num">Day 1</div>
                                        <div class="day-title">Transfer to hotel</div>
                                    </div>
                                    <div class="day-body">
                                        <div class="apartment-item">
                                            <div class="apartment-content">
                                                <p>
                                                    Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                                                </p>
                                            </div>
                                            <div class="apartment-images lightgallery">
                                                <a class="image-container" href="img/vput2.jpg">
                                                    <img src="img/vput2.jpg" class="image-cover" alt=""/>
                                                </a>
                                                <a class="image-container" href="img/vput5.jpg">
                                                    <img src="img/vput5.jpg" class="image-cover" alt=""/>
                                                </a>
                                                <a class="image-container" href="img/vput4.jpg">
                                                    <img src="img/vput4.jpg" class="image-cover" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="day-item">
                                    <div class="day-head">
                                        <div class="day-icon">
                                            <img src="img/vput2.jpg" alt="" class="image-cover" />
                                        </div>
                                        <div class="day-num">Day 2-4</div>
                                        <div class="day-title">Sightseeing tour</div>
                                    </div>
                                    <div class="day-body">
                                        <div class="apartment-item">
                                            <div class="apartment-content">
                                                <p>
                                                    Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                                                </p>
                                            </div>
                                            <div class="apartment-images lightgallery">
                                                <a class="image-container" href="img/vput2.jpg">
                                                    <img src="img/vput2.jpg" class="image-cover" alt=""/>
                                                </a>
                                                <a class="image-container" href="img/vput5.jpg">
                                                    <img src="img/vput5.jpg" class="image-cover" alt=""/>
                                                </a>
                                                <a class="image-container" href="img/vput4.jpg">
                                                    <img src="img/vput4.jpg" class="image-cover" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="day-item">
                                    <div class="day-head">
                                        <div class="day-icon">
                                            <img src="img/vput3.jpg" alt="" class="image-cover"/>
                                        </div>
                                        <div class="day-num">Day 5</div>
                                        <div class="day-title">Free time</div>
                                    </div>
                                    <div class="day-body">
                                        <div class="apartment-item">
                                            <div class="apartment-content">
                                                <p>
                                                    Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                                                </p>
                                            </div>
                                            <div class="apartment-images lightgallery">
                                                <a class="image-container" href="img/vput2.jpg">
                                                    <img src="img/vput2.jpg" class="image-cover" alt=""/>
                                                </a>
                                                <a class="image-container" href="img/vput5.jpg">
                                                    <img src="img/vput5.jpg" class="image-cover" alt=""/>
                                                </a>
                                                <a class="image-container" href="img/vput4.jpg">
                                                    <img src="img/vput4.jpg" class="image-cover" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="included">
                            <h2>Included</h2>
                            <div class="included-items">
                                <div class="included-item">
                                    <div class="included_title">Flight by plane</div>
                                    <div class="included_text">Flight and transfer to the hotel</div>
                                </div>
                                <div class="included-item">
                                    <div class="included_title">Wi-fi</div>
                                    <div class="included_text">Free wi-fi in the reception, wi-fi in public areas</div>
                                </div>
                                <div class="included-item">
                                    <div class="included_title">Smorgasbord</div>
                                    <div class="included_text">But I must explain to you how all</div>
                                </div>
                                <div class="included-item">
                                    <div class="included_title">Pool</div>
                                    <div class="included_text">Beautiful and large swimming pool at your service</div>
                                </div>
                            </div>
                        </div>
                        <h2>Header H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas repellat laborum beatae eos, repellendus, deleniti eligendi rerum rem natus voluptatibus saepe cumque maxime obcaecati dicta veniam vero temporibus voluptatem aliquid tempora, inventore? Ducimus odio esse quas aliquid reprehenderit a natus omnis perferendis eveniet sint error ex saepe, fugit officiis!
                        </p>
                        <h3>Header H3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas repellat laborum beatae eos, repellendus, deleniti eligendi rerum rem natus voluptatibus saepe cumque maxime obcaecati dicta veniam vero temporibus voluptatem aliquid tempora, inventore? Ducimus odio esse quas aliquid reprehenderit a natus omnis perferendis eveniet sint error ex saepe, fugit officiis!
                        </p>
                        <div class="apartment-item">
                            <div class="apartment-images lightgallery">
                                <a class="image-container" href="img/vput6.jpg">
                                    <img src="img/vput6.jpg" class="image-cover" alt=""/>
                                </a>
                                <a class="image-container" href="img/vput7.jpg">
                                    <img src="img/vput7.jpg" class="image-cover" alt=""/>
                                </a>
                                <a class="image-container" href="img/vput8.jpg">
                                    <img src="img/vput8.jpg" class="image-cover" alt=""/>
                                </a>
                            </div>
                            <div class="apartment-info">
                                <h2 class="apartment-title">Duplex apartment</h2>
                                <div class="apartment-cost">$300</div>
                            </div>
                            <div class="apartment-content">
                                <p>
                                    <i>
                                        Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                                    </i>
                                </p>
                            </div>
                            <button class="btn getModal" data-href="#book-now">
                                <span>Book now</span>
                            </button>
                        </div>
                        <div class="apartment-item">
                            <div class="apartment-images lightgallery">
                                <a class="image-container" href="img/vput6.jpg">
                                    <img src="img/vput6.jpg" class="image-cover" alt=""/>
                                </a>
                                <a class="image-container" href="img/vput7.jpg">
                                    <img src="img/vput7.jpg" class="image-cover" alt=""/>
                                </a>
                                <a class="image-container" href="img/vput8.jpg">
                                    <img src="img/vput8.jpg" class="image-cover" alt=""/>
                                </a>
                            </div>
                            <div class="apartment-info">
                                <h2 class="apartment-title">Duplex apartment</h2>
                                <div class="apartment-cost">$300</div>
                            </div>
                            <div class="apartment-content">
                                <p>
                                    <i>
                                        Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                                    </i>
                                </p>
                            </div>
                            <button class="btn getModal" data-href="#book-now">
                                <span>Book now</span>
                            </button>
                        </div>
                        <h4>Header H4</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas repellat laborum beatae eos, repellendus, deleniti eligendi rerum rem natus voluptatibus saepe cumque maxime obcaecati dicta veniam vero temporibus voluptatem aliquid tempora, inventore? Ducimus odio esse quas aliquid reprehenderit a natus omnis perferendis eveniet sint error ex saepe, fugit officiis!
                        </p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, <a href="#">consectetur</a>.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ul>
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ol>
                        <div class="faq">
                            <h2 class="_title">Questions</h2>
                            <p>
                                Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <div class="faq_accordeon">
                                <div class="faq_item active">
                                    <div class="faq_tab">
                                        <span>Questions 1</span>
                                    </div>
                                    <div class="faq_content" style={{display:'block'}}>
                                        <p>
                                            Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </div>

                                <div class="faq_item">
                                    <div class="faq_tab">
                                        <span>Questions 1</span>
                                    </div>
                                    <div class="faq_content">
                                        <p>
                                            Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </div>

                                <div class="faq_item">
                                    <div class="faq_tab">
                                        <span>Questions 1</span>
                                    </div>
                                    <div class="faq_content">
                                        <p>
                                            Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </div>

                                <div class="faq_item">
                                    <div class="faq_tab">
                                        <span>Questions 1</span>
                                    </div>
                                    <div class="faq_content">
                                        <p>
                                            Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="related_tours" id="end-single-content">
                        <div class="_title">
                            Related Tours
                        </div>
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
                                       <div class="reviews_count">
                                           (2 Reviews)
                                       </div>
                                   </div>
                                   <div class="title">
                                       Agra, India | from $300
                                   </div>
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
                                       <div class="reviews_count">
                                           (2 Reviews)
                                       </div>
                                   </div>
                                   <div class="title">
                                       A tour of the Islands | $3,500
                                   </div>
                                   <div class="days">
                                       <span>7 days</span>
                                   </div>
                               </div>
                           </a>
                       </div>
                    </div>
                    <div class="reviews_comments">

                        <div class="add_comment">
                            <div class="_title">Write a review</div>
                            <div class="field">
                                <label for="comment-input-1" class="label">Your name</label>
                                <div class="input_wrap">
                                    <input type="text" id="comment-input-1" class="input" />
                                </div>
                            </div>
                            <div class="field">
                                <label for="comment-input-2" class="label">Your email</label>
                                <div class="input_wrap">
                                    <input type="email" id="comment-input-2" class="input" />
                                </div>
                            </div>

                            <div class="field file-field">

                                <div class="input_wrap">
                                    <input type="file" id="comment-input-3" />
                                    <label for="comment-input-3" class="btn upload">Choose image</label>
                                    <div class="file-name">IMAGE_1040.JPG</div>
                                    <button class="close"></button>
                                </div>
                            </div>

                            <div class="field">
                                <label for="comment-input-4" class="label">Your comment</label>
                                <div class="input_wrap">
                                    <textarea id="comment-input-4" class="textarea"></textarea>
                                </div>
                            </div>
                            <div class="comment-fotm-bottom">
                                <div class="rating user-rating">
                                    <div class="stars">
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star"></div>
                                    </div>
                                </div>

                                <button class="btn submit">Sumbit</button>
                            </div>
                        </div>
                        <div class="reviews_comments_top">
                            <div class="_title">2 Reviews</div>
                            <div class="rating">
                                <div class="stars">
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star"></div>
                               </div>
                            </div>
                            <div class="sorting">
                                <p>Sort by:</p>
                                <div class="select_wrap">
                                    <select>
                                        <option value="Rating">Rating</option>
                                        <option value="Date">Date</option>
                                        <option value="Popular">Popular</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="reviews_comments_list">
                            <div class="comment_item">
                                <div class="photo">
                                    <img src="img/vblog1.jpg" alt="" class="image-cover" />
                                </div>
                                <div class="name">John Smith</div>
                                <div class="position">Family Traveller</div>
                                <div class="text">
                                    Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                <div class="rating">
                                    <div class="stars">
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star"></div>
                                    </div>
                                </div>
                                <div class="date">January 23, 2019</div>
                            </div>
                            <div class="comment_item">
                                <div class="photo">
                                    <img src="img/about5.jpg" alt="" class="image-cover" />
                                </div>
                                <div class="name">John Smith</div>
                                <div class="position">Family Traveller</div>
                                <div class="text">
                                    Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                <div class="rating">
                                    <div class="stars">
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star active"></div>
                                        <div class="star"></div>
                                    </div>
                                </div>
                                <div class="date">January 23, 2019</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-right">
                    <div class="map-iframe">
                       <iframe src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=New%20York+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                   </div>
                    <div class="single-sidebar">
                        <div class="tour--info">
                            <div class="top" style={style2}>
                                <div class="tags">
                                    <div class="tag discount">20% off</div>
                                    <div class="tag new">New</div>
                                </div>
                                <div class="flex-bottom">
                                    <div class="rating">
                                       <div class="stars">
                                           <div class="star active"></div>
                                           <div class="star active"></div>
                                           <div class="star active"></div>
                                           <div class="star active"></div>
                                           <div class="star"></div>
                                       </div>
                                       <div class="reviews_count">
                                           (2 Reviews)
                                       </div>
                                    </div>
                                    <div class="_title">New York, United States</div>
                                    <div class="time">7 days</div>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="cost">
                                    <div class="new-cost">$3,500</div>
                                    <div class="old-cost">$3,880</div>
                                </div>
                                <button class="btn getModal" data-href="#book-now">
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mobile-fixed-bottom getModal" data-href="#book-now">
        Book now
    </div>
</div>
            </>
        )
    }
}
