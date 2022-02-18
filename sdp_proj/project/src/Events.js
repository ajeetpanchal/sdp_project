import React,{useState} from 'react'
import Footer from './Footer'
import Navbar from './navbar'
import {Link, NavLink} from "react-router-dom";
import './Registration'
import { db } from './firebase';
import Frame from 'react-frame-component';
// import './events.css'
// import './addevent.js'

const Events = () => {
  const Read = () => {
  
    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("data").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    }
      
    // Display the result on the page
    // return (
    //     <div>
    //         <center>
    //         <h2>Student Details</h2>
    //         </center>
          
    //     {
    //         info.map((Events) => (
    //         <Frame ename={Events.name}
    //         location={Events.location}
    //         date={Events.date}
    //         time={Events.time}
    //         amount={Events.amount}
    //         noOfParticipants={Events.noOfParticipants}
    //         image={Events.image}
    //         desc={Events.desc}/>
    //         ))
    //     }
    //     </div>
  
    // );
  }
  
// Define how each display entry will be structured
// const Frame = ({ename, location , date,time,amount,noOfParticipants,image,desc}) => {
//     console.log(ename + " " + location + " " + date);
//     return (
//         <center>
//             <div className="div">
                  
// <p>NAME : {name}</p>
   
                  
// <p>Age : {age}</p>
  
                  
// <p>Course : {course}</p>
   
//             </div>
//         </center>
//     );
//
  

    return (
        <>(

          info.map((Events) => (
        
        <Navbar/>
        
        <div className="btns">
            
          </div>
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
                  <h3>{ename}</h3>
                  <div className="price">
                    {/* <p><span>$189</span></p> */}
                  </div>
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
                  <h3>Short Film Making</h3>
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
          )
          )
        </>
    
    )
  
    
}  

export default Events
