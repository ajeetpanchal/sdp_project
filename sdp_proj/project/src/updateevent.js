<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import { Link, NavLink } from "react-router-dom";
import "./updateeventForm";
import { db } from "./firebase";
import Frame from "react-frame-component";
import './events.css'


import React, { Component } from "react";

class Updateevents extends Component {

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
        // const myStyle = {
        //     color: "black",
        //     background:"hidden",
        //     font:"40px",
        //     padding:"0px",
        //     margin:"0px",
        //     fontFamily: "Arial"

        //   };
        return (
            <div>
                {/* <Navbar /> */}
                {/* <p style={myStyle}>Events</p> */}
                {this.state.info.map((Events, index) => (
                      
                    <div className="btns">
                        <div>
                            <section id="events" className="events">
                                <div className="container">
                                    <br />
                                    <br />
                                    <br />
                                    <br/>

                                    {/* <div className="section-title">
                                        <p>Events</p> */}
                                        {/* <p>Organize Your Events in our Restaurant</p> */}
                                    {/* </div> */}


                                    <div className="events-slider swiper">
                                        <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                <div className="row event-item">
                                                    <div className="col-lg-6">
                                                        <img src={require("./assets/img/event-birthday.jpg")} className="img-fluid" alt="" />
                                                    </div>

                                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                                        <h3>{Events.name}</h3>
                                                        <div className="price">
                                                            {/* <p><span>$189</span></p> */}
                                                        </div>

                                                        <p className="fst-italic">
                                                            Location:     {Events.location}
                                                        </p>
                                                        <ul>
                                                            <li><i className="bi bi-check-circled"></i>Date:   {Events.date}</li>
                                                            <li><i className="bi bi-check-circled"></i>Time:   {Events.time}</li>
                                                            <li><i className="bi bi-check-circled"></i>Fees:   {Events.amount}/-</li>
                                                            <li><i className="bi bi-check-circled"></i>No.of Participants required:  {Events.noOfParticipants}</li>
                                                        </ul>


                                                        <p>
                                                            {Events.desc}
                                                        </p>
                                                        <Link to="/updateeventForm" className="book-a-table-btn ">Update</Link>
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

                        </div>

                    </div>

                ))}
                {/* <Footer /> */}
            </div>
        )
    }

}

=======
// import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import { Link, NavLink } from "react-router-dom";
import "./updateeventForm";
import { db } from "./firebase";
import Frame from "react-frame-component";
import './events.css'


import React, { Component } from "react";

class Updateevents extends Component {

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
        // const myStyle = {
        //     color: "black",
        //     background:"hidden",
        //     font:"40px",
        //     padding:"0px",
        //     margin:"0px",
        //     fontFamily: "Arial"

        //   };
        return (
            <div>
                {/* <Navbar /> */}
                {/* <p style={myStyle}>Events</p> */}
                {this.state.info.map((Events, index) => (
                      
                    <div className="btns">
                        <div>
                            <section id="events" className="events">
                                <div className="container">
                                    <br />
                                    <br />
                                    <br />
                                    <br/>

                                    {/* <div className="section-title">
                                        <p>Events</p> */}
                                        {/* <p>Organize Your Events in our Restaurant</p> */}
                                    {/* </div> */}


                                    <div className="events-slider swiper">
                                        <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                <div className="row event-item">
                                                    <div className="col-lg-6">
                                                        <img src={require("./assets/img/event-birthday.jpg")} className="img-fluid" alt="" />
                                                    </div>

                                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                                        <h3>{Events.name}</h3>
                                                        <div className="price">
                                                            {/* <p><span>$189</span></p> */}
                                                        </div>

                                                        <p className="fst-italic">
                                                            Location:     {Events.location}
                                                        </p>
                                                        <ul>
                                                            <li><i className="bi bi-check-circled"></i>Date:   {Events.date}</li>
                                                            <li><i className="bi bi-check-circled"></i>Time:   {Events.time}</li>
                                                            <li><i className="bi bi-check-circled"></i>Fees:   {Events.amount}/-</li>
                                                            <li><i className="bi bi-check-circled"></i>No.of Participants required:  {Events.noOfParticipants}</li>
                                                        </ul>


                                                        <p>
                                                            {Events.desc}
                                                        </p>
                                                        <Link to="/updateeventForm" className="book-a-table-btn ">Update</Link>
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

                        </div>

                    </div>

                ))}
                {/* <Footer /> */}
            </div>
        )
    }

}

>>>>>>> 0c2297ff14af2f5e1b19b635c29afd2586f7587e
export default Updateevents;