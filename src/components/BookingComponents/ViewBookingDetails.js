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
function styles(theme) {
  return ({
    root: {
      maxWidth: 500,
      minWidth: 300,
      margin: 20,
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
    this.state = { bookingdetails: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")

    

  }

  componentDidMount() {
    this.props.onFetchBookingDetails()
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
        
    <div className={classes.cardActionArea} style={{display:'inline-flex'}}>
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

      ><Button onClick={ this.deleteBookingDetails.bind(this,bookingDetails.bookingId) }>
        Delete
      </Button>
      </Button>
      <Link to={"/admin/updatebooking/"+bookingDetails.bookingId}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >Edit
        
      </Button>
      </Link>
       </CardActions>
        </Card>
        </Grid>
        </Grid> 
        
</div>  
);
});

    

    return (
      <div style={{display:"flex"}}>      
        <div>{BookingDetailsList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    bookingdetails : state.admin.bookingdetails
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchBookingDetails : () => dispatch(actions.fetchBookingDetails()),
    onDeleteBookingDetails : (id) => dispatch(actions.deleteBookingDetails(id))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(withStyles(styles)(ViewBookingDetails));