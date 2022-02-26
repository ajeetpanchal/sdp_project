import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate, NavLink,useNavigate } from "react-router-dom";
import "./Login.js";
// import Navbar from "./navbar";
// import Footer from "./Footer";
import {db, auth} from "./firebase"

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [eid, seteid] = useState("")
  const [mno, setmno] = useState("")
  const [dept, setdept] = useState("")

  const navigate=useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
  //  const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
     auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
    db.collection("User").add({
        email:email, 
        password: password,
        fname: fname,
        lname: lname,
        eid:eid,
        mno: mno,
        dept: dept
      })
      .then(()=>{
        navigate("/home")
      })
    })
  }



  //   const [user, setUser] = useState({
  //     fname:"",
  //     lname:"",
  //     email:"",
  //     eid:"",
  //     dept:"",
  //     mno:"",
  //     psw:"",
  //     pswconfirm:""
  //   });

  //   let name, value;
  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUser({...user, [name]: value})
  // }

  // const postData = async(e) => {
  //   e.preventDefault();

  //   const {fname, lname, email, eid, dept, mno, psw, pswconfirm} = user;

  //   const res = await fetch("https://company-event-management-default-rtdb.firebaseio.com/companyeventmanagement.json",
  //   {
  //     method:'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fname,
  //       lname,
  //       email,
  //       eid,
  //       dept,
  //       mno,
  //       psw,
  //       pswconfirm
  //     }),
  //   }
  //   );
  // };

  return (
    <>
      <p id="msg"></p>
      <div className="bg">
        {/* <Navbar /> */}
        <form method="POST" onSubmit={handleSubmit}>
          <div className="container1">
            <h1 className="h1Style">Sign up</h1>
            <div className="horizontal rule">
              <label>
                <b style={{color:"#d9ba85"}}>First Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter First Name"
                // value={user.fname}
                // onChange={getUserData}
                name="fname"
                id="fname"
                onChange={(e) => setfname(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Last Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Last Name"
                // value={user.lname}
                // onChange={getUserData}
                name="lname"
                id="lname"
                onChange={(e) => setlname(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Email</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Email"
                // value={user.email}
                // onChange={getUserData}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Employee Id</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Employee Id"
                // value={user.eid}
                // onChange={getUserData}
                name="eid"
                id="eid"
                onChange={(e) => seteid(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Department</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Department"
                // value={user.dept}
                // onChange={getUserData}
                name="dept"
                id="dept"
                onChange={(e) => setdept(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Mobile Number</b>
              </label>
              <input
                className="input1"
                type="tel"
                placeholder="Enter Mobile no."
                // value={user.mno}
                // onChange={getUserData}
                name="mno"
                id="mno"
                onChange={(e) => setmno(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Password</b>
              </label>
              <input
                className="input1"
                type="password"
                placeholder="Enter Password"
                // value={user.psw}
                // onChange={getUserData}
                name="psw"
                id="psw"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Confirm Password</b>
              </label>
              <input
                className="input1"
                type="password"
                placeholder="Confirm Password"
                // value={user.pswconfirm}
                // onChange={getUserData}
                name="pswconfirm"
                id="pswconfirm"
                required
              />
            </div>
            <button type="submit" onclick='save(); this.disabled = true;'className="registerbtn">
              Submit
            </button>
            <div className="signin">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
  };

export default Signup;