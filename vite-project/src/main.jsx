import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  import './index.css'
// import './custom_Hook/index2.css
import App from './App.jsx'
import App4 from './App4.jsx'
import MouseMain from './mouseMain.jsx'
import Watch from './Watch.jsx'
import UseRef from './ReactProject01/UseRef.jsx'
import UseRefWithHtml from './ReactProject01/UseRefWithHtml.jsx'
import PropDrilling from './ReactProject02/PropDrilling.jsx'
import CustomHook01 from './custom_Hook/custom_Hook01.jsx'
import FirstAPIcall from './custom_Hook/firstAPIcall.jsx'
import PostApiCall from './custom_Hook/PostApiCall.jsx'
import ReactHook01 from './React_Hook02/ReactHook01.jsx'
import ReactHook02 from './React_Hook02/ReactHook02.jsx'
import Tailwind01 from './Tailwind_CSS/tailwind01.jsx'


import { Provider } from 'react-redux'   // <-- import Provider
// import store from './store'  
import Redux01 from './Redux/Redux01.jsx'
import { store } from './store02/store02.js'
import FetchingAPI from './FetchingAPI/FetchingAPI.jsx'






createRoot(document.getElementById('root')).render(
   <StrictMode>
     <App4 />

     {/* <MousePossition /> */}
     {/* <MouseMain /> */}
     {/* <Watch/> */}
     {/* <UseRef/> */}
     {/* <UseRefWithHtml/> */}

     {/* <PropDrilling/> */}
     {/* <CustomHook01/> */}
     {/* <FirstAPIcall/> */}
     {/* <PostApiCall/> */}
     {/* <ReactHook01/> */}
       {/* <ReactHook02/> */}
     {/* <Tailwind01/> */}


    {/* <Provider store={store}>
      <Redux01 />
    </Provider> */}



  </StrictMode>,
  
//*****************************************
{/* <Provider store={store}>
  <StrictMode>
    
    <FetchingAPI/>

  </StrictMode>
</Provider> */}

)
