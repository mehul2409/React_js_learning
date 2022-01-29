import React from 'react';
import {blog, header, footer, features, possiblity, what} from './containers';
import {brand, cta, navbar} from './components';
const App = () => {
    return ( 
    <div className='App'>
        <div className='gradient_bg'>
            <navbar/>  
            <header/>
        </div>
        <brand />
        <what/>
        <features/>
        <possiblity/>
        <cta/>
        <blog/>
        <footer/>
        
    </div>
    )
}

export default App
