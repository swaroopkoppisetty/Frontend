import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/payment";
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

class AddPayments extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
        this.bookingId = React.createRef();
        this.props = props
        this.state = {message: ''}

  }

  AddPayments() {
    var payment = {
     
        bookingDetails : {
          bookingId: this.bookingId.current.value
      }
      
    };


    this.props.onAddPayments(payment)

    
  }

  render() {
    const classes = useStyles;
    return (
      // <div>
      //   <div className="w-50 h-10 user-form">
      //     <div className="input-group mb-3">
      //       <input
      //         ref={this.bookingId}
      //         type="number"
      //         className="form-control"
      //         placeholder="bookingId"
      //       />
      //     </div>
         
         
          
        
      //     <button
      //       className="add-btn btn btn-primary"
      //       onClick={this.AddPayments.bind(this)}
      //     >
      //       Add
      //     </button>
      //   </div>
      //   <div className="alert alert-success" role="alert">
      //     {this.props.message}
      //   </div>
      // </div>
      <div>
<br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.bookingId} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} label="Booking Id"
     margin="normal" variant="outlined" />
</form><br/>
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.AddPayments.bind(this)}>Add Payment</Button>
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
    message : state.message,
    payments : state.payments
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddPayments : (payload) => dispatch(actions.addPayments(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddPayments)