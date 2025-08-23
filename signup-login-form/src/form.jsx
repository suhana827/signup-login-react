import React from "react";


function FormHandling({ username, setUserName, email, setEmail,password, 
    setPassword,age,setAge,gender,setGender,phone,setPhone,handlingSubmission,}) {

    return(
       <>
        <h1 id="myheading">Sign Up Form</h1>
        
            <form className="myDiv" onSubmit={handlingSubmission}>

                <h2 id="heading2">Fill the form</h2>
            
              <label>
                Username <br/>
                <input
                type="text"
                id="username"
                placeholder="Enter you name here.."
                value = {username}
                onChange={(e) => setUserName(e.target.value)}
                />
                
               </label>
                
                <label>
                    Email <br/>
                <input
                type="text"
                id="email"
                placeholder="Enter you email here.."
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                />

                </label>

                <label>
                 Password <br/>
                <input
                type="password"
                id="password"
                placeholder="Enter you password here.."
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                />

                </label>
                 
                <label>
                Age <br/>
                <input
                type="text"
                id="age"
                placeholder="Enter you age here.."
                value = {age}
                onChange={(e) => setAge(e.target.value)}
                />

            </label>

                <label>
                Gender : <br/>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    checked={gender === "Male"} 
                    onChange={(e) => setGender(e.target.value)} 
                />
                Male
                </label>

                <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={gender === "Female"} 
                    onChange={(e) => setGender(e.target.value)} 
                />
                Female
                </label>

                <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Other" 
                    checked={gender === "Other"} 
                    onChange={(e) => setGender(e.target.value)} 
                />
                Other
                </label>

                <label>
                Phone <br/>
                <input
                type= "tel"
                id="tel"
                placeholder="Enter your phone Number here ..."
                value = {phone}
                onChange={(e) => setPhone(e.target.value)}
                />

            </label>

                
                <button type="submit" id="submitB">Submit</button>

            </form>
        
        </>
    )
}


export default FormHandling;