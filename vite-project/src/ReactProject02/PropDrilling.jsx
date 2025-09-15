import { StrictMode } from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";





function PropDrilling() {
    const theme = 'dark';



    return (
        <div style={{border:'2px solid black',padding:'20px'}}>
            <h2>App (Parent)</h2>
            <ComponentA theme ={theme}/>

        </div>


    );

}

function ComponentA({theme}){
    
    return <ComponentB theme={theme}/>
}

function ComponentB({theme}){
    return <ThemeComponent theme={theme}/>
}

function ThemeComponent({theme}){
    return <div> The current theme is: {theme}</div>

}

export default PropDrilling;
