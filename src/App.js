import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/LoginRegister/Login/Login';
import Register from './components/LoginRegister/Register/Register';
import AddTravelPlace from './components/AddTravelPlace/AddTravelPlace';
import Footer from './components/Footer/Footer';
import ManageAllTravelPlace from './components/ManageAllTravelPlace/ManageAllTravelPlace';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addTravelPlace">
              <AddTravelPlace></AddTravelPlace>
            </Route>
            <Route path="/manageTravelPlaces">
              <ManageAllTravelPlace></ManageAllTravelPlace>
            </Route>
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
