import { useState } from 'react'
import './App.css'
import MouseTracker from './MouseTracking'

function ParentComponent() {
    const [showComponent, setShowComponent] = useState(true)
    
    const toggleComponent = () => {
        setShowComponent(!showComponent)
    }

    return (
        <div>
            <h1>Parent Component !!</h1>
            <button onClick={toggleComponent}>
                {showComponent ? 'Unmount Tracker' : 'Mount Tracker'}
            </button>
            {showComponent && <MouseTracker />} 
        </div>
    )
}

export default ParentComponent