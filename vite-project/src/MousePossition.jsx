import './App.css'
import { useEffect, useState } from 'react'

function MousePossition(){
    const [mousePossition,setMousePossition] = useState({x:0,y:0});
    
    useEffect(()=>{
        const handleMouseMove = (event) =>{
            setMousePossition( { x:event.clientX , y:event.clientY } );
        };
        window.addEventListener('mousemove',handleMouseMove); 
        
        return () => {
            window.removeEventListener('mousemove',handleMouseMove);
        }
       
    } , [] );


    return(
        <div>
            <h1> Mouse Possition Welcome </h1>
            <p>X: {mousePossition.x},Y:{mousePossition.y}</p>
        </div>
    )

}

export default MousePossition;