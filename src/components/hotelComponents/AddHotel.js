import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "components/actions/hotel";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

const useStyles =((theme) => ({
  root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

class AddHotel extends Component {
  constructor() {
    super();
        this.city = React.createRef();
        this.hotelName = React.createRef();
        this.address = React.createRef();
        this.description = React.createRef();
        this.average_rate_per_day = React.createRef();
        this.email = React.createRef();
        this.phone1 = React.createRef();
        this.phone2 = React.createRef();
        this.website = React.createRef();
        this.state = {message: ''}
  }

  addHotel() {
    var hotel = {
      city: this.city.current.value,
      hotelName: this.hotelName.current.value,
      address: this.address.current.value,
      description: this.description.current.value,
      average_rate_per_day: this.average_rate_per_day.current.value,
      email: this.email.current.value,
      phone1: this.phone1.current.value,
      phone2: this.phone2.current.value,
      website: this.website.current.value
    };


    this.props.onAddHotel(hotel)

    
  }

  render() {
    const classes = useStyles;
    return (

<div>
<br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.city} id="outlined-basic" style={{ margin: 8,width: 300,height: 20}} label="City"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.hotelName} id="outlined-basic" style={{ margin: 8,width: 300,height: 20}} label="Hotel Name"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.address} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} label="Address"
     margin="normal" variant="outlined" />
</form>
<br/>   
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     

  <TextField inputRef={this.description} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} label="Description"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.average_rate_per_day} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="Average rate per day"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.email} id="outlined-basic" style={{ margin: 8,width: 300,height: 20}} label="Email"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.phone1} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="Phone1"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.phone2} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="Phone2"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>    
<TextField inputRef={this.website} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }}  label="Website"
     margin="normal" variant="outlined" />
</form>
<br/>  
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addHotel.bind(this)}>Add Hotel</Button>
</div><br/>
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
<Alert severity="success">{this.props.message}</Alert>
</div>
</div>
)
}
}

const mapStateToProps = (state) =>{

  return{
    message : state.admin.message,
    hotels : state.admin.hotels
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddHotel : (payload) => dispatch(actions.addHotel(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddHotel)