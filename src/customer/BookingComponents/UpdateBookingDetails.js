import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "components/actions/bookingDetails";
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


class UpdateBookingDetails extends Component {

    constructor(){
        super();
        
        this.bookingId = React.createRef();
        this.noOfAdults = React.createRef();
        this.noOfChildren= React.createRef();
       
       
        this.state = {message: ''}
    }
    

    updateBookingDetails(){
        var BookingDetails = {
        bookingId : this.bookingId.current.value,
       
        noOfAdults: this.noOfAdults.current.value,
        noOfChildren: this.noOfChildren.current.value,
       
        };
        this.props.onUpdateBookingDetails(BookingDetails)
    }
    componentDidMount()
  {

    console.log(this.props.match.params.bookingId)

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
   <TextField inputRef={this.bookingId}  value = {this.props.match.params.bookingId} id="outlined-basic" style={{ margin: 8 }} type="hidden" 
       />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.noOfAdults} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type="number" label="No of Adults"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.noOfChildren} id="outlined-basic" style={{ margin:8 ,width: 300,height: 20 }} type="number" label="No of Children"
     margin="normal" variant="outlined" />
</form><br/>

<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} startIcon={<SaveIcon />} 
onClick={this.updateBookingDetails.bind(this)}>Update BookingDetails</Button>
</div><br/>
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
<Alert severity="success">{this.props.message}</Alert>
</div>
</div>
    );
  }
}


const mapStateToProps = (state)=>{
  
  return {
   
    message : state.customer.message
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateBookingDetails : (payload) => dispatch(actions.EditBookingDetails(payload))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateBookingDetails)