import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Link
} from "react-router-dom";
// import Hotel from "./Hotel.js";
import * as actions from 'components/actions/hotel'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { Grid } from "@material-ui/core";
import { Paper }from '@material-ui/core';
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddBookingDetails from "customer/BookingComponents/AddBookingDetails";
import { container } from "assets/jss/material-kit-react";
import {Carousel} from 'antd'
function styles(theme) {
  return ({
    root: {
      maxWidth: 350,
      minWidth:180,
      margin: 20,
      marginTop: '10%',
      border: '2px solid #73AD21',
      borderRadius: '50 px',
      transition: 'transform .3s',
      '&:hover': {
      transform: 'scale(1.15)',
      },
      },
      
      media: {
          height: 300,
          
      },
      gridContainer: {
          paddingLeft: "100px",
          paddingRight: "50px"
      },
      cardActionArea: {
          flexGrow: 50,
          flexDirection: 'row',
          alignItems: 'right',
          margin: '40px',
          
          
      },

      
      new: {
          display: "flex",
          
          
      },
      
  });
}
function onChange(a, b, c) {
  console.log(a, b, c);
}


class ViewHotel extends Component {
  constructor() {
    super();
    this.state = { hotels: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")

    

  }

  componentDidMount() {
    this.props.onFetchHotels()
  }

  deleteHotel(id) {
    //console.log("deleting hotel "  + id)


    return this.props.onDeleteHotel(id)

     
  }

  render() {

    if(this.props.hotels===undefined){
      return(
        <h1>Loading....</h1>
      )
    }
    var hotelsList = this.props.hotels.map((hotel, i) => {
      const {classes } = this.props;
      return (
 
      

    <div className={classes.cardActionArea} style={{display:"inline-flex"}} >
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xl={true}>
        <Card className={classes.root}>
        <Carousel afterChange={onChange}>

        <div>
               
               <CardMedia
                   className={classes.media}
                   image="https://www.delhitourism.com/images/dt/hotel/1.jpg"
                   title="Hotel image"
               />
               </div>
                <div>
                  
                  <CardMedia
                    className={classes.media}
                    image="data:image/jpeg;base64,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"
                    title="Room image"
                />
                  
                </div>
                <div>
                <CardMedia
                    className={classes.media}
                    image="data:image/jpeg;base64,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"
                    title="Room image"
                />
                </div>

                <div>
                <CardMedia
                    className={classes.media}
                    image="data:image/jpeg;base64,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"
                    title="Room image"
                />
                </div>

                <div>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nhhP0DRKMwMR2sJjWjAeC-bjltp0t2zMDA&usqp=CAU"
                    title="Room image"
                />
                </div>

                <div>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVD5n1iEsU6LzOe1WcZ4fwFrFuKtZbz_PlGQ&usqp=CAU"
                    title="Room image"
                />
                </div>

               
                </Carousel>
            <CardActionArea>
                
                 <CardContent key={i}>
                <Typography gutterBottom variant="h4" component="h2">
                <span> {hotel.hotelName}</span>
                
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    
                    <b>City:</b> {hotel.city}<br/> 
                  <b>Address:</b> {hotel.address} <br/>
                    <b>Description:</b> {hotel.description}<br/>
                    <b>Average_rate_per_day:</b> {hotel.average_rate_per_day}<br/>
                    
                   <b>Phone1:</b> {hotel.phone1}<br/>
                   <b>Website:</b> {hotel.website}<br/>
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            
      <Link to={"/customer/detail/addbooking"}>
        
      
      <Button 
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      > Book Now
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
        <div>{hotelsList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    hotels : state.customer.hotels
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchHotels : () => dispatch(actions.fetchHotels()),
    onDeleteHotel : (id) => dispatch(actions.deleteHotel(id))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(withStyles(styles)(ViewHotel));