import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Home from './containers/Home';
// import Router from './components/Router'; 

export default class App extends Component{
    render() {
        return(
            <BrowserRouter>
            <Home />
                {/* <header>
                    
                </header> */}
            </BrowserRouter>   
        )
    }
}