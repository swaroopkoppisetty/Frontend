import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ViewHotel from "components/hotelComponents/ViewHotel.js"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/components.js";

import ViewRoomDetails from "components/RoomComponents/ViewRoomDetails.js"
import ViewBookingDetails from "components/BookingComponents/ViewBookingDetails";
import ViewUser from "components/UserComponents/ViewUser";
import AddHotel from "components/hotelComponents/AddHotel";
import AddRoomDetails from "components/RoomComponents/AddRoomDetails";
import UpdateHotel from "components/hotelComponents/UpdateHotel";
import UpdateRoomDetails from "components/RoomComponents/UpdateRoomDetails";
import UpdateUser from "components/UserComponents/UpdateUser";
import UpdateBookingDetails from "components/BookingComponents/UpdateBookingDetails";
import hist from "../../hist";


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

       <Route exact path= "/admin/user">
           <ViewUser />
         </Route>
         <Route exact path= "/admin/booking">
           <ViewBookingDetails />
         </Route>
         <Route exact path="/admin/detail/hotel/:hotelId">
           <ViewRoomDetails />
         </Route>
         <Route exact path="/admin/viewRoom">
           <ViewRoomDetails />
         </Route>
         <Route exact path="/admin/addHotel">
           <AddHotel />
         </Route>
          <Route exact path="/admin/update/:id" render={(props)=><UpdateHotel {...props} /> }/>
          <Route exact path="/admin/updateRoom/:roomId" render={(props)=><UpdateRoomDetails {...props} /> }/>
          <Route exact path="/admin/updateUser/:userId" render={(props)=><UpdateUser {...props} /> }/>
          <Route exact path="/admin/updateBooking/:bookingId" render={(props)=><UpdateBookingDetails {...props} /> }/>
           
     
         

         <Route exact path="/admin/addroom">
           <AddRoomDetails />
         </Route>
          <Route exact path="/admin">
            <ViewHotel />
          </Route>
          
          </Switch>
      </div>
      </Router>
      <Footer />
    </div>
    
  );
}
