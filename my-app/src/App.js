import React from 'react';
import Weather from './Weather';


class App extends React.Component {
    render(){
        return(
            <>
            <div class="p-5 text-center bg-light">
           <h1 class="mb-3">Welcome to location website</h1>
            </div>
            <Weather />
            <div class="p-5 text-center bg-light">
            <h1 class="mb-3">Done by: AHMAD YAGHI</h1>
            
          
          </div>
          </>
        )
    }
}
export default App;
