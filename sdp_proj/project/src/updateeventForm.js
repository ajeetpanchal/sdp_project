import React from 'react'
import './addevent.css'
const updateevent = () => {
    return (
        <>
            <div className='bg'>
            <div className='container'>
            <form1>
              <h2>Update Event</h2>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Location</label>
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter location"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Date</label>
    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter date"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Time</label>
    <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="Enter time"/>
  </div>
  
  {/* <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  {/* <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
 
  <div className="text-center"><button type="submit">Submit</button></div>
</form1>
</div>
    </div>

        </>
    )
}

export default updateevent
