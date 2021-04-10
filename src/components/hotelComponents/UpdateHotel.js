import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from 'components/actions/hotel'
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
//import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert';

const useStyles = ((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
    },
  }));
class UpdateHotel extends Component {
  constructor(props) {
    super();
        this.hotelId = React.createRef();
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

  updateHotel() {
    console.log("updating...");

    var hotel = {
       hotelId: this.hotelId.current.value,
     
      hotelname: this.hotelName.current.value,
      
      description: this.description.current.value,
      average_rate_per_day: this.average_rate_per_day.current.value,
      email: this.email.current.value,
      phone1: this.phone1.current.value,
      phone2: this.phone2.current.value,
      website: this.website.current.value
    };

    this.props.onUpdateHotel(hotel)

  }

  componentDidMount()
  {
    console.log(this.props.match.params.id)
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
   { <TextField inputRef={this.hotelId}  value = {this.props.match.params.id} id="outlined-basic" style={{ margin: 8 }} type="hidden"
      /> }
     
</form><br/>

<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.hotelName} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} label="Hotel Name"
     margin="normal" variant="outlined" />
</form><br/>
 
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
<TextField inputRef={this.email} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} label="Email"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.phone1} id="outlined-basic" style={{ margin: 8,width: 300,height: 20}} type ="number" label="Phone1"
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
  
<Button variant="contained" size="small" color="primary" className={classes.margin} startIcon={<SaveIcon />} 
onClick={this.updateHotel.bind(this)}>Update Hotel</Button>
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


const mapStateToProps = (state)=>{
  
  return {
   
    message : state.admin.message
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateHotel : (payload) => dispatch(actions.EditHotel(payload))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateHotel)