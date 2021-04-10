import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from 'components/actions/user'
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

class UpdateUser extends Component {
    constructor() {
        super();
        this.userId = React.createRef();
        this.userName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.mobile = React.createRef();
        this.address= React.createRef();
        this.state = { message: '' }
    }

    updateUser() {
        console.log("updating...");

        var user = {
            userId: this.userId.current.value,
            userName: this.userName.current.value,
            email: this.email.current.value,
            password: this.password.current.value,
            mobile: this.mobile.current.value,
            address: this.address.current.value,
        };

        this.props.onUpdateUser(user)

    }

    componentDidMount() {

       console.log(this.props.match.params.userId)

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
   <TextField inputRef={this.userId}  value = {this.props.match.params.userId} id="outlined-basic" style={{ margin: 8 }} type="hidden"
      />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.userName} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} label="User Name"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.email} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} label="Email"
     margin="normal" variant="outlined" />
</form><br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.password} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} label="Password"
     margin="normal" variant="outlined" />
</form>
<br/>   
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     

  <TextField inputRef={this.mobile} id="outlined-basic" style={{ margin: 8,width:300,height:20 }} type="number" label="Mobile"
     margin="normal" variant="outlined" />
</form>
<br/>      
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>     
<TextField inputRef={this.address} id="outlined-basic" style={{ margin: 8,width:300,height:20 }}  label="Address"
     margin="normal" variant="outlined" />
</form>
<br/>      

<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
  
<Button variant="contained" size="small" color="primary" className={classes.margin} startIcon={<SaveIcon />} 
onClick={this.updateUser.bind(this)}>Update User</Button>
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


const mapStateToProps = (state) => {

    return {

        message: state.customer.message
    }
}

const mapDispatchToState = (dispatch) => {

    return {
        onUpdateUser: (payload) => dispatch(actions.EditUser(payload))
    }

}

export default connect(mapStateToProps, mapDispatchToState)(UpdateUser)