import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import BookingDetails from "./BookingDetails.js";
import * as actions from 'components/actions/bookingDetails'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { Grid } from "@material-ui/core";
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as paymentactions from 'components/actions/payment'


function styles(theme) {
  return ({
    root: {
      maxWidth: 500,
      marging: 300,
      marginTop: '10%',
      border: '2px solid #73AD21',
      borderRadius: '30 px',
      transition: 'transform .3s',
      '&:hover': {
      transform: 'scale(1.2)',
      },
      },
      media: {
          height: 300,
      },
      gridContainer: {
          paddingLeft: "5px",
          paddingRight: "5px"
      },
      cardActionArea: {
          flexGrow: 0,
          flexDirection: 'row',
          alignItems: 'center',
          margin: '50px',
      },
      new: {
          display: "flex",
      },
      
  });
}


class ViewBookingDetails extends Component {
  constructor() {
    super();
    this.state = { bookingdetails: [],open:false,selected:0 };

  }
  
  fetchData()
  {

    console.log("fetching data.....")

 }

 handleClose()
 {
   this.setState({open:false})
 }

 handleOpen(id)
 {
   this.setState({open:true,selected:id})
   console.log(id +'booking id')
 }

 handlePay()
 {
  var payment = {
     
    bookingDetails : {
      bookingId: this.state.selected
  }
  
};


this.props.onAddPayments(payment)



 }

  componentDidMount() {
    this.props.onFetchBookingDetails(localStorage.getItem('email'))
  }

  deleteBookingDetails(id) {
    //console.log("deleting booking "  + id)


    return this.props.onDeleteBookingDetails(id)

     
  }

  

 

  render() {
      if(this.props.bookingdetails===undefined){
          return(
              <h1>Loading....</h1>
          )
      }
    var BookingDetailsList = this.props.bookingdetails.map((bookingDetails, i) => {
      const {classes } = this.props;
      return (
        
    <div className={classes.cardActionArea} style={{display:'inline-grid'}}>
    <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xl={true}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://s3.amazonaws.com/Snowcovered_C_Images/27342_booking.png"
                    title="Booking image"
                />
                 <CardContent key={i}>
                <Typography gutterBottom variant="h5" component="h2">
                <span> {bookingDetails.bookingId}</span>
                
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <b>Id:</b> {bookingDetails.bookingId}<br/> 
                    {/* <b>userName:</b> {this.user.userName}<br/>  */}
                    <b>bookedFrom:</b> {bookingDetails.bookedFrom}<br/>
                    <b>bookedTo:</b> {bookingDetails.bookedTo}<br/>
                    <b>No of Adults:</b> {bookingDetails.noOfAdults}<br/>
                    <b>No of Children:</b> {bookingDetails.noOfChildren}<br/>
                    <b>Amount:</b> {bookingDetails.amount}<br/>
                    {/* <b>hotelName:</b> {this.hotel.hotelName}<br/>
                    <b>roomType :</b> {this.roomdetails.roomType}<br/> */}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

            <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}

      >
        
        <Button onClick={ this.deleteBookingDetails.bind(this,bookingDetails.bookingId) }>
        Delete
      </Button>
      </Button>
      
      
      <Link to={"/customer/updatebooking/"+bookingDetails.bookingId}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >Edit
        
      </Button>
      </Link>


{bookingDetails.roomDetailsList[0].isavailable && (


<Button onClick={this.handleOpen.bind(this,bookingDetails.bookingId)}
  variant="contained"
  color="#76ff03"
  size="large"
  className={classes.button}
  startIcon={<SaveIcon />}
>Pay
  
</Button>

)}
      

         
       
       
       
       </CardActions>
        </Card>
        </Grid>
        </Grid> 
        
</div>  
);
});

    

    return (
      <div style={{display:"flex"}}>  

      <Dialog
        open={this.state.open}
        onClose={this.handleClose.bind(this)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure to continue with the payment?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once paid there is no refund
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose.bind(this)} color="primary">
            Disagree
          </Button>
          <Button onClick={this.handlePay.bind(this)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>    
        <div>{BookingDetailsList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    bookingdetails : state.customer.bookingdetails
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchBookingDetails : (email) => dispatch(actions.fetchBookingDetails(email)),
    onDeleteBookingDetails : (id) => dispatch(actions.deleteBookingDetails(id)),
    onAddPayments : (id) => dispatch(paymentactions.addPayments(id))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(withStyles(styles)(ViewBookingDetails));