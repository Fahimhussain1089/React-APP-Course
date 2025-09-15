import { useEffect, useState } from 'react';
import './App.css';




function Watch() {
    const[time, setTime] = useState(new Date());
    useEffect(  () => {
        const timeId = setInterval( () => {
            setTime(new Date());
         }, 1000 );
        return () => clearInterval(timeId);
    } , [] );

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        });



    return(
        <div className='clock-Container'>
            <div className='clock'>
                
            
            <h1>Welcome to Watch Project</h1>
            <h3>{time.toLocaleTimeString()}</h3>
            <h3>{formattedTime}</h3>
            </div>
            

        </div>

    );

}

 export default Watch;