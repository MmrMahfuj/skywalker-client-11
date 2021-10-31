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
import MyBooking from './components/MyBooking/MyBooking';
import Proceed from './components/Proceed/Proceed';
import ManageBookings from './components/ManageBookings/ManageBookings';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/addTravelPlace">
              <Header></Header>
              <AddTravelPlace></AddTravelPlace>
              <Footer></Footer>
            </Route>
            <Route path="/manageBookings">
              <Header></Header>
              <ManageBookings></ManageBookings>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Header></Header>
              <Booking></Booking>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/myBooking">
              <Header></Header>
              <MyBooking></MyBooking>
              <Footer></Footer>
            </Route>
            <Route path="/proceed">
              <Header></Header>
              <Proceed></Proceed>
            </Route>
            <Route path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
