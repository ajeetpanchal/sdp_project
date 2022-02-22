// import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import { Link, NavLink } from "react-router-dom";
import "./Registration";
import { db } from "./firebase";
import Frame from "react-frame-component";
import './events.css'


import React, { Component } from "react";

class Events extends Component {
    state = {
        info: [],
    };

    fetchData = () => {
        db.collection("Events")
            .get()
            .then((querySnapshot) => {
                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach((element) => {
                    var data = element.data();
                    // console.log(data);
                    let { info } = this.state;
                    info.push(data);
                    this.setState({ info });
                });
            });
    };

    componentDidMount = () => {
        this.fetchData();
    };

    render() {
        return (
            <div>
            <Navbar/>
            {/* <div> */}
                {/* <center>
                    <h2>Student Details</h2>
                </center> */}

                {this.state.info.map((event, index) => (
                    // <Frame
                    //     key={index}
                    //     ename={event.name}
                    //     location={event.location}
                    //     date={event.date}
                    //     time={event.time}
                    //     amount={event.amount}
                    //     noOfParticipants={event.noOfParticipants}
                    //     image={event.image}
                    //     desc={event.desc}
                    // />
                    // <div>
                    //     <h1>{event.name}</h1>
                    //     <p>{event.date}</p>
                    //     {/* <img src={event.image} alt="img" className="image"></img> */}
                    // </div>
                    < div className="btns">
            
                     <div/>
                      <section id="events" className="events">
                <div className="container">
                  <br />
                  <br />
                  <br />
                  {/* < div className="add">
                  <Link to="/addevent" className="book-a-table-btn ">Add an event</Link>
                  </div> */}
                  <div className="section-title">
                    <p>Events</p>
                    {/* <p>Organize Your Events in our Restaurant</p> */}
                  </div>
                  
                  <div className="events-slider swiper">
                    <div className="swiper-wrapper">
          
                      <div className="swiper-slide">
                        <div className="row event-item">
                          <div className="col-lg-6">
                            <img src={require("./assets/img/event-birthday.jpg")} className="img-fluid" alt=""/>
                          </div>
                          <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>{Events.name}</h3>
                            <div className="price">
                              {/* <p><span>$189</span></p> */}
                            </div>
                            <p className="fst-italic">
                              {Events.location}
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                            </p>
                            <ul>
                              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                              <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                            <Link to="/registration" className="book-a-table-btn ">Register</Link>
                            {/* <Link to="/" className="book-a-table-btn ">Update</Link>
                            <Link to="/" className="book-a-table-btn ">Delete</Link> */}
                    
                          </div>
                          
                        </div>
                      </div>
          
                      
          
                      
          
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
          
                </div>
              </section>
              <section id="events" className="events">
                <div className="container">
          
                  {/* <div className="section-title">
                    <h2>Events</h2>
                    <p>Organize Your Events in our Restaurant</p>
                  </div> */}
          
                  <div className="events-slider swiper">
                    <div className="swiper-wrapper">
          
                      <div className="swiper-slide">
                        <div className="row event-item">
                          <div className="col-lg-6">
                            <img src={require("./assets/img/event-birthday.jpg")} className="img-fluid" alt=""/>
                          </div>
                          <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>{Events.name}</h3>
                            {/* <div className="price">
                              <p><span>$189</span></p>
                            </div> */}
                            <p className="fst-italic">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                            </p>
                            <ul>
                              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                              <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                            <Link to="/registration" className="book-a-table-btn ">Register</Link>
                            {/* <Link to="/" className="book-a-table-btn ">Update</Link>
                            <Link to="/" className="book-a-table-btn ">Delete</Link> */}
                      
                          </div>
                        </div>
                      </div>
          
                  
          
                      
          
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
          
                </div>
              </section>
              <section id="events" className="events">
                <div className="container">
          
                  {/* <div className="section-title">
                    <h2>Events</h2>
                    <p>Organize Your Events in our Restaurant</p>
                  </div> */}
          
                  <div className="events-slider swiper">
                    <div className="swiper-wrapper">
          
                      <div className="swiper-slide">
                        <div className="row event-item">
                          <div className="col-lg-6">
                            <img src={require("./assets/img/event-birthday.jpg")} className="img-fluid" alt=""/>
                          </div>
                          <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Seminar</h3>
                            {/* <div className="price">
                              <p><span>$189</span></p>
                            </div> */}
                            <p className="fst-italic">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                            </p>
                            <ul>
                              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                              <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                              <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                            <div className="btns">
                            <Link to="/registration" className="book-a-table-btn ">Register</Link>
                            {/* <Link to="/" className="book-a-table-btn ">Update</Link>
                            <Link to="/" className="book-a-table-btn ">Delete</Link> */}
                    </div>
                          </div>
                        </div>
                      </div>
          
                     
          
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
          
                </div>
              </section>
              <Footer/>

                ))}
             {/* </div> */}
             </div>
        );
    }
}

export default Events;
