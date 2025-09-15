import React from "react";
import { useState, useEffect } from 'react';
// import './App.css';
import { useForm } from "react-hook-form";
 import Watch from "../Watch";



function ReactHook02(){
    const {register,handleSubmit,reset,watch,formState:{errors}} = useForm();
    const  onSubmit  = (data) => console.log(data);

    // console.log(watch('name'));
    // const watchName = watch('name');
    // const watchEmail = watch('email');
    // useEffect(()=> {
    //     console.log('Name, ',watchName);

    // },[watchName]);
    // useEffect(()=> {
    //     console.log('Email, ',watchEmail);

    // },[watchEmail]);
    const validateName = ( value) => {
        if(value !== 'admin'){
            return 'only admin is allowed';

        }
        return true;
    }
    // 
    const  exitingUserName = ['admin','user123','john']
    const checkIfUsernameExixt = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return exitingUserName.includes(username);
    };



    return(
        <div>
        
        <h1>welcome to React Advance Hook 02</h1> 

        {/* Form Field */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* name  */}
            <label >
                Name: 
                <input 
                    {...register('name',{
                        // required: true,
                        required: "Name is required!!",
                        // validate: validateName,
                        validate:{
                            notAdmin: (value)=> value  !== "admin" || "Admin  is not allowed ",
                            isNotNumber: (value) => isNaN(value) || "Name can be number",
                            checkIfUsernameExixt: async (value) => {
                                const exist = await checkIfUsernameExixt(value);
                                return !exist || 'Username is already exist';

                            }
                        }
                    })}
                />
                
            </label>
            {/* {errors.name && <p>Name is required!! </p>} */}
             {errors.name && <p>{errors.name.message}</p>} 


            {/*email  */}
            <br/>

             <label >
                email: 
                <input 
                    {...register('email',{required: true})}
                />
                
            </label> 
            {errors.email && <p>Email is required!! </p>}

            <br />
            <label >
                Passworld: 
                <input type = 'password' {
                    ...register('password',{
                        // required: true,
                        required: true,
                        minLength: 2,    
                    }
                )}
                    />
            </label>
            {errors.password && <p>{errors.password.message}</p>} 
            <br />
            <label >
                Confirm Passworld: 
                <input type = 'confirmPassword' { ...register('confirmPassword',{
                        // required: true,
                        required: true,
                        minLength: 2, 
                        validate: value=> value === watch('password')||'Password do not match '
                    }
                )}
                    />
            </label>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>} 




            {/* button  */}
             <br/>
        

            <button type='submit'>Submit</button>
            <button type="button" onClick={()=> reset()}>Reset</button>

        </form>




        </div>
    );
}

export default ReactHook02;