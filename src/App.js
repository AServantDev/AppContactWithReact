
import React, {Component} from 'react'
import  Header  from "./component/interface/Header";
import List from './component/contact/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './context'
import AddContact from './component/contact/AddContact'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Error from './component/interface/Error'
class App extends Component {
  render(){
    return (
      
      <Provider>
        <Router>
          <div className="App">
            <Header/>
            <div className='container'>
              <Switch>
              <Route exact path='/liste' component={List}/>
              <Route exact path='/add' component={AddContact}/>
              <Route exact path='/' component={List}/>
              <Route component={Error}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
  );
}
}

export default App;
