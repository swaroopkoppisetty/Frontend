import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../../actions/user'
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


class AddUser extends Component {
    constructor() {
        super();
        this.userName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.mobile = React.createRef();
        this.address = React.createRef();
        this.state = { message: '' }
    }

    addUser() {
        var user = {
            userName: this.userName.current.value,
            email: this.email.current.value,
            password: this.password.current.value,
            mobile: this.mobile.current.value,
            address: this.address.current.value,
        };


        this.props.onAddUser(user)


    }

    render() {
        const classes = useStyles;
        return (
        //     <div>
        //         <div className="w-50 user-form">
        //             <div className="input-group mb-3">
        //                 <input
        //                     ref={this.userName}
        //                     type="text"
        //                     className="form-control"
        //                     placeholder="UserName"
        //                 />
        //             </div>
        //             <div className="input-group mb-3">
        //                 <input
        //                     ref={this.email}
        //                     type="text"
        //                     className="form-control"
        //                     placeholder="Email"
        //                 />
        //             </div>
        //             <div className="input-group mb-3">
        //                 <input
        //                     ref={this.password}
        //                     type="text"
        //                     className="form-control"
        //                     placeholder="Password"
        //                 />
        //             </div>
        //             <div className="input-group mb-3">
        //                 <input
        //                     ref={this.mobile}
        //                     type="text"
        //                     className="form-control"
        //                     placeholder="Mobile"
        //                 />
        //             </div>
        //             <div className="input-group mb-3">
        //                 <input
        //                     ref={this.address}
        //                     type="text"
        //                     className="form-control"
        //                     placeholder="Address"
        //                 />
        //             </div>
        //             <button
        //                 className="add-btn btn btn-primary"
        //                 onClick={this.addUser.bind(this)}
        //             >
        //                 Add
        //   </button>
        //         </div>
        //         <div className="alert alert-success" role="alert">
        //             {this.props.message}
        //         </div>
        //     </div>
        <div>
<br/>
<form className={classes.root} noValidate autoComplete="off" style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
    <TextField inputRef={this.userName} id="outlined-basic" style={{ margin: 8 ,width:300,height:20}} label="User Name"
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
    <TextField inputRef={this.password} id="outlined-basic" style={{ margin: 8 ,width:300,height:20}} label="Password"
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
  
<Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addUser.bind(this)}>Add User</Button>
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
        message: state.admin.message,
        users: state.admin.users
    }

}

const mapDispatchToState = (dispatch) => {
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(AddUser)