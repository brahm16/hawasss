
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import Header from '../Item/Header';
 class Contact extends Component{
     render(){
        return(
            <>
            <Header/>

            <div className="page_content single-page about-page contacts-page">
        <div className="content-head">
            <div className="wrap">
                <div className="wrap_float">
                    <div className="main">
                        <div className="title">
                            Contact Us
                        </div>
                        
                <div className="row row-content">
                  
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label className="label-contact" htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="label-contact" htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label className="label-contact" htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="label-contact" htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label className="label-contact" check>
                                            <Input type="checkbox"
                                                name="agree"
                                                 /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                           >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="label-contact" htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                       ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>
                        <div className="contacts-columns">
                            <div className="column tel">
                                <div className="_title">Phone</div>
                                <div className="text">
                                    A wonderful serenity has taken possession of my entire soul, like these
                                </div>
                                <a href="#">+1 1235 6789 10</a>
                            </div>
                            <div className="column email">
                                <div className="_title">Email</div>
                                <div className="text">
                                    A wonderful serenity has taken possession of my entire soul, like these
                                </div>
                                <a href="#">info@hellodigi.ru</a>
                            </div>
                            <div className="column location">
                                <div className="_title">Location</div>
                                <div className="text">
                                    12 Main Street Pt. London
                                </div>
                                <a href="#">View On Google Map</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="mab-block" id="gmap"></div>
        </div>
    </div>
    </>
        )
     }
  
}

export default Contact;