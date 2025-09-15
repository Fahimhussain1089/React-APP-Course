import './App.css'
import  { useState } from 'react';

function App3(){
    const[backgroundColor , setBackgroundColor] = useState('white');
    const colors = ['#FF5733','#33FF57','#3357FF','#F333FF','#33FFF5','#F5FF333'];
    const handleColorChange = (color) => {
        setBackgroundColor(color);
    
    };
    //++++++++++++++ Variable ++++++++++++++++++++++++++++++++
    return(
        <div style={{ backgroundColor: backgroundColor }} className='color-container'>
            <h1>color Picker </h1>
            <div className='color-palette'>
                {colors.map((colors,index) => (
                    <div key={index}
                    className='color-box'
                    style={{ backgroundColor:colors}}
                    onClick={()=> handleColorChange(colors)}>

                    </div>

                ))}

            </div>
            <div className='custom-color-picker'>
                <input type='color'
                value={backgroundColor}
                onChange={(e)=>handleColorChange(e.target.value) } />

            </div>


        </div>
    )
    
    //+++++++++++ Define the funcation ++++++++++++++++++++++++

    


}
export default App3;
