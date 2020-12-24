import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp/index';
import BoardDetail from './components/SingleArticle/boardDetail';
import CreateBoard from './components/CreateArticle/createBoard';

const App = withRouter(({ location }) => {
return (
  <div>
    {
      location.pathname !== '/login' && location.pathname !== '/signup' &&
      <Navbar/>
    }
      
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/article/:slug" component={BoardDetail}/>
      <Route path="/articles/create" component={CreateBoard}/>
      <Route path="/signup" component={SignUp}/>
    {
      location.pathname !== '/login' && location.pathname !== '/signup' &&
      <Footer />
    }
  </div>
);
});

export default App;
