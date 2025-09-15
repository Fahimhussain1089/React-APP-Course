import React from "react";
import { useState, useEffect } from 'react';
// import './App.css';


function ReactHook01(){
    
    const [formData,setFormData] =useState({
        name: '',
        email:''
    }
    );
    
    const [error,setErrors] = useState({});

    const validate= () => {
        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name = 'Name is required';

        }
        return newErrors;

    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0 ){
            setErrors(validationErrors);
        }else{
            console.log('form data submitted',formData);
        }
        

    };
    
    const handleChange = ( e) => {
        const {name,value} = e.target;
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
        if(error[name]){
            const newErrors = {...error};
            delete newErrors[name];
            setErrors(newErrors);

        }
    };

    return(
        <div>
        <h1>welcome to React Advance Hook</h1> 
        
        <form onSubmit={handleSubmit}>
            <label >
                Name: 

                <input 
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                />
                {error.name && <span style={{color:'red'}}>{error.name}</span>}
                <br/>
                
            </label>
             <br/>
            <label >
                Email: 

                <input 
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
                
            </label>
              <br/>

            <button type='submit'>Submit</button>
        </form>




        </div>
    );
}

export default ReactHook01;