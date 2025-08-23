import React, {useState} from "react";
import FormHandling from './form.jsx';


function App() {
  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");


  function handlingSubmission(e) {
    e.preventDefault(); // stops page refresh
    console.log(userName, email, password); // shows entered data
  }
  

  function handlingButton () {


  }

  return(
    <>
    <FormHandling
    
    username={userName}
    setUserName={setUserName}
    
    email={email}
    setEmail={setEmail}
    
    password={password}
    setPassword={setPassword}

    age = {age}
    setAge = {setAge}

    gender = {gender}
    setGender = {setGender}

    phone = {phone}
    setPhone = {setPhone}
    
    handlingSubmission={handlingSubmission} 
    />
    </>


  );
}


export default App;