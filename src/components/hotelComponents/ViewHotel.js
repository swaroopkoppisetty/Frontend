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
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
function styles(theme) {
  return ({
    root: {
      maxWidth: 500,
      minWidth:300,
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
          height: 200,
      },
      gridContainer: {
          paddingLeft: "100px",
          paddingRight: "50px"
      },
      cardActionArea: {
          flexGrow: 50,
          flexDirection: 'row',
          alignItems: 'right',
          margin: '50px',
      },
      new: {
          display: "flex",
      },
      
  });
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
 
      <Link to ={'/admin/detail/hotel/'+ hotel.hotelId}> 

    <div className={classes.cardActionArea} style={{display:'inline-flex'}}>
    <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xl={true}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.delhitourism.com/images/dt/hotel/1.jpg"
                    title="Hotel image"
                />
                 <CardContent key={i}>
                <Typography gutterBottom variant="h5" component="h2">
                <span> {hotel.hotelName}</span>
                
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <b>Id:</b> {hotel.hotelId}<br/> 
                    <b>City:</b> {hotel.city}<br/> 
                    <b>Address:</b> {hotel.address}<br/>
                    <b>Description:</b> {hotel.description}<br/>
                    <b>Average_rate_per_day:</b> {hotel.average_rate_per_day}<br/>
                    <b>Email:</b> {hotel.email}<br/>
                    <b>Phone1:</b> {hotel.phone1}<br/>
                    <b>Phone2:</b> {hotel.phone2}<br/>
                    <b>Website:</b> {hotel.website}<br/>
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
      ><Button onClick={ this.deleteHotel.bind(this,hotel.hotelId) }>
        Delete
      </Button>
      </Button>
      <Link to={"/admin/update/"+hotel.hotelId}>
        
      
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      > Edit
       </Button>
      </Link>
       </CardActions>
        </Card>
        </Grid>
        </Grid> 
        
</div> 
</Link> 
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
    hotels : state.admin.hotels
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchHotels : () => dispatch(actions.fetchHotels()),
    onDeleteHotel : (id) => dispatch(actions.deleteHotel(id))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(withStyles(styles)(ViewHotel));