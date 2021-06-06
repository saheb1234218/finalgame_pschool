import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';
import Home from './home';
import Dragcontents from "./dragcontents";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 
ReactDOM.render(
  
 <Provider store={store}>
   <Router>
     <Switch>
       <Route path="/" exact="true" component={Home}></Route>
       <Route path="/drag" component={App}/>
       <Route path="/dcontents" component={Dragcontents}/>
     </Switch>
  
   </Router>
    
    </Provider>
  ,
  document.getElementById('root')
);


