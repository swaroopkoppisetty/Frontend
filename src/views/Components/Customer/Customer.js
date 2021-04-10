import React, { Component } from 'react'

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "customer/Header/Header.js";
import Footer from "customer/Footer/Footer.js";
import GridContainer from "customer/Grid/GridContainer.js";
import GridItem from "customer/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "customer/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "customer/Header/HeaderLinks.js";
import ViewHotel from "customer/hotelComponents/ViewHotel.js"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/components.js";


import ViewBookingDetails from "customer/BookingComponents/ViewBookingDetails";
import ViewUser from "customer/UserComponents/ViewUser";

import UpdateUser from "customer/UserComponents/UpdateUser";
import UpdateBookingDetails from "customer/BookingComponents/UpdateBookingDetails";
import AddBookingDetails from "customer/BookingComponents/AddBookingDetails";
import hist from "../../../hist";
import AddPayment from "customer/PaymentComponents/AddPayment";
import ViewBooking from "customer/BookingComponents/ViewBooking";



const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
        
      <Router history={hist} >
      
      <Header
      
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
    
      />
      
      <Parallax image={require("assets/img/hotelhd1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>CapoYo</h1>
                <h3 className={classes.subtitle}>
                  come, stay and enjoy your holiday
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      
      <div className={classNames(classes.main, classes.mainRaised)}>
      
       <Switch>

       <Route exact path= "/customer/user">
           <ViewUser />
         </Route>
         <Route exact path= "/customer/booking">
           <ViewBookingDetails />
         </Route>

         <Route exact path="/customer/detail/addbooking">
           <AddBookingDetails />
         </Route>
         
         

         
         <Route exact path="/customer/addpayment">
           <AddPayment />
         </Route>
         
         <Route exact path="/customer/viewbooking">
            <ViewBooking/>
         </Route>
         
         

          <Route exact path="/customer/updateUser/:userId" render={(props)=><UpdateUser {...props} /> }/>
          <Route exact path="/customer/updateBooking/:bookingId" render={(props)=><UpdateBookingDetails {...props} /> }/>
           
     
         

          <Route exact path="/customer">
            <ViewHotel />
          </Route>
          
          </Switch>
      </div>
      </Router>
      
      <Footer />
    </div>
    
  );
}
