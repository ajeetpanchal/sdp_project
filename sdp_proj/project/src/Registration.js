import React from 'react'
import Footer from './Footer'
import Navbar from './navbar'

const Registration = () => {
    return (
        <>
        <div className='bg1'>
          <Navbar/>
            <section id="book-a-table" className="book-a-table">
      <div className="container">

        <div className="section-title">
          {/* <h2>Reservation</h2> */}
          <br/>
          <br/>
          <br/>
          <br/>
          <p>Register for Event</p>
        </div>

        <form className="php-email-form">
          <div className="col">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Name of leader participant" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            {/* mt-md-0 was not there */}
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">  
              <input type="text" name="Employee id" className="form-control" id="Employee id" placeholder="Employee id" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            {/* mt-md-0 was not there */}
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="text" className="form-control" name="department" id="department" placeholder="Department" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            {/* mt-md-0 was not there */}
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
              <div className="validate"></div>
            </div>
          </div>
          {/* <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
            <div className="validate"></div>
          </div> */}
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div className="text-right"><button type="submit">Payment</button></div>
        </form>

      </div>
    </section>
    </div>
    <Footer/>
        </>
    )
}

export default Registration
