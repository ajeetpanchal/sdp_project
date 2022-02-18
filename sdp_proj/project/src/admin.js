import React from 'react';
import { Link } from 'react-router-dom';
import  './addevent';
import './updateevent';
import './deleteevent';
import './viewdetails';
import  './admin.css';

 const admin = () =>{
  return <>
  <div className='bg1'>
     <div className='mid1'>
     Admin can manage events from here
   <br/>
     <Link to="/addevent" className="book-a-table-btn ">Add event</Link>
     <Link to="/updateevent" className="book-a-table-btn ">Update event</Link>
     <Link to="/deleteevent" className="book-a-table-btn ">Delete event</Link>
     <Link to="/viewdetails" className="book-a-table-btn ">View participants details</Link>
     </div>
     </div>
  </>;
}

export default admin;
