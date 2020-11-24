import React, { Component ,Suspense} from 'react';

import './App.css';
import HomePage from './Containers/Homepage/Homepage';
import Registration from './Containers/UserManagement/user-create-page/Registration';
import Contact from './Containers/UserManagement/user-contact-creation/Contact'

import { Route,Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//const Posts = React.lazy(() => import('./containers/Posts'));
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      userData: {},
      isLoggedIn: false
    }
    this.onSignIn = this.onSignIn.bind(this);
  }
  onSignIn(userData){
    this.setState({...userData});
    this.setState({isLoggedIn: true})
  }
  render() { return (
    <BrowserRouter>
        {/* <BrowserRouter basename='/'></BrowserRouter> */}
    <React.Fragment>
    
      {/* <Route
      //       path="/posts"
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Posts />
      //         </Suspense>
      //       )}
      //     /> */}
    {/* <Route render={()=><h1>Not Found</h1>}/> */}
<HomePage/>
   
            {/* <Route path="/" exact component={HomePage} /> */}
            
      </React.Fragment>
      </BrowserRouter>
  );
}}

export default App;
