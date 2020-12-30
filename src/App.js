import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp/index';
import BoardDetail from './pages/main/board/BoardDetail';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainPage from './pages/main/MainPage';
import BoardCreate from './pages/main/board/BoardCreate';

const store = configureStore();

const App = withRouter(({ location }) => {
return (
  <Provider store={store}>
    <div>
      {
        location.pathname !== '/login' && location.pathname !== '/signup' &&
        <Navbar/>
      }
        
        {/* <Route exact path="/" component={Welcome}/> */}
        <Route exact path="/" component={MainPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/article/:slug" component={BoardDetail}/>
        <Route path="/articles/create" component={BoardCreate}/>
        <Route path="/signup" component={SignUp}/>
      {
        location.pathname !== '/login' && location.pathname !== '/signup' &&
        <Footer />
      }
    </div>
  </Provider>
);
});

export default App;
