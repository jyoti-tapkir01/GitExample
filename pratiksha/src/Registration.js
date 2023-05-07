import React, { useState } from 'react' 
import DatePicker from 'react-date-picker'
import Form from './Form.css'


const Registration =() =>{
    const [value, onChange] = useState(new Date());

    return(
        <div className="form">
            <div className="form-body">
            <form action="">
                
        <div className="username">
         <label htmlFor="FirstName" className="form__label">Name </label>&nbsp
         
         <input type="text" name="FirstName" className="form__input" placeholder="First Name" required />
         <input type="Last Name" name="lastName" className="form__input" placeholder="Last Name" required />
      
       </div>
       <div className="input-container">
         <label htmlFor="Email Id" className="form__label">Email ID </label>&nbsp
         <input type="Email Id" name="emailid" className="form__input" placeholder="Email Id" required />
         
       </div>
       <div className="input-container">
         <label htmlFor="Phone No" className="form__label">Phone No </label>&nbsp
         <input type="Phone No" name="phoneno" className="form__input" placeholder="Phone No" required />
         
       </div>
       <div >
         <label htmlFor="Gender" className="form__label">Gender </label>&nbsp
         <fieldset>
        <div><label className="form__label"> <input type="radio" className="form__input" name="radio1" />Male</label></div>
        <div><label className="form__label"><input type="radio" className="form__input" name="radio2" />Female</label></div>
        </fieldset>
       </div>
       <div>
       <label htmlFor="Date-of-Birth" className="form__label"> Date-of-Birth</label>&nbsp
       <DatePicker onChange={onChange} value={value} />
       </div>
       
       <div>
       <label htmlFor="Schedule Preference" className="form__label"> Schedule Preference</label>&nbsp
       <fieldset>
       <div>
        <input type="checkbox" id="6-7" name="6-7" value="6-7" />
        <label for="6-7" className="form__label">Morning Session - 06:00AM to 07:00AM</label>
       </div>
        <div>
        <input type="checkbox" id="7-8" name="7-8" value="7-8" />
                <label for="7-8" className="form__label">Morning Session - 07:00AM to 08:00AM</label>
        </div>
        <div>
        <input type="checkbox" id="8-9" name="8-9" value="8-9" />
                <label for="8-9" className="form__label">Morning Session - 08:00AM to 09:00AM</label>
        </div>
        <div>
        <input type="checkbox" id="5-6" name="5-6" value="5-6" />
                <label for="5-6" className="form__label">Evening Session - 05:00PM to 06:00PM</label>
        </div>
        </fieldset>
       </div>
        <div>
        <label htmlFor="Class Level" className="form__label"> Class Level</label>&nbsp
        <fieldset>
        <div>
        <input type="checkbox" id="Level1" name="Level1" value="Level1" />
        <label for="Level1" className="form__label">Level 1 - Beginner Class</label>
       </div>
       <div>
        <input type="checkbox" id="Level2" name="Level2" value="Level2" />
        <label for="Level2" className="form__label">Level 2 - Intermediate  Class</label>
       </div>
       <div>
        <input type="checkbox" id="Level3" name="Level3" value="Level3" />
        <label for="Level3" className="form__label">Level 3 - Advanced  Class</label>
       </div>
       <div>
        <input type="checkbox" id="Level" name="Level" value="Level" />
        <label for="Level" className="form__label">All Level Class</label>
       </div>

        </fieldset>
        </div>
       <div className="button-container">
         <input type="submit" />
       </div>
            
            </form>
        </div></div>
    )
}

export default Registration