import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../actions/bookingDetails";
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
class AddBookingDetails extends Component {

    constructor(){
        super();
        this.userName = React.createRef();
        this.bookedFrom = React.createRef();
        this.bookedTo = React.createRef();
        this.noOfAdults = React.createRef();
        this.noOfChildren= React.createRef();
        this.amount= React.createRef();
        this.hotelName = React.createRef();
        this.roomType = React.createRef();
        this.roomCount = React.createRef();
        this.state = {message: ''}
    }
    

    addBookingDetails(){
        var BookRequest = {
         
        userName: this.userName.current.value,
        hotelName: this.hotelName.current.value,
        roomType: this.roomType.current.value,
       roomCount: this.roomCount.current.value,
       bookedFrom: this.bookedFrom.current.value,
       bookedTo: this.bookedTo.current.value,
       noOfAdults: this.noOfAdults.current.value,
       noOfChildren: this.noOfChildren.current.value,
       amount: this.amount.current.value,
    
        };
        this.props.onAddBookingDetails(BookRequest)
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
    <TextField inputRef={this.userName} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} label="User Name"
     margin="normal" variant="outlined" />
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
    <TextField inputRef={this.roomType} id="outlined-basic" style={{ margin: 8 ,width: 300,height: 20}} label="Room Type"
     margin="normal" variant="outlined" />
</form>
<br/>   
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     

  <TextField inputRef={this.roomCount} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="Room Count"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.bookedFrom} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="date" 
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.bookedTo} id="outlined-basic" style={{ margin: 8 ,width: 300,height: 20}} type ="date" 
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.noOfAdults} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="No of Adults"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.noOfChildren} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="No of Children"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>    
<TextField inputRef={this.amount} id="outlined-basic" style={{ margin: 8,width: 300,height: 20 }} type ="number" label="Amount"
     margin="normal" variant="outlined" />
</form>
<br/>  
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addBookingDetails.bind(this)}>Add Booking</Button>
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
    
    const mapStateToProps = (state) =>{
    
      return{
        message : state.admin.message,
        bookingDetails : state.admin.bookingDetails
      }
    
    }
    
    const mapDispatchToState = (dispatch) =>{
      return{
        onAddBookingDetails : (payload) => dispatch(actions.addBookingDetails(payload))
      }
    }
    
    export default connect(mapStateToProps,mapDispatchToState)(AddBookingDetails)