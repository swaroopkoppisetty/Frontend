import "./App.css";
import React from 'react';
import ViewHotel from "./components/hotelComponents/ViewHotel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AddHotel from "./Components/hotelComponents/AddHotel";
// import UpdateHotel from "./Components/hotelComponents/UpdateHotel";
// import ViewRoomDetails from "./Components/RoomComponents/ViewRoomDetails";
// import AddRoomDetails from "./Components/RoomComponents/AddRoomDetails";
// import UpdateRoomDetails from "./Components/RoomComponents/UpdateRoomDetails";
// import ViewUser from "./Components/UserComponents/ViewUser";
// import AddUser from "./Components/UserComponents/AddUser";
// import UpdateUser from "./Components/UserComponents/UpdateUser";
// import ViewBookingDetails from "./Components/BookingComponents/ViewBookingDetails";
// import AddBookingDetails from "./Components/BookingComponents/AddBookingDetails";
// import UpdateBookingDetails from "./Components/BookingComponents/UpdateBookingDetails";
// import AddPayment from "./Components/PaymentComponents/AddPayment";
// import AddTransaction from "./Components/TransactionComponents/AddTransaction";

function App() {
   return (
    <Route exact path='/hotel' component={ViewHotel} />

                  
      
  
   )}

export default App;
