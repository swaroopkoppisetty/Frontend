import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Transaction";
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

class AddTransactions extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
        this.amount = React.createRef();
        this.paymentId = React.createRef();
        this.props = props
        this.state = {message: ''}

  }

  AddTransactions() {
    var Transaction = {
      bookingDetails:{
         amount: this.amount.current.value
      },
        payment: {
          paymentId: this.paymentId.current.value
      }
      
    };


    this.props.onAddTransactions(Transaction)

    
  }

  render() {
    const classes = useStyles;
    return (
      // <div>
      //   <div className="w-50 h-10 user-form">
      //     <div className="input-group mb-3">
      //       <input
      //         ref={this.paymentId}
      //         type="number"
      //         className="form-control"
      //         placeholder="paymentId"
      //       />
      //     </div>

      //     <div className="input-group mb-3">
      //       <input
      //         ref={this.amount}
      //         type="number"
      //         className="form-control"
      //         placeholder="amount"
      //       />
      //     </div>
         
         
          
        
      //     <button
      //       className="add-btn btn btn-primary"
      //       onClick={this.AddTransactions.bind(this)}
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
    <TextField inputRef={this.paymentId} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} label="Payment Id"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.amount} id="outlined-basic" style={{ margin: 8 }} label="Amount"
     margin="normal" variant="outlined" />
</form><br/>
<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.AddTransactions.bind(this)}>Add Transactions</Button>
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
    message : state.customer.message,
    Transactions : state.customer.Transactions
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddTransactions : (payload) => dispatch(actions.addtransactions(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddTransactions)