import React, { useState } from "react";

const Genderform = () =>{
    let [gender,setGender] = useState("");

    function selectGender(e){
        setGender(e.target.value);
    }
    
    return(
        <div>
            <h1>Select your gender:</h1>
            <div>
                <input type="radio" id="male" onClick={selectGender}/>
                <label for="male">Male</label>
            </div>
            <div>
                <input type="radio" id="female" onClick={selectGender}/>
                <label for="female">Female</label>
            </div>
            <h1>Select your shirt size:</h1>
            {gender == "male" ? <select>
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
            </select> : <select>
                <Option value="small">2</Option>
                <Option value="medium">4</Option>
                <Option value="large">6</Option>
            </select>
            }
            
        </div>
    ) 
}

export default Genderform;