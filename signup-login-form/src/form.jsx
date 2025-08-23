import React from "react";


function FormHandling({ username, setUserName, email, setEmail,password, 
    setPassword,age,setAge,gender,setGender,phone,setPhone,handlingSubmission,}) {

    return(
        <div>
            <form onSubmit={handlingSubmission}>

                <input
                type="text"
                id="username"
                placeholder="Enter you name here.."
                value = {username}
                onChange={(e) => setUserName(e.target.value)}
                />

                <input
                type="text"
                id="email"
                placeholder="Enter you email here.."
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="password"
                id="password"
                placeholder="Enter you password here.."
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <input
                type="text"
                id="age"
                placeholder="Enter you age here.."
                value = {age}
                onChange={(e) => setAge(e.target.value)}
                />

                <label>
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

                <input
                type= "tel"
                id="tel"
                placeholder="Enter your phone Number here ..."
                value = {phone}
                onChange={(e) => setPhone(e.target.value)}
                />

                
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}


export default FormHandling;