import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
import './navbar'
import './Footer'
import Navbar from './navbar'
import Footer from './Footer'

const profile = () => {
  return (
    <>
    <Navbar/>
    <div className='bg1'>
      <br/>
      <br/>
      <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-2">
                        <div className="profile-img">
                            <img src="https://nd.net/wp-content/uploads/2016/04/profile-dummy.png" alt=""/>
                            {/* <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <div className="profile-head"> */}
                                    {/* <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6> */}
                                    {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                            {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                            {/* </ul> * */}
                        {/* {/* </div> */}
                    </div> 
                    {/* <div className="col-md-2"> */}
                    {/* <a href="logout" classNameName='logcss'>Log out</a> */}
                    {/* <li><Link classNameName="nav-link scrollto logcss" to="/logout">Log out</Link></li>
                    
                    </div> */}
                    {/* <div className="col-md-2"> */}
                    {/* <a href="home" classNameName='logcss'>Home</a> */}
                    {/* <li><Link classNameName="nav-link scrollto logcss" to="/home">Home</Link></li>
                    </div> */}
                    </div>
                <div className="row">
                    <div className="col-md-4">
                        {/* <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div> */}
                    </div>
                    <div className="col-md-4">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/* <div className="row">
                                            <div className="col-md-4">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>abc xyz</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>xyz@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>9999999999</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Department</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>IT</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Employee ID</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>20ITEMP234</p>
                                            </div>
                                        </div>
                            </div>
                            {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default profile
